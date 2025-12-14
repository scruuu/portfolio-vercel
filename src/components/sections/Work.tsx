import React from 'react';
import msLogo from '../../assets/ms.jpg';

const Work: React.FC = () => {
  return (
    <div id="work" className="bg-white text-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="md:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left text-gray-900 font-['Inter'] uppercase">WORK EXPERIENCE</h2>
          </div>
          <div className="md:col-span-1 flex items-center">
            <p className="text-lg text-gray-700 font-['Inter']">A brief overview of my professional journey, highlighting impactful roles and the skills I've developed across top organizations in finance, technology, and design.</p>
          </div>
        </div>
      </div>
      {/* Work Experience Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-16 lg:px-24">
        <div className="md:col-span-1 self-center mr-8">
          <img
            src={msLogo}
            alt="Morgan Stanley"
            className="w-full h-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold text-gray-900 mb-2 uppercase">MORGAN STANLEY</h3>
          <p className="text-xl text-gray-700 mb-4 uppercase">TECHNOLOGY ANALYST | August 2025 - Present</p>
          <div className="space-y-2 text-gray-600">
            <p>• Backend development on Java-based microservices, focusing on reliability and scalability.</p>
            <p>• Designed and developed agentic AI solutions to automate decision workflows.</p>
            <p>• Built reporting dashboards and visualizations using Apache Superset.</p>
            <p>• Supported modernization initiatives and core banking technology.</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Technologies: Java, Spring, Spring Boot, Python, Apache Superset, AI</p>
          </div>

          <hr className="my-8 border-gray-300" />

          <p className="text-xl text-gray-700 mb-4 uppercase">TECHNOLOGY APPRENTICE | July 2024 - August 2025</p>
          <div className="space-y-2 text-gray-600">
            <p>• Developed backend services using Java, Spring Boot, and Spring Batch.</p>
            <p>• Built and optimized batch processing workflows for large-scale data.</p>
            <p>• Contributed to the migration of legacy components into modern Spring Boot services.</p>
            <p>• Strengthened skills in REST/SOAP services, testing, and multi-module projects.</p>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">Technologies: Java, Spring, Spring Boot, Spring Batch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
