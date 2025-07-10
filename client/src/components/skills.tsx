import { Code, Globe, Wrench, Database } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Java", icon: "☕" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Python", icon: "🐍" },
        { name: "SQL", icon: "📊" }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8 text-primary" />,
      skills: [
        { name: "HTML5", icon: "🔶" },
        { name: "CSS3", icon: "🔵" },
        { name: "React", icon: "⚛️" },
        { name: "JSP & Servlets", icon: "🔧" }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Spring Boot", icon: "🌱" },
        { name: "Hibernate", icon: "🍃" },
        { name: "Git/GitHub", icon: "🔀" },
        { name: "VS Code", icon: "💻" }
      ]
    },
    {
      title: "Databases & Cloud",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: [
        { name: "MySQL", icon: "🗄️" },
        { name: "Cloud Databases", icon: "☁️" },
        { name: "Machine Learning", icon: "🧠" },
        { name: "Computer Vision", icon: "👁️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {category.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <span className="text-lg">{skill.icon}</span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
