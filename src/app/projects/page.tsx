import Image from "next/image";
import Typewriter from 'typewriter-effect';
import project1 from "../../../project1.jpg";
import project2 from "../../../project2.jpg";
import project3 from "../../../project3.jpg";
import project4 from "../../../project4.png";
import project5 from "../../../project5.jpg";
import project6 from "../../../project6.jpg";
import project7 from "../../../project7.png";
import project8 from "../../../project8.jpg";
import Link from "next/link";

const projects = [
  {
    src: project7,
    alt: "Resume Builder",
    title: "Resume Builder",
    description: "Create a professional resume in minutes and impress potential employers. Highlight your skills and experience with ease!",
    link: "https://resume-builder-six-sable.vercel.app/"
  },
  {
    src: project2,
    alt: "Urdu Poetry Generator",
    title: "Urdu Poetry Generator",
    description: "Describe your mood in poetic story with the colors of your emotions. Feel every moment, every emotion, with your unique expressions!",
    link: "https://fatimas-urdu-poetry-portal.vercel.app/"
  },
  {
    src: project3,
    alt: "My Blog Website",
    title: "My Blog Website",
    description: "My creativity and achievements with a personal blog website. Share your thoughts and passions about this Blog!",
    link: "https://my-project-s-blog.vercel.app/"
  },
  {
    src: project4,
    alt: "Nextjs 15 Blog With Chatbot",
    title: "Next 15 Blog with Chatbot",
    description: "Explore my Next15 blog with a smart chatbot for seamless interaction. Provide real-time support and personalized experiences to you!",
    link: "https://nextjs-15-blog-with-chatbot.vercel.app/"
  },
  {
    src: project5,
    alt: "Github Profiles Search App",
    title: "Github Profiles Search App",
    description: "Discover and explore GitHub profiles with ease. Find developers, projects, and collaborations to enhance your coding journey!",
    link: "https://github-search-beige-kappa.vercel.app/"
  },
  {
    src: project6,
    alt: "Recipe Search App",
    title: "Recipe Search App",
    description: "Discover delicious recipes in seconds with our easy-to-use search app. Find, save, and cook your favorite dishes effortlessly.",
    link: "https://recipe-search-website-theta.vercel.app/"
  },
  {
    src: project1,
    alt: "Fizzi 3D Animated Website",
    title: "Fizzie 3D Animated Website",
    description:"Experience the refreshing world of Soda with stunning 3D animations on my website. Immerse yourself in interactive, vibrant visuals like never before!",
    link: "https://fizzi-3d-animated-page.vercel.app/"
  },
  {
    src: project8,
    alt: "Furniture Ecommerce Hub",
    title: "Furniture Ecommerce Hub",
    description: "Transform your space with ease through my furniture e-Commerce website. Shop a wide range of stylish, quality pieces delivered to your door!",
    link: "https://furniture-hub-main.vercel.app/"
  }
];


const Project = () => {
  return (
    <section className="text-white body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="flex justify-center items-center pb-14 text-5xl font-serif font-bold text-white hover:text-pink-600 animate-bounce hover:uppercase">
            <span className="text-pink-600 text-5xl hover:text-white">P</span>rojects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-3xl text-pink-400  font-serif">
          
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 lg:w-1/4 md:w-1/2"
              data-aos="flip-right" data-aos-duration="2000"
             
            >
              <div className="flex flex-col items-center text-center border border-gray-700 rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl relative">
                <div className="relative h-[200px] w-full overflow-hidden rounded-t-lg transition-transform transform hover:scale-110">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    className="object-contain w-full h-full"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 transition-opacity hover:opacity-40"></div>
                </div>
                <div className="w-full p-4 bg-gray-800 h-[220px]">
                  <Link href={project.link}>
                    <h1 className="text-2xl font-serif text-pink-600 hover:uppercase hover:text-white transition-colors duration-300 cursor-pointer mb-3">
                      {project.title}
                    </h1>
                  </Link>
                  <p className="mb-4 text-gray-400">
                    {project.description}
                  </p>
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
