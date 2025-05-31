import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to={'/'}>
          <div className="text-xl font-bold text-black dark:text-white">
            ANMOL JAIN
          </div>
          </Link>
          

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`hover:text-blue-600 transition duration-200 ${
                  location.pathname === link.path ? 'font-semibold text-blue-600' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors duration-200 ${
                location.pathname === link.path ? 'font-semibold text-blue-600' : ''
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
