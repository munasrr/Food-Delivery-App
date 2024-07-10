import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background text-text shadow-2xl py-8 dark:bg-background-dark mt-44 dark:text-text-dark">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We are a team of passionate developers dedicated to building the
            best web and mobile experiences. Follow us on our social media
            channels to stay updated with our latest projects and updates.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-primary transition-colors duration-300 dark:hover:text-primary-dark"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-400 hover:text-primary transition-colors duration-300 dark:hover:text-primary-dark"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-primary transition-colors duration-300 dark:hover:text-primary-dark"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="text-gray-400 hover:text-primary transition-colors duration-300 dark:hover:text-primary-dark"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">Connect with Us</h2>
          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="mailto:info@example.com"
              className="text-gray-300 hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-4">
        <p className="mb-4">&copy; 2024 All rights reserved</p>
        <p className="text-sm">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-primary transition-colors duration-300 dark:hover:text-primary-dark"
          >
            Privacy Policy
          </a>{" "}
          |
          <a
            href="/terms"
            className="text-gray-400 hover:text-primary transition-colors duration-300 ml-2 dark:hover:text-primary-dark"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
