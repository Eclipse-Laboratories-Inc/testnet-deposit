// src/components/FooterComponent.js

import { Linkedin, Instagram, Youtube, Twitter } from 'lucide-react';

const FooterComponent = () => {
  return (
    <footer className="mt-16 bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.youtube.com/@KrushnaSarovar" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-200">
            <Youtube className="w-6 h-6" />
          </a>
          {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-200">
            <GitHub className="w-6 h-6" />
          </a> */}
          <a href="https://in.linkedin.com/in/krushna-sarovar-ba2222222" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-200">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-200">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://instagram.com/krushna.540" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition duration-200">
            <Instagram className="w-6 h-6" />
          </a>
        </div>

        {/* Other Footer Links */}
        <div className="text-center text-sm text-gray-400">
          <p>&copy; 2025 Sarovar. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/terms" className="hover:text-green-500">Terms of Service</a>
            <a href="/privacy" className="hover:text-green-500">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
