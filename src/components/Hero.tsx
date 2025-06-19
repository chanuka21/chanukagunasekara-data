
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return <section id="home" className="min-h-screen bg-indigo-700 flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-12 h-12 bg-yellow-400 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-40 w-16 h-16 bg-indigo-500 rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
        <svg className="absolute top-20 right-20" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 25C15 15 25 15 30 25" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-40 right-1/4" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M10 25C15 15 25 15 30 25" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="text-yellow-400 block">Chanuka Gunasekara</span>
                <span className="block text-4xl lg:text-5xl">Data Analyst & Engineer</span>
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Passionate final-year undergraduate specializing in Statistics and Operational Research. 
                Transforming data into insights and building innovative data engineering solutions through AI and advanced analytics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToContact} className="bg-yellow-400 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105">
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10 flex justify-center">
              <div className="w-80 h-80 bg-yellow-400 rounded-full overflow-hidden flex items-center justify-center relative">
                <img 
                  src="https://i.postimg.cc/4yRTtcR5/photo-2025-05-24-00-55-381.jpg" 
                  alt="Chanuka Gunasekara" 
                  className="w-full h-full object-cover"
                />
                <svg className="absolute top-5 right-10" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M5 15C10 5 20 5 25 15" stroke="#4338ca" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>;
};

export default Hero;
