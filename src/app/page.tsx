"use client"
import Image from "next/image";
import  Hero  from "./hero/page";
import About from "./about/page"
import Project from "./projects/page";
import Services from "./services/page";
import me from "./me2.jpg"
import Link from "next/link";
import Skills from "./skills/page";
import Contact from "./contact/page";
import 'aos/dist/aos.css'; // Import AOS CSS
import { useEffect } from 'react';
import AOS from 'aos'


export default function Home() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
return(
  <>

 {/* hero */}
 <Hero/>
 {/* about */}
 <About/>
 {/* skills */}
 <Skills/>
 {/* projects */}
 <Project/>
 {/* services */}
 <Services/>
 {/* contact */}
 <Contact/>
 
 
  </>
)
}
