export default function Contact() {
  return (
    <section className="py-16 bg-indigo-100">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8">

        <div className="flex-1 max-w-sm md:max-w-md">
          <img
            src="/images/location.png"
            alt="Contact Image"
          />
        </div>

        <div className="flex-1 max-w-md w-full">
          <form className="w-full">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 rounded-lg mb-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <a className="w-100 px-6 py-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300 cursor-pointer">Send Message</a>
          </form>
        </div>
      </div>
    </section>
  );
}
