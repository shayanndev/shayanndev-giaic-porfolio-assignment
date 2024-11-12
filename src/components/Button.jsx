// components/Button.jsx
import { FaArrowDown } from 'react-icons/fa';

export default function Button({ text, onClick }) {
    return (
        <button
            onClick={onClick}
            className="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300"
        >
            <span>{text}</span>
            <FaArrowDown />
        </button>
    );
}
