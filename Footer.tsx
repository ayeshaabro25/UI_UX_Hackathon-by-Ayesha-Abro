// src/app/components/footer.tsx

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Side */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Bandage</h2>
        </div>

        {/* Center Section */}
        <div className="flex space-x-20">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Company Info</h3>
            <ul className="mt-4 text-sm text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Legal</h3>
            <ul className="mt-4 text-sm text-gray-600">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Features</h3>
            <ul className="mt-4 text-sm text-gray-600">
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Resources</h3>
            <ul className="mt-4 text-sm text-gray-600">
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Get In Touch</h3>
            <form className="mt-4 space-y-4">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 w-full border border-gray-300 rounded-md"
              />
              <button className="w-full bg-blue-500 text-white py-3 rounded-md">
                Subscribe
              </button>
              <p className="text-sm text-gray-600">
                Lorem imp sum dolor Amit
              </p>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-5">
          <a href="#" className="text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Footer Text */}
      <div className="text-center mt-10 text-sm text-gray-600">
        <p>Made With Love By Finland All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
