import React from 'react';
import meImg from '../../assets/me.png';

const About: React.FC = () => {
    return (
        <div id="about" className="bg-white text-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-left md:text-center text-gray-900 font-['Inter'] uppercase">ABOUT ME</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-8 md:px-16 lg:px-24">
          <div className="relative">
            <div className="md:sticky md:top-24">
              <div
                className="relative rounded-lg overflow-hidden shadow-xl"
              >
                <img 
                  src={meImg} 
                  alt="Ujjawal Vats"
                  className="w-full aspect-square object-cover" 
                />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Inter']">WHO AM I?</h3>
              <p className="text-lg text-gray-700 font-['Inter'] leading-relaxed">
                A dedicated software professional with a strong interest in backend development, system integration, and applied AI — including Generative AI (GenAI). Skilled in Java, Spring Boot, Python, and database technologies, with a solid foundation in computer science and deep learning.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Inter']">QUICK FACTS</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">Based in Bengaluru, open to global opportunities</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">Computer Science graduate from Graphic Era University specializing in Artificial Intelligence & Machine Learning</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">1+ years of professional experience in software development</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-gray-700 font-['Inter']">Passionate about problem-solving, continuous learning, and building impactful solutions</p>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 font-['Inter']">SKILLS</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring', 'Spring Boot', 'Spring Batch', 'Python', 'ML', 'DL', 'Tensorflow', 'Generative AI', 'AI', 'SQL', 'React', 'TypeScript', 'Git'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full font-['Inter']">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;