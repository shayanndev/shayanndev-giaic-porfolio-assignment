import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-8">
            <div className="container mx-auto flex justify-between items-center">
                <p className="text-md">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <a
                    href="https://www.linkedin.com/in/shayankhandev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-500 transition-colors"
                >
                    <FaLinkedin size={24} />
                </a>
            </div>
        </footer>
    );
}
