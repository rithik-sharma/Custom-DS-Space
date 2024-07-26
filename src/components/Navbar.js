import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa'; // Import a star icon for a more modern look

function Navbar() {
  const [quote, setQuote] = useState('');
  const navigate = useNavigate();

  const quotes = [
    "Life is what happens when you're busy making other plans.",
    "The only way to do great work is to love what you do.",
    "You miss 100% of the shots you don’t take.",
    "Code is poetry for computers.",
    "The only limit is your imagination.",
    "Write clean code, it's a form of respect.",
    "Debugging is like hunting for a needle in a haystack.",
    "Every line of code is a brick in your digital castle.",
    "Learn, code, repeat.",
    "Simplicity is the ultimate sophistication.",
    "Good code is its own best documentation.",
    "The future is built one line of code at a time.", 
    "Turn your passion into pixels.",
    "Code with purpose, create with impact.",
    "Every error is a learning opportunity.", 
    "Small steps, giant leaps in coding.", 
    "Code like a pro, think like a user.",
    "Your code is your voice in the digital world.", 
    "Persistence is the key to unlocking coding challenges.",
    "Find your coding zen.",
    "Code with heart, ship with pride.",
    "The best code is the code that works.",
    "Dream it, code it, achieve it."
  ];

  useEffect(() => {
    displayQuote(); // Set a random quote when the component mounts
  }, []);

  const displayQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center">
      <div 
        className="text-2xl font-extrabold cursor-pointer hover:text-gray-400 transition-colors"
        onClick={handleHomeClick}
      >
        Custom-DS Space
      </div>
      <div className="text-center mt-2 md:mt-0 md:text-lg flex-1">
        {quote}
      </div>
      <button 
        onClick={displayQuote} 
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors"
      >
        <FaStar className="inline-block mr-2 animate-bounce" />
        Get Quote
      </button>
    </nav>
  );
}

export default Navbar;
