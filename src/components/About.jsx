// components/About.jsx
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" className="py-16 px-8 md:px-16 lg:px-60 bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">

        <div className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg md:w-1/3 w-full border border-gray-800 hover:border-neon transition-colors duration-300">
          <img src="/images/boy.jpeg" alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-neon shadow-[0_0_20px_rgba(0,245,255,0.3)]" />
          <h2 className="text-xl font-semibold text-white m-1">Muhammad Shayan Khan</h2>
          <p className="text-neon mb-20">Software Engineer</p>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.linkedin.com/in/shayankhandev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/shayanndev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://x.com/_shayannk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/shayantechs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        <div className="md:w-2/3 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 relative inline-block">
            What I Do
            <span className="absolute left-0 bottom-0 h-2 w-20 bg-neon shadow-[0_0_10px_rgba(0,245,255,0.5)]"></span>
          </h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <a href="/images/resume.pdf" download className="px-6 py-2 bg-transparent border-2 border-neon text-neon font-semibold rounded-md hover:bg-neon hover:text-black transition duration-300 shadow-[0_0_15px_rgba(0,245,255,0.2)] hover:shadow-[0_0_25px_rgba(0,245,255,0.4)]">
              Download Resume
            </a>
            <a href="#projects" className="px-6 py-2 bg-gray-800 border-2 border-gray-700 text-white font-semibold rounded-md hover:border-neon hover:text-neon transition duration-300">
              View Projects
            </a>
          </div>
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            I'm a passionate developer with expertise in web design and development. I focus on creating clean, responsive, and user-friendly interfaces. My goal is to deliver efficient and effective solutions to meet business needs and exceed user expectations.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            With a background in <span className="font-semibold text-neon">front-end</span> and <span className="font-semibold text-neon">back-end</span> technologies, I bring a full-stack perspective to each project. Let's collaborate to build something extraordinary together.
          </p>
        </div>
      </div>
    </section>
  );
}
