"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";
import me from "../me1.jpg";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

 const Hero = () => {
  return (
    <section className="text-white body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <h1 className="title-font text-5xl mb-5 text-pink-600 font-serif font-bold ml-5 hover:uppercase hover:text-white">
            <div>
              <h1 className="flex justify-center items-center">Hello,</h1>
              <Typewriter
                options={{
                  strings: [' I am Fatima Nazeer...'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="mb-8 leading-relaxed ml-10"
             data-aos="fade-up" 
             data-aos-easing="ease-out-cubic"
             data-aos-duration="1500">
            I am a web developer and BBA student, exploring the intersection of business and technology through cloud-applied generative AI engineering. My journey is about mastering the latest AI tools to enhance web development and drive business innovation.
          </p>
          
          <div className="flex justify-center ml-26">
            <button className="inline-flex text-white bg-gray-800 border-1 py-2 px-4 focus:outline-none hover:bg-gray-600 text-lg rounded-full animate-bounce">
              <Link href="https://github.com/FatimaNazeer777">
                <FaGithub size={26} />
              </Link>
            </button>
            <button className="ml-4 inline-flex text-white bg-blue-600 border-1 py-2 px-4 focus:outline-none hover:bg-blue-400 text-lg rounded-full animate-bounce">
              <Link href="https://www.linkedin.com/in/fatima-nazeer-493a83278/">
                <FaLinkedin size={26} />
              </Link>
            </button> 
          </div>
        </div>
        
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/5" data-aos="flip-down" data-aos-duration="2000">
    <div className="mockup-phone ">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1 hover:scale-150 duration-700 "><Image src={me} alt="me"/></div>
  </div>
</div>
    </div>
  </div>
</section>

    );
  }
export default Hero;