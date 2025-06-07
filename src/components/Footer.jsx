import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      <div className="flex justify-center gap-6 mb-2">
        <a href="#!" className="text-blue-400 hover:underline">Privacy Policy</a>
        <a href="#!" className="text-blue-400 hover:underline">Terms of Service</a>
        <a href="#!" className="text-blue-400 hover:underline">Contact Us</a>
      </div>
      <p className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Food and Things. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
