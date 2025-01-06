"use client";

import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';
import Link from "next/link";

export default function Services() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-800 py-24">
      <div className="container mx-auto text-center text-white">
        {/* Header Section */}
        <h1 className="text-5xl font-extrabold pb-12 text-transparent bg-clip-text bg-white animate-pulse">
  S<span className="text-pink-600">ervices</span>
        </h1>
        <p className="mb-16 text-lg text-gray-400">Explore our professional web solutions designed to help you succeed in the digital world.</p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Web Development Card */}
          <div className="bg-gradient-to-br from-blue-500 to-teal-400 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white text-blue-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <FaCode size={40} />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white">Web Development</h2>
            <p className="text-gray-200">
              Expert web development services to bring your ideas to life. From conceptualization to deployment, I craft robust, scalable, and secure web applications that meet your business needs.
            </p>
          </div>

          {/* Web Design Card */}
          <div className="bg-gradient-to-br from-pink-500 to-yellow-400 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white text-pink-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <FaPaintBrush size={40} />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white">Web Design</h2>
            <p className="text-gray-200">
              Creative web designing solutions to captivate your audience. I design visually stunning, user-friendly, and engaging websites that reflect your brand identity and drive growth.
            </p>
          </div>

          {/* Responsive Web Design Card */}
          <div className="bg-gradient-to-br from-green-500 to-yellow-500 p-8 rounded-xl shadow-xl transform transition-transform hover:scale-105 hover:rotate-2">
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 bg-white text-green-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-110">
                <FaMobileAlt size={40} />
              </div>
            </div>
            <h2 className="text-xl font-semibold mb-4 text-white">Responsive Web Design</h2>
            <p className="text-gray-200">
              Responsive web design services to ensure seamless user experiences across all devices. Mobile, tablet, and desktop-friendly designs that adapt to any screen size.
            </p>
          </div>
        </div>

        {/* Contact Button */}
        <Link href="../contact">
          <button className="mt-16 px-8 py-3 text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-lg font-semibold transform transition-transform hover:scale-110 hover:bg-gradient-to-r hover:from-red-700 hover:to-orange-600 shadow-xl">
            CONTACT ME
          </button>
        </Link>
      </div>
    </section>
  );
}
