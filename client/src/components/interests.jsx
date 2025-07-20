import { Heart, Book, GamepadIcon, Camera, Music, Plane } from "lucide-react";

export default function Interests() {
  const interests = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always exploring new technologies and frameworks to stay updated with industry trends.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <GamepadIcon className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Enjoy tackling complex coding challenges and algorithmic problems on various platforms.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Tech Innovation",
      description: "Passionate about AI, machine learning, and computer vision applications.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Creative Thinking",
      description: "Love combining creativity with technology to build unique and engaging user experiences.",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: <Plane className="w-6 h-6" />,
      title: "Future Technologies",
      description: "Interested in emerging technologies like blockchain, cloud computing, and IoT.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Building",
      description: "Enjoy collaborating with other developers and contributing to open-source projects.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Interests & Passions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {interest.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {interest.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}