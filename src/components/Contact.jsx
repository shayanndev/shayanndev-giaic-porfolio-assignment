export default function Contact() {
  return (
    <section className="py-16 bg-black">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12 relative inline-block w-full pb-4 border-b-2 border-gray-800">
        Get in Touch
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-24 bg-neon shadow-[0_0_10px_rgba(0,245,255,0.5)]"></span>
      </h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-8">

        <div className="flex-1 max-w-sm md:max-w-md opacity-80">
          <img
            src="/images/location.png"
            alt="Contact Image"
            className="w-full"
          />
        </div>

        <div className="flex-1 max-w-md w-full">
          <form className="w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg mb-4 bg-gray-900 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon focus:ring-2 focus:ring-neon transition duration-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg mb-4 bg-gray-900 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon focus:ring-2 focus:ring-neon transition duration-300"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full p-3 rounded-lg mb-4 bg-gray-900 border-2 border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-neon focus:ring-2 focus:ring-neon transition duration-300 resize-none"
            />
            <button type="submit" className="w-full px-6 py-4 bg-transparent border-2 border-neon text-neon font-semibold rounded-md hover:bg-neon hover:text-black transition duration-300 shadow-[0_0_15px_rgba(0,245,255,0.3)] hover:shadow-[0_0_25px_rgba(0,245,255,0.5)] cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
