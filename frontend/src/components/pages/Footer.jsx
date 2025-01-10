import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaYoutube,
  FaPinterest,
  FaTiktok,
} from "react-icons/fa";
import Wrapper from "../Wrapper";

const Footer = () => {
  return (
    <footer className="bg-background shadow-4xl border text-text py-12">
      <Wrapper>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl text-text font-semibold mb-4">About Us</h2>
            <p className="text-base leading-relaxed">
              We are a team of passionate developers dedicated to building the
              best web and mobile experiences. Follow us on our social media
              channels to stay updated with our latest projects and updates.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-base space-y-2">
              <li>
                <a
                  href="/about"
                  className=" hover:text-primary transition-colors duration-300 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className=" hover:text-primary transition-colors duration-300 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className=" hover:text-primary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className=" hover:text-primary transition-colors duration-300 "
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
            <div className="flex justify-center text-text md:justify-start space-x-6 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:info@example.com"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaPinterest size={24} />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:text-primary transition-transform transform hover:scale-110 dark:hover:text-primary-dark"
              >
                <FaTiktok size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center mt-8 border-t border-gray-700 pt-4">
          <p className="mb-4">&copy; 2024 All rights reserved</p>
          <p className="text-sm">
            <a
              href="/privacy"
              className=" hover:text-primary transition-colors duration-300 dark:hover:text-primary-dark"
            >
              Privacy Policy
            </a>{" "}
            |
            <a
              href="/terms"
              className=" hover:text-primary transition-colors duration-300 ml-2 dark:hover:text-primary-dark"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
