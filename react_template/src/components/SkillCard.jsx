import React from 'react';

function SkillCard({ icon, title, items }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 border-2 border-slate-700">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 mr-3 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <ul className="space-y-2 text-slate-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;