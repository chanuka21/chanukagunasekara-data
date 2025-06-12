
import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills & Expertise', href: '#skills' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1b9Ad-qLScDfRV77qF8eyD6vllBseyDnN/view?usp=sharing', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-indigo-700">
            Chanuka
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={handleDownloadCV}
              className="bg-indigo-700 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-all duration-300 flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={handleDownloadCV}
              className="mt-4 bg-indigo-700 text-white px-6 py-2 rounded-full flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
