import { FaArrowDown } from 'react-icons/fa';
import { BsEmojiWinkFill } from 'react-icons/bs';

export default function Hero() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-black to-black relative overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 text-center px-4">
                    Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-cyan-400 drop-shadow-[0_0_15px_rgba(0,245,255,0.5)]">Muhammad Shayan Khan</span>
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mt-4 mb-6 text-center px-4">Web Developer • Shopify Specialist • Ads Manager</p>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 text-center flex items-center justify-center gap-2">
                    From Website Design to Ad Sales - I Handle It All
                    <BsEmojiWinkFill className="text-neon animate-pulse" style={{ filter: 'drop-shadow(0 0 8px rgba(0,245,255,0.6))' }} />
                </p>
                <a href="#about" className="flex justify-center items-center gap-2 px-8 py-3 bg-transparent border-2 border-neon text-neon font-semibold rounded-md hover:bg-neon hover:text-black transition duration-300 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]">
                    See My Work <FaArrowDown className="animate-bounce" />
                </a>
            </div>
        </div>
    );
}
