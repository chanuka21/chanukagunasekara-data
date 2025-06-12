
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-yellow-400 text-center">Quick Links</h4>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <li><a href="#home" className="text-indigo-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-indigo-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-indigo-100 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-indigo-100 hover:text-white transition-colors">Skills & Expertise</a></li>
              <li><a href="#certificates" className="text-indigo-100 hover:text-white transition-colors">Certificates</a></li>
              <li><a href="#contact" className="text-indigo-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-indigo-100">
            <span>© 2024 Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
