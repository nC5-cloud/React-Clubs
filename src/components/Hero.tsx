import { Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToClubs = () => {
    const clubsSection = document.getElementById('clubs-section');
    if (clubsSection) {
      clubsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md bg-purple-500/10 border border-purple-500/30 mb-8">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-purple-300">Discover Your Campus Community</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Find Your Tribe
          </span>
          <br />
          <span className="text-white">at NMIT</span>
        </h1>

        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Connect with like-minded students, explore exciting clubs, and make your college experience unforgettable.
        </p>

        <button
          onClick={scrollToClubs}
          className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-105"
        >
          Find My Club
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
            →
          </span>
        </button>
      </div>
    </div>
  );
}
