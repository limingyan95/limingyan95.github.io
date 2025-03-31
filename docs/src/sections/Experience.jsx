import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';

function Experience() {
  const [activeTab, setActiveTab] = useState('aiCoach');

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
          <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
            Leading innovation in AI sports technology with successful products that enhance performance and engagement.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Company sidebar */}
          <div className="lg:w-1/4 mb-6 lg:mb-0">
            <div className="bg-slate-700/50 rounded-xl overflow-hidden">
              {resumeData.workExperience.map((job, index) => (
                <div key={index} className="mb-2 last:mb-0">
                  <button
                    className={`w-full text-left p-4 transition-all ${
                      index === 0 ? 'rounded-t-xl' : ''
                    } ${
                      job.projects[0].id === activeTab ? 'bg-indigo-600 text-white' : 'bg-transparent text-slate-300 hover:bg-slate-700'
                    }`}
                    onClick={() => setActiveTab(job.projects[0].id)}
                  >
                    <div className="font-bold">{job.company}</div>
                    <div className="text-sm opacity-80">{job.period}</div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="bg-slate-700/50 p-6 rounded-xl">
              {resumeData.workExperience.map((job) => (
                job.projects.map((project) => (
                  <div
                    key={project.id}
                    className={`transition-opacity duration-300 ${
                      project.id === activeTab ? 'opacity-100' : 'hidden opacity-0'
                    }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center mt-2">
                        <span className="text-indigo-400 font-medium">{job.position}</span>
                        <span className="text-slate-400 mx-2">|</span>
                        <span className="text-slate-400">{job.company}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-lg font-medium text-white mb-2">Vision</div>
                      <p className="text-slate-300">{project.vision}</p>
                    </div>

                    <div>
                      <div className="text-lg font-medium text-white mb-3">Key Achievements</div>
                      <ul className="space-y-3">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <span className="text-indigo-500 mr-2">▹</span>
                            <span className="text-slate-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.technologies && project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;