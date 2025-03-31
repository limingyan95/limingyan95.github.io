import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { resumeData } from '../data/resumeData';

function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects & Achievements</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Showcasing key projects and industry achievements that highlight my expertise in AI sports technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Industry Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumeData.achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="bg-slate-700/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 mr-4 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{achievement.title}</h4>
                    <p className="text-slate-300">{achievement.description}</p>
                    {achievement.year && (
                      <div className="mt-2 text-indigo-400 font-medium">{achievement.year}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;