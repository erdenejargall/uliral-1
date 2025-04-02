import { useState } from "react";
import Image from "next/image";

const sections = [
  { 
    name: "Listing", 
    file: "/task", 
    description: "Testing how to change between a grid and a list view.",
    image: "/images/listing.png" 
  },
  { 
    name: "Color", 
    file: "/color", 
    description: "A page to explore different color palettes.",
    image: "/images/color.png"
  },
  { 
    name: "CV", 
    file: "/cv", 
    description: "A dummy version of my resume.",
    image: "/images/cv.png" 
  },
  { 
    name: "Search Task", 
    file: "/task2", 
    description: "Experimenting on how the search function works on javascript.",
    image: "/images/task2.png"
  },
  { 
    name: "Mongol-Api", 
    file: "/mongolapi", 
    description: "A page using mongol-api to import its data and making an interface.",
    image: "/images/mongolapi.png"
  },
  { 
    name: "Assignment", 
    file: "/assignment", 
    description: "An assignment I had to do, where you need to put my classmates' names and make them searchable like the search task I mentioned previously",
    image: "/images/assignment.png"
  },
  { 
    name: "Counter", 
    file: "/counter", 
    description: "A counter counting to 10 and plays a little animation at the end.",
    image: "/images/counter.png"
  },
  { 
    name: "Tourist Attractions", 
    file: "/tourist", 
    description: "A simple and easier version of the mongol-api project I did.",
    image: "/images/tourist.png"
  },
  { 
    name: "Nest", 
    file: "/new_project", 
    description: "The replica of the teacher's placeholder Nest education website .",
    image: "/images/nest.png"
  },
];

const internalSections = [
  { name: "About Me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
];

export default function Portfolio() {
  const [grid, setGrid] = useState(true);

  const scrollToSection = (id) => {
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="sticky top-0 z-10 bg-white py-6 border-b border-gray-200 shadow-sm">
        <h1 className="text-center font-bold text-4xl text-gray-800 mt-4">
          <span className="text-indigo-700">Erdenejargal</span> Batragchaa
        </h1>

        <div className="flex justify-center gap-6 mt-8">
          {internalSections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-5 py-3 text-gray-600 font-medium text-lg rounded-md transition-colors duration-200 hover:bg-indigo-600 hover:text-white border border-transparent hover:border-indigo-700"
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      <div id="about" className="mt-14 p-10 bg-white rounded-lg shadow-sm max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="space-y-5 text-xl text-gray-700 leading-relaxed">
          <p>I'm Erdenejargal Batragchaa, a high school student.</p>
          <p>Welcome to my little introduction about this semester's works.</p>
          <p className="text-indigo-700 font-medium">With a foundation in Python, C++, and Scratch.</p>
        </div>
      </div>

      <div id="projects" className="mt-14 p-8 bg-white rounded-lg shadow-sm max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <button
            onClick={() => setGrid(!grid)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200"
          >
            {grid ? "List View" : "Grid View"}
          </button>
        </div>

        <div className={grid ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-8"}>
          {sections.map((item) => (
            <div key={item.name} className={grid ? "flex flex-col group" : "flex flex-row items-start bg-gray-50 p-6 rounded-xl space-x-6"}>
              <a
                href={item.file}
                className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg ${
                  grid ? "w-full h-56" : "w-56 h-56"
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill" 
                  objectFit="cover"
                  className="object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-semibold">{item.name}</h3>
                </div>
              </a>
              
              {!grid && (
                <div className="flex-1">
                  <h3 className="text-3xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600 text-xl mt-3">{item.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div id="contact" className="mt-14 p-10 bg-white rounded-lg shadow-sm max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
        <div className="text-xl text-gray-700 space-y-4">
          <p>Please feel free to reach out for inquiries or collaborations.</p>
          <p>Email: <span className="font-mono text-indigo-700">batragchaaerdenejargal@gmail.com</span></p>
          <p>Phone: <span className="font-mono">+976 9595 5222</span></p>
        </div>
      </div>
    </div>
  );
}
