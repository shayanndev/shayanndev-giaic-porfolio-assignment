'use client';

// FULL CODE BLOCK VERSION (COMMENTED FOR FUTURE USE)
// import { useState } from 'react';
// import { FiCopy, FiCheck } from 'react-icons/fi';

// export default function CodeLogo() {
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText('console.log("shayandev");');
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy:', err);
//     }
//   };

//   return (
//     <div className="relative inline-block font-mono group">
//       {/* Code Block Container */}
//       <div className="relative bg-[#282c34] rounded-lg overflow-hidden shadow-2xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
//         {/* Header */}
//         <div className="flex items-center justify-between px-3 md:px-4 py-2 bg-[#21252b] border-b border-gray-700/50">
//           <span className="text-white text-[10px] md:text-xs font-medium tracking-wide">typescript</span>
//           <button
//             onClick={handleCopy}
//             className="flex items-center gap-1 text-gray-400 text-[10px] md:text-xs hover:text-white transition-colors active:scale-95"
//             aria-label="Copy code"
//           >
//             {copied ? (
//               <>
//                 <FiCheck size={12} className="text-[#98c379]" />
//                 <span className="text-[#98c379] hidden md:inline">Copied!</span>
//               </>
//             ) : (
//               <>
//                 <FiCopy size={12} />
//                 <span className="hidden md:inline">Copy code</span>
//               </>
//             )}
//           </button>
//         </div>

//         {/* Code Content */}
//         <div className="px-3 md:px-4 py-2.5 md:py-3 bg-[#282c34]">
//           <div className="flex items-center gap-1 text-sm md:text-base">
//             <span className="text-[#e06c75] font-semibold">console</span>
//             <span className="text-white">.</span>
//             <span className="text-[#e06c75] font-semibold">log</span>
//             <span className="text-white">(</span>
//             <span className="text-[#98c379]">&quot;shayandev&quot;</span>
//             <span className="text-white">);</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// SIMPLIFIED VERSION - JUST CODE LINE
export default function CodeLogo() {
  return (
    <div className="relative inline-block font-mono">
      <div className="flex items-center text-sm md:text-base lg:text-lg">
        <span className="text-[#e06c75] font-semibold">console</span>
        <span className="text-white">.</span>
        <span className="text-[#e06c75] font-semibold">log</span>
        <span className="text-white">(</span>
        <span className="text-[#98c379]">&quot;shayandev.com&quot;</span>
        <span className="text-white">);</span>
      </div>
    </div>
  );
}

