import Image from "next/image";
import Typewriter from "typewriter-effect";
import project1 from "../../../project1.jpg";
import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project4 from "../../../project4.jpg";
import project5 from "../../../project5.jpg";
import project6 from "../../../project6.jpg";
import project7 from "../../../project7.jpg";
import project8 from "../../../project8.jpg";
import Link from "next/link";

const projects = [
  {
    src: project7,
    alt: "Coffee Website Along AI ChatBot",
    title: "Coffee Website Along AI ChatBot",
    description:
      " Let's Explore together our Coffee Website with an AI chatbot that helps you find the perfect blend and provides tailored brewing tips and recommendations effortlessly.",
    link: "https://coffeewebsite7.netlify.app/",
  },
  {
    src: project2,
    alt: "Image Search App",
    title: "Image Search App",
    description:
      "Discover stunning visuals with our Image Search App. Quickly browse, filter, and save images using an intuitive interface designed for effortless exploration, making it easy to find exactly what you need.",
    link: "https://github.com/FatimaNazeer777/Image-Search",
  },
  {
    src: project3,
    alt: "Trading Website",
    title: "Trading Website",
    description:
      "Trade smarter with our secure platform, offering real-time data and intuitive tools. Make informed decisions and execute trades with ease.",
    link: "https://trading-website-seven.vercel.app/",
  },
  {
    src: project4,
    alt: "Table Generator",
    title: "Table Generator",
    description:
      "Create custom tables effortlessly with our intuitive generator. Design, adjust, and download tables to fit your needs in minutes.",
    link: "https://github.com/FatimaNazeer777/Table-Generator",
  },
  {
    src: project5,
    alt: "Google Search App",
    title: "Google Search App",
    description:
      "Find what you're looking for quickly with our powerful search app. Get instant answers and explore a world of information at your fingertips.",
    link: "https://github.com/FatimaNazeer777/Google-Search-App",
  },
  {
    src: project6,
    alt: "Recipe Search App",
    title: "Recipe Search App",
    description:
      "Discover delicious recipes in seconds with our easy-to-use search app. Find, save, and cook your favorite dishes effortlessly.",
    link: "https://github.com/FatimaNazeer777/Recipe-Maker",
  },
  {
    src: project1,
    alt: "Food Website",
    title: "Food Website",
    description:
      "Enjoy delicious meals made with the freshest ingredients. Each dish is carefully crafted to delight your taste buds. Come and experience great food with us.",
    link: "https://foodwebsite77.netlify.app/",
  },
  {
    src: project8,
    alt: "Weather Forecast App",
    title: "Weather Forecast App",
    description:
      "Stay prepared with accurate weather forecasts at your fingertips. Get real-time updates and detailed forecasts to plan your day with confidence.",
    link: "https://github.com/FatimaNazeer777/CLI-Weather-Forecast",
  },
];

const Project = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-pink-600 animate-bounce transition-all duration-700 hover:uppercase">
            <span className="text-pink-600 text-5xl hover:text-white transition-all duration-700">
              P
            </span>
            rojects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-pink-400  font-serif"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right"
              data-aos-duration="2000"
            >
              <div className="flex flex-col items-center text-center border border-gray-700 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-cover w-full h-full"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-gray-800 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-pink-600 hover:uppercase hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
