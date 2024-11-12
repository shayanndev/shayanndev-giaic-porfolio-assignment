// components/AboutMe.jsx
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 px-60 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg md:w-1/3 w-full">
          <img src="/images/boy.jpeg" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500" />
          <h2 className="text-xl font-semibold text-gray-800 m-5">Muhammad Shayan Khan</h2>
          <p className="text-indigo-500 mb-20">Software Engineer</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/shayankhandev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-500 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/shayanndev" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-500 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/_shayannk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-500 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/shayantechs" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-500 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="md:w-2/3 w-full">
          <h1 className="text-5xl font-bold text-gray-800 mb-12 relative inline-block">
            What I Do
            <span className="absolute left-0 bottom-0 h-2 w-20 bg-indigo-400"></span>
          </h1>
          <div className="flex space-x-4 mb-6">
            <a href="images/resume.pdf" download className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300">Download Resume</a>
            <a href="#projects" className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300">View Projects</a>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I'm a passionate developer with expertise in web design and development. I focus on creating clean, responsive, and user-friendly interfaces. My goal is to deliver efficient and effective solutions to meet business needs and exceed user expectations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a background in <span className="font-semibold text-indigo-500 underline">front-end</span> and <span className="font-semibold text-indigo-500 underline">back-end</span> technologies, I bring a full-stack perspective to each project. Let's collaborate to build something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
}
