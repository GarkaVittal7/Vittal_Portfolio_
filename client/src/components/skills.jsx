import { Code, Globe, Wrench, Database } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Java", icon: "☕", proficiency: 85 },
        { name: "JavaScript", icon: "🟨", proficiency: 90 },
        { name: "Python", icon: "🐍", proficiency: 80 },
        { name: "SQL", icon: "📊", proficiency: 85 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-8 h-8 text-primary" />,
      skills: [
        { name: "HTML5", icon: "🔶", proficiency: 95 },
        { name: "CSS3", icon: "🔵", proficiency: 90 },
        { name: "React", icon: "⚛️", proficiency: 85 },
        { name: "JSP & Servlets", icon: "🔧", proficiency: 80 }
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="w-8 h-8 text-primary" />,
      skills: [
        { name: "Spring Boot", icon: "🌱", proficiency: 80 },
        { name: "Hibernate", icon: "🍃", proficiency: 75 },
        { name: "Git/GitHub", icon: "🔀", proficiency: 85 },
        { name: "VS Code", icon: "💻", proficiency: 90 }
      ]
    },
    {
      title: "Databases & AI",
      icon: <Database className="w-8 h-8 text-primary" />,
      skills: [
        { name: "MySQL", icon: "🗄️", proficiency: 85 },
        { name: "Cloud Databases", icon: "☁️", proficiency: 70 },
        { name: "Machine Learning", icon: "🧠", proficiency: 75 },
        { name: "Computer Vision", icon: "👁️", proficiency: 80 }
      ]
    }
  ];

  const SkillBar = ({ skill, index, isVisible }) => (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        </div>
        <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {skill.proficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-1000 ease-out transform origin-left"
          style={{
            width: isVisible ? `${skill.proficiency}%` : '0%',
            transitionDelay: `${index * 200}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="bg-white p-6 rounded-xl shadow-lg card-hover transform hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${categoryIndex * 200}ms`
                }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill}
                      index={skillIndex}
                      isVisible={isVisible}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Overview */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
              Professional Experience
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">3+</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                <p className="text-gray-600 text-sm">Completed full-stack applications</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">1+</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Years</h4>
                <p className="text-gray-600 text-sm">Learning & Development</p>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">10+</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Technologies</h4>
                <p className="text-gray-600 text-sm">Frameworks & Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}