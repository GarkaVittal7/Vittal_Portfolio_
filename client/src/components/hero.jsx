import { Github, Linkedin, Mail, ArrowRight, Code } from "lucide-react";
import PortfolioImage from "../images/home_image.jpeg";
import { useState, useEffect } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Full Stack Developer & Software Engineer";

  useEffect(() => {
    if (isTyping && displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (displayedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [displayedText, isTyping, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center gradient-bg relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <div className="animate-fadeIn">
              <span className="inline-block text-white/80 text-lg mb-2 animate-bounce">
                👋 Hello, I'm
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slideUp">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Garka Vittal
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl mb-6 text-white/90 h-8 animate-fadeIn">
              {displayedText}
              <span
                className={`inline-block w-0.5 h-6 bg-white ml-1 ${
                  isTyping ? "animate-pulse" : ""
                }`}
              ></span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed animate-slideUp delay-300">
              B.Tech graduate passionate about creating innovative web
              applications. Experienced in Java, JavaScript, React, and modern
              web technologies with a focus on building scalable and
              user-friendly solutions.
            </p>

            <div className="flex flex-wrap gap-4 mb-8 animate-slideUp delay-500">
              <a
                href="https://github.com/GarkaVittal7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Github
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/garka-vittal-930989264"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Linkedin
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:vittal7421@gmail.com"
                className="group flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Mail
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                <span>Email</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 animate-slideUp delay-700">
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <Code
                  size={20}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
                View My Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>

          <div className="relative animate-slideUp delay-300">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img
                src={PortfolioImage}
                alt="Vittal"
                className="rounded-xl shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl h-auto transform hover:scale-105 transition-all duration-500"
              />

              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-6 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
