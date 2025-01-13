import { FaYoutube, FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export const SocialLinks = () => {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="text-red-500 hover:text-red-600 text-3xl" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-600 hover:text-blue-700 text-3xl" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-800 hover:text-gray-900 text-3xl" />
      </a>
      <a href="https://x.com/Krushna540" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-blue-400 hover:text-blue-500 text-3xl" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-pink-500 hover:text-pink-600 text-3xl" />
      </a>
    </div>
  );
};
