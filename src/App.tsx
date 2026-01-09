import { useState } from 'react';
import Navbar from './components/Navbar';
import EventTimeline from './components/EventTimeline';
import Hero from './components/Hero';
import ClubDirectory from './components/ClubDirectory';
import AICompass from './pages/AICompass';
import Login from './pages/Login';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <ClubDirectory />
          </>
        );
      case 'ai-compass':
        return <AICompass />;
      case 'login':
        return <Login />;
      case 'events':
        return <EventTimeline />;
      default:
        return (
          <>
            <Hero />
            <ClubDirectory />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
