import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 min-h-screen flex items-center gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              GARKA VITTAL
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-white/90">
              Full Stack Developer & Software Engineer
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              B.Tech graduate passionate about creating innovative web applications. 
              Experienced in Java, JavaScript, React, and modern web technologies.
            </p>
            
            <div className="social-buttons">
              <a 
                href="https://github.com/GarkaVittal7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/garka-vittal-930989264" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a 
                href="mailto:vittal7421@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail size={20} />
                Email
              </a>
            </div>
            
            <button 
              onClick={scrollToContact}
              className="btn-primary text-white px-8 py-3 rounded-lg font-medium inline-block"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="animate-slideUp">
            <img 
              src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace with multiple monitors and code" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
