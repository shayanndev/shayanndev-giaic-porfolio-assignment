export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "/images/project1.jpg",
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "/images/project2.jpg",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "/images/project3.jpg",
        },
        {
            id: 4,
            title: "Project 4",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "/images/project4.jpg",
        },
        {
            id: 5,
            title: "Project 5",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "/images/project5.jpg",
        },
        {
            id: 6,
            title: "Project 6",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "/images/project6.jpg",
        },
    ];

    return (
        <section className="p-8 md:p-16 bg-gray-900" id="projects">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12 relative inline-block w-full pb-4 border-b-2 border-gray-800">
                Projects
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-24 bg-neon shadow-[0_0_10px_rgba(0,245,255,0.5)]"></span>
            </h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800 p-0 rounded-lg shadow-lg border border-gray-700 hover:border-neon transition-all duration-300 overflow-hidden group">
                        <div className="relative overflow-hidden">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                            <p className="text-gray-400 mt-2 mb-4">{project.description}</p>
                            <a className="inline-block px-6 py-2 bg-transparent border-2 border-neon text-neon font-semibold rounded-md hover:bg-neon hover:text-black transition duration-300 shadow-[0_0_10px_rgba(0,245,255,0.2)] hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] cursor-pointer">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
