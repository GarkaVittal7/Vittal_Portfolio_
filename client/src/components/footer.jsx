import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";  
export default function Footer() {
  return (
    React.createElement("footer", { className: "bg-gray-900 text-white py-12" },
      React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
        React.createElement("div", { className: "text-center" },
          React.createElement("div", { className: "text-2xl font-bold mb-4" }, "Garka Vittal"),
          React.createElement("p", { className: "text-gray-400 mb-6" }, "Full Stack Developer passionate about creating innovative solutions"),
          
          React.createElement("div", { className: "flex justify-center gap-4 mb-6" },
            React.createElement("a", { 
              href: "https://github.com/GarkaVittal7", 
              target: "_blank", 
              rel: "noopener noreferrer", 
              className: "text-gray-400 hover:text-white transition-colors" 
            }, React.createElement(Github, { className: "w-6 h-6" })),
            React.createElement("a", { 
              href: "https://www.linkedin.com/in/garka-vittal-930989264", 
              target: "_blank", 
              rel: "noopener noreferrer", 
              className: "text-gray-400 hover:text-white transition-colors" 
            }, React.createElement(Linkedin, { className: "w-6 h-6" })),
            React.createElement("a", { 
              href: "mailto:vittal7421@gmail.com", 
              className: "text-gray-400 hover:text-white transition-colors" 
            }, React.createElement(Mail, { className: "w-6 h-6" }))
          ),
          
          React.createElement("div", { className: "border-t border-gray-800 pt-6" },
            React.createElement("p", { className: "text-gray-400" }, "\u00A9 2024 Garka Vittal. All rights reserved.")
          )
        )
      )
    )
  );
}