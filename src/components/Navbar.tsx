import { Compass } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/70 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Compass className="w-8 h-8 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              NMIT Club Compass
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Clubs
            </button>
            <button 
              onClick={() => onNavigate('events')} 
              className={`text-sm font-medium transition-colors ${
                currentPage === 'events'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => onNavigate('ai-compass')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'ai-compass'
                  ? 'text-blue-400'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              AI Compass
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
