import React from 'react';
import { resumeData } from '../data/resumeData';

function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Academic background and professional certifications that provide the foundation for my expertise.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Education */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
              Academic Background
            </h3>
            
            <div className="space-y-8">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                    <span className="text-indigo-400 font-medium">{edu.year}</span>
                  </div>
                  <p className="text-slate-300 mb-3">{edu.institution}</p>
                  {edu.description && (
                    <p className="text-slate-400 text-sm">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-white">{cert.name}</h4>
                    {cert.year && <span className="text-indigo-400">{cert.year}</span>}
                  </div>
                  {cert.issuer && <p className="text-slate-300">{cert.issuer}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;