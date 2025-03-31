import React from 'react';
import { resumeData } from '../data/resumeData';

function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <div className="md:w-5/12 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -inset-2 bg-indigo-500 rounded-xl opacity-75 blur-lg"></div>
              <img 
                src="/assets/images/about-me.jpg" 
                alt="Professional Shot" 
                className="relative rounded-xl w-full z-10"
              />
              <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg z-20">
                <p className="text-indigo-400 text-xl font-bold">5+ Years</p>
                <p className="text-white">In AI Product Development</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-7/12">
            <h3 className="text-2xl font-bold text-white mb-4">AI Product Manager & Sports Tech Innovator</h3>
            <p className="text-slate-300 mb-6">
              {resumeData.careerOverview}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-indigo-500 mr-2">▹</span>
                    <div>
                      <span className="text-white font-semibold">Name:</span>
                      <span className="text-slate-300 ml-2">{resumeData.personalInfo.name}</span>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="text-indigo-500 mr-2">▹</span>
                    <div>
                      <span className="text-white font-semibold">Email:</span>
                      <span className="text-slate-300 ml-2">{resumeData.personalInfo.email}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="text-indigo-500 mr-2">▹</span>
                    <div>
                      <span className="text-white font-semibold">Location:</span>
                      <span className="text-slate-300 ml-2">Shanghai, China</span>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="text-indigo-500 mr-2">▹</span>
                    <div>
                      <span className="text-white font-semibold">Availability:</span>
                      <span className="text-slate-300 ml-2">Open to opportunities</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={resumeData.personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-md hover:bg-indigo-500/30 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C0.8 0 0 0.8 0 1.77v20.46C0 23.2 0.8 24 1.77 24h20.46c0.97 0 1.77-0.8 1.77-1.77V1.77C24 0.8 23.2 0 22.23 0zM7.27 20.45H3.65V9.15h3.62V20.45zM5.47 7.79c-1.22 0-2.07-0.83-2.07-1.87 0-1.06 0.87-1.87 2.11-1.87 1.22 0 2.07 0.8 2.1 1.87C7.6 6.96 6.75 7.79 5.47 7.79zm15.29 12.66h-3.62v-6.02c0-1.46-0.52-2.45-1.83-2.45-1 0-1.6 0.67-1.87 1.32-0.1 0.23-0.11 0.55-0.11 0.88v6.27H9.7V9.15h3.62v1.57c0.51-0.75 1.42-1.82 3.48-1.82 2.53 0 4.44 1.65 4.44 5.2v6.35z"></path>
                </svg>
                LinkedIn
              </a>
              <a 
                href={`mailto:${resumeData.personalInfo.email}`} 
                className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-md hover:bg-indigo-500/30 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email
              </a>
              <a 
                href="#" 
                className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-400 rounded-md hover:bg-indigo-500/30 transition-colors duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;