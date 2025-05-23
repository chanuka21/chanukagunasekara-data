
import { ArrowDown, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-orange-500 flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-300/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm{' '}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Chanuka Jayampath
                </span>
                <span className="block text-4xl lg:text-5xl">
                  Data Scientist & Developer
                </span>
              </h1>
              <p className="text-lg text-white/90 max-w-lg">
                Passionate final-year undergraduate specializing in Statistics and Operational Research. 
                Transforming data into insights and building innovative solutions through AI and full-stack development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="flex items-center space-x-2 text-white border-2 border-white/30 px-8 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                <Play size={20} />
                <span>Watch Intro</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="text-2xl font-bold text-yellow-300">3+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-black">
                  50+
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center text-gray-600 text-6xl font-bold">
                    CJ
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute top-10 -right-5 bg-white/20 backdrop-blur-sm rounded-xl p-4 text-white">
              <div className="text-xl font-bold text-yellow-300">8+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;
