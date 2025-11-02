import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black border-t border-gray-800 text-white py-8 px-16">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-md text-gray-400">&copy; {new Date().getFullYear()} Shayan Khan. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a
                        href="https://wa.me/923703299302?text=Hello, I'm interested in your services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon transition-colors"
                    >
                        <FaWhatsapp size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shayankhandev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-neon transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
