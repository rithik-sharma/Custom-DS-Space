// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2">
      <div className="container mx-auto text-center px-4">
        <p className="text-xs mb-1">
          © {new Date().getFullYear()} Custom-DS Space. All rights reserved.
        </p>
        <div className="flex justify-center items-center space-x-2 text-xs">
          <p>
            If you like this project, please give it a star on{' '}
            <a 
              href="https://github.com/rithik-sharma/Custom-DS-Space" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:underline"
            >
              GitHub
            </a>.
          </p>
          <span className="motion-safe:animate-bounce inline-block text-yellow-400 text-xl">⭐</span>
        </div>
        <div className="mt-2 text-xs">
          <p className="text-gray-400">Made with ❤️ and React</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
