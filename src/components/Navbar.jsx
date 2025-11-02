import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import CodeLogo from './CodeLogo';

export default function Navbar() {
    return (
        <nav className="absolute top-0 left-0 right-0 w-full bg-transparent text-white py-8 md:px-32 lg:px-40 z-30">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <CodeLogo />

                <div className="flex items-center gap-6">
                    <a
                        href="https://wa.me/923703299302?text=Hello, I'm interested in your services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-500 transition-colors flex items-center gap-2"
                    >
                        Chat with me <FaWhatsapp size={24} className='animate-pulse text-green-500'/>
                    </a>
                </div>
            </div>
        </nav>
    );
}
