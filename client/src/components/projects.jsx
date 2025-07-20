import { ExternalLink, Github, Info } from "lucide-react";
import DentalImage from "../images/dental_img.jpeg"; // adjust the path based on your file location

export default function Projects() {
  const projects = [
    {
      title: "Dental Care Management System",
      description:
        "Full-featured dental care platform with role-based login, patient management, appointment scheduling, and treatment tracking.",
      image: DentalImage,
      technologies: ["React", "Context API", "Tailwind CSS", "JavaScript"],
      liveUrl: "https://entnt-dashboard-ebon.vercel.app/",
      codeUrl: "https://github.com/GarkaVittal7/ENTNT---Dashboard",
    },

    {
      title: "Bank Management System",
      description:
        "Comprehensive banking system for user registration, account operations, and secure transaction handling with robust backend functionality.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Java", "JDBC", "MySQL", "Servlets", "JSP"],
      codeUrl: "https://github.com/GarkaVittal7/Bank_Management-System",
      detailsUrl: "https://github.com/GarkaVittal7/Bank_Management-System",
    },
    {
      title: "Solar Plant Inspection System",
      description:
        "AI-powered automated inspection system using drone technologies and computer vision for real-time monitoring and defect detection in solar plants.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenCV", "TensorFlow", "YOLO"],
      codeUrl: "https://github.com/GarkaVittal7",
      detailsUrl: "https://github.com/GarkaVittal7",
    },
  ];

  const getTechColor = (tech) => {
    const colors = {
      React: "bg-blue-100 text-blue-800",
      "Context API": "bg-green-100 text-green-800",
      "Tailwind CSS": "bg-purple-100 text-purple-800",
      JavaScript: "bg-yellow-100 text-yellow-800",
      Java: "bg-red-100 text-red-800",
      JDBC: "bg-blue-100 text-blue-800",
      MySQL: "bg-orange-100 text-orange-800",
      Servlets: "bg-green-100 text-green-800",
      JSP: "bg-purple-100 text-purple-800",
      Python: "bg-yellow-100 text-yellow-800",
      OpenCV: "bg-blue-100 text-blue-800",
      TensorFlow: "bg-green-100 text-green-800",
      YOLO: "bg-red-100 text-red-800",
    };
    return colors[tech] || "bg-gray-100 text-gray-800";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2 py-1 rounded ${getTechColor(
                          tech
                        )}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-buttons">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Github size={16} />
                        {project.liveUrl ? "Code" : "View Code"}
                      </a>
                    )}
                    {project.detailsUrl && !project.liveUrl && (
                      <a
                        href={project.detailsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Info size={16} />
                        Details
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/GarkaVittal7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-3 rounded-lg font-medium hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              View All Projects on GitHub
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
