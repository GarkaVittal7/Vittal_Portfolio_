import { Award, MapPin, Target, GraduationCap } from "lucide-react";
import PortfolioImage from "../images/portfolio_images.jpeg";
import React from "react";

export default function About() {
  const achievements = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "B.Tech in Computer Science",
      description: "Kshatriya College of Engineering",
      detail: "CGPA: 7.31 (2020-2024)",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Internship Experience",
      description: "Cipher Byte Technologies",
      detail: "Full Stack Development (Jan-Feb 2025)",
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "Projects Completed",
      description: "3+ Major Applications",
      detail: "Banking, Healthcare & AI Systems",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      description: "Nizamabad, Telangana",
      detail: "Available for relocation",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src={PortfolioImage}
                alt="Vittal"
                className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl h-auto transform hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <span className="text-primary font-semibold">
                    Passionate Full Stack Developer
                  </span>{" "}
                  with a B.Tech in Computer Science from Kshatriya College of
                  Engineering. I specialize in building robust, scalable web
                  applications using modern technologies like
                  <span className="font-medium text-gray-900">
                    {" "}
                    Java, JavaScript, React, and Spring Boot
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  My journey includes developing comprehensive banking systems,
                  innovative healthcare management platforms, and cutting-edge
                  AI applications for solar plant inspections using
                  <span className="font-medium text-gray-900">
                    {" "}
                    computer vision and machine learning
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I thrive on transforming complex problems into elegant,
                  user-friendly solutions that make a real impact. Currently
                  seeking opportunities to contribute to innovative projects and
                  grow with a forward-thinking organization.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-primary/20 hover:border-primary"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-gray-700 text-sm font-medium">
                          {achievement.description}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {achievement.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-purple-500/5 p-6 rounded-lg border border-primary/10">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Current Objective
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Seeking full-time opportunities in software development where
                  I can leverage my technical skills, contribute to meaningful
                  projects, and continue growing as a developer while making a
                  positive impact through innovative technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
