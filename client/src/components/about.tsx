export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            About Me
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Modern technology background with abstract digital elements" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                As a passionate B.Tech Computer Science graduate from Kshatriya College of Engineering, 
                I bring a strong foundation in full-stack development and a keen interest in solving 
                complex problems through innovative technology solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My experience ranges from developing comprehensive banking systems to creating 
                cutting-edge computer vision applications for drone-based solar plant inspections. 
                I thrive on building scalable, user-friendly applications that make a real impact.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-2xl font-bold text-primary">7.31</div>
                  <div className="text-gray-600">CGPA</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">Nizamabad, Telangana</p>
                <h3 className="font-semibold text-gray-900 mb-2 mt-4">Current Focus</h3>
                <p className="text-gray-700">Seeking opportunities to contribute to innovative projects in a reputed company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
