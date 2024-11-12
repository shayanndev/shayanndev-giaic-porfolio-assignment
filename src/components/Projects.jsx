// components/Projects.jsx
import Button from './Button';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "images/project1.jpg",
        },
        {
            id: 2,
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "images/project2.jpg",
        },
        {
            id: 3,
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "images/project3.jpg",
        },
        {
            id: 4,
            title: "Project 4",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "images/project4.jpg",
        },
        {
            id: 5,
            title: "Project 5",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "images/project5.jpg",
        },
        {
            id: 6,
            title: "Project 6",
            description: "Lorem ipsum dolor sit amet consectetur.",
            imageUrl: "images/project6.jpg",
        },
    ];

    return (
        <section className="p-16 bg-gray-50" id="projects">
            <h2 className="text-center text-4xl font-semibold text-gray-800 mb-8">Projects</h2>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
                            <a className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 transition duration-300 cursor-pointer">View Details</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
