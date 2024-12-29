"use client";

import Image from "next/image";
import me from "../../../About.jpg";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <section className="text-white body-font bg-black overflow-hidden">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          {/* Profile Image */}
          <div className="relative">
            <Image
              src={me}
              alt="me2"
              height={400}
              width={400}
              className="rounded-full shadow-lg transform transition-transform duration-500 hover:scale-105 hover:rotate-3"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            {/* Circular Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 rounded-full animate-pulse"></div>
          </div>

          {/* Text Content */}
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="ml-3 text-4xl font-serif font-bold text-white hover:text-pink-600 animate-bounce transition-all duration-700 hover:uppercase">
              <span className="text-pink-600 text-5xl hover:text-white transition-all duration-700">
                A
              </span>
              bout Me
            </h1>
            <h2
              className="title-font sm:text-4xl text-3xl mb-4 text-pink-400 font-serif font-semibold relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1500"
            >
              <Typewriter
                options={{
                  strings: ["Crafting My Tech and Business Journey!"],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* Underline Animation */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-violet-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>
            </h2>
            <p
              className="mb-8 leading-relaxed text-lg text-gray-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              I am an experienced frontend developer, currently expanding my
              expertise by learning Next.js for both backend and frontend
              development. My journey in tech was significantly shaped by
              completing a TypeScript course at the Governor Sindh IT Initiative
              (GIAIC). It was here that I also embarked on learning Cloud
              Applied Generative AI Engineering with cutting-edge technologies.
              As a senior student at GIAIC, I take pride in assisting my peers
              in their learning journeys. Additionally, I am pursuing a Bachelor
              degree in Business Administration (BBA), where I am gaining
              insights into the business industry.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <button className="inline-flex items-center justify-center text-white animate-bounce bg-blue-600 border-0 py-2 px-4 focus:outline-none hover:bg-blue-400 text-lg rounded-full transition-transform transform hover:scale-110 hover:shadow-lg">
                <Link href="https://www.facebook.com/fatimanazeer78?mibextid=ZbWKwL">
                  <FaFacebookF size={26} />
                </Link>
              </button>
              <button className="inline-flex items-center justify-center text-white animate-bounce bg-pink-500 border-0 py-2 px-4 focus:outline-none hover:bg-pink-300 text-lg rounded-full transition-transform transform hover:scale-110 hover:shadow-lg">
                <Link href="https://www.instagram.com/fatimayy__here">
                  <FaInstagram size={26} />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
