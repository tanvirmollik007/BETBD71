import React from 'react';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-gray-900 p-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-bold text-yellow-400">BETBD71</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/sports" className="hover:text-yellow-300">Sports</a>
          <a href="/slots" className="hover:text-yellow-300">Slots</a>
          <a href="/casino" className="hover:text-yellow-300">Live Casino</a>
          <a href="/login" className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600">Login</a>
        </nav>
      </header>

      {/* Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-black text-center p-6">
        <h2 className="text-3xl font-bold">Play. Win. Repeat.</h2>
        <p className="mt-2">Enjoy real-time slots, sports & casino games at BETBD71</p>
      </div>

      {/* Game Categories */}
      <section className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {[
          { name: '🎰 Slots' },
          { name: '⚽ Sports' },
          { name: '🃏 Poker' },
          { name: '🎥 Live Casino' },
          { name: '🐟 Fish Game' },
          { name: '🎯 Lottery' },
          { name: '🎮 E-Sports' },
          { name: '💰 Jackpot' },
        ].map((game, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 cursor-pointer">
            <p className="text-xl">{game.name}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-sm p-4 text-gray-400">
        © 2025 BETBD71 • All rights reserved • Designed by TR Mallik
      </footer>
    </div>
  );
};

export default Home;
