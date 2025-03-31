import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-indigo-500 mb-2">李明妍 | AI产品经理</div>
            <p className="text-slate-400">Innovating at the intersection of AI and sports technology</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.23 0H1.77C0.8 0 0 0.8 0 1.77v20.46C0 23.2 0.8 24 1.77 24h20.46c0.97 0 1.77-0.8 1.77-1.77V1.77C24 0.8 23.2 0 22.23 0zM7.27 20.45H3.65V9.15h3.62V20.45zM5.47 7.79c-1.22 0-2.07-0.83-2.07-1.87 0-1.06 0.87-1.87 2.11-1.87 1.22 0 2.07 0.8 2.1 1.87C7.6 6.96 6.75 7.79 5.47 7.79zm15.29 12.66h-3.62v-6.02c0-1.46-0.52-2.45-1.83-2.45-1 0-1.6 0.67-1.87 1.32-0.1 0.23-0.11 0.55-0.11 0.88v6.27H9.7V9.15h3.62v1.57c0.51-0.75 1.42-1.82 3.48-1.82 2.53 0 4.44 1.65 4.44 5.2v6.35z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.075 10.075 0 01-3.127 1.184A4.92 4.92 0 0011.78 7.28a13.95 13.95 0 01-10.13-5.13 4.929 4.929 0 001.522 6.574 4.887 4.887 0 01-2.23-.616v.06a4.926 4.926 0 003.95 4.83 4.937 4.937 0 01-2.224.084 4.927 4.927 0 004.6 3.42A9.89 9.89 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.308-7.721 13.995-14.646A10.025 10.025 0 0024 4.59z"></path>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
              </svg>
            </a>
            <a href="mailto:your-email@example.com" className="text-white hover:text-indigo-400 transition duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-800 text-center text-slate-500">
          <p>© {currentYear} 李明妍 | AI产品经理. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;