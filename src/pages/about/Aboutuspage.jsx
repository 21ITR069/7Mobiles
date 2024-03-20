// AboutUs.js

import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-green-400"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl px-6 py-12 bg-white shadow-md rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl font-bold mb-6 text-center text-gray-800"
        >
          About 7Mobiles Shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-700 mb-4 leading-relaxed"
        >
          Welcome to 7Mobiles, your trusted destination for premium mobile devices and accessories. With a commitment to quality and customer satisfaction, we strive to provide you with the latest smartphones, tablets, wearables, and more, all at competitive prices.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-gray-600 mb-8"
        >
          Visit us at: <span className="font-semibold">#84, CUDDALORE MAIN VIRUDHACHALAM -606001</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="w-full h-96"
        >
          <iframe
            title="7mobiles Shop Location"
            className="w-full h-full rounded-lg"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.4098326213715!2d79.31115941531591!3d11.515134392447413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babe9c501bbbe3b%3A0x6e8ec6e3e0e4e4d6!2s7Mobiles%20Shop!5e0!3m2!1sen!2sin!4v1647759991926!5m2!1sen!2sin"
          ></iframe>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
