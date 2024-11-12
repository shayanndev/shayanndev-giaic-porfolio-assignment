// components/Hero.jsx
import Button from './Button';
import { FaArrowDown } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-purple-700">

            <div className="absolute top-8 left-40 text-2xl">
                <p className="send-flowers-regular">Muhammad  <span className="text-3xl font-bold"> Shayan </span>  Khan</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">Muhammad Shayan Khan</span>
            </h1>
            <p className="text-3xl text-white mt-4 mb-12">Web Developer & Designer</p>
            <a href="#about" className="flex justify-center items-center gap-2 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300">See My Work <FaArrowDown className="animate-bounce" /></a>
        </div>
    );
}
