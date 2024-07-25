// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Custom-DS Space. All rights reserved.
        </p>
        <div className="mt-2">
          <a href="https://github.com/yourusername/yourrepo" className="text-blue-400 hover:underline">
            GitHub
          </a>
          <span className="mx-2">|</span>
          <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-400 hover:underline">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
