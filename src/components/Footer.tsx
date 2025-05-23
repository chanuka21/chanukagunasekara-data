
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-yellow-400 mb-4">
              Chanuka Jayampath Gunasekara
            </div>
            <p className="text-indigo-100 leading-relaxed max-w-md">
              Data Scientist & Developer passionate about transforming data into insights 
              and building innovative solutions through AI and full-stack development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-indigo-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-indigo-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-indigo-100 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-indigo-100 hover:text-white transition-colors">Skills & Expertise</a></li>
              <li><a href="#certificates" className="text-indigo-100 hover:text-white transition-colors">Certificates</a></li>
              <li><a href="#contact" className="text-indigo-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-400">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-indigo-100">Data Analysis</span></li>
              <li><span className="text-indigo-100">Machine Learning</span></li>
              <li><span className="text-indigo-100">Data Visualization</span></li>
              <li><span className="text-indigo-100">Web Development</span></li>
              <li><span className="text-indigo-100">Consulting</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-indigo-800 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-indigo-100">
            <span>© 2024 Chanuka Jayampath Gunasekara. Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
