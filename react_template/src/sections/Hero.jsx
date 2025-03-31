import React, { useState, useEffect, useRef } from 'react';
import Button from '../components/Button';
import { resumeData } from '../data/resumeData';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const typingPhrases = [
    'AI产品经理',
    '体育科技创新者',
    '计算机视觉应用专家',
    '台球AI教练系统开发者'
  ];
  const typingPhrasesIndex = useRef(0);
  const charIndex = useRef(0);
  const typingDelay = 100; // Time between characters
  const erasingDelay = 50; // Time between erasing characters
  const newTextDelay = 2000; // Time to wait before typing new text

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isTyping) {
        // Typing animation
        if (charIndex.current < typingPhrases[typingPhrasesIndex.current].length) {
          setTypedText(prev => prev + typingPhrases[typingPhrasesIndex.current].charAt(charIndex.current));
          charIndex.current++;
          setTimeout(typeEffect, typingDelay);
        } else {
          // Done typing, wait before erasing
          setIsTyping(false);
          setTimeout(typeEffect, newTextDelay);
        }
      } else {
        // Erasing animation
        if (charIndex.current > 0) {
          charIndex.current--;
          setTypedText(typingPhrases[typingPhrasesIndex.current].substring(0, charIndex.current));
          setTimeout(typeEffect, erasingDelay);
        } else {
          // Done erasing, move to next phrase
          setIsTyping(true);
          typingPhrasesIndex.current = (typingPhrasesIndex.current + 1) % typingPhrases.length;
          setTimeout(typeEffect, typingDelay);
        }
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [typedText, isTyping]);

  const typeEffect = () => {
    // This function is just a placeholder to trigger the useEffect
    setTypedText(prev => prev); // Force re-render
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Background pattern/overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/90 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(40%_50%_at_50%_40%,rgba(79,70,229,0.15),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">你好，我是 </span>
              <span className="text-indigo-500">{resumeData.personalInfo.name}</span>
            </h1>
            
            <div className="h-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-300 mb-8">
                我是一名
                <span className="relative ml-2">
                  <span className="text-indigo-400">{typedText}</span>
                  <span className="absolute top-0 right-[-8px] h-full w-0.5 bg-indigo-400 animate-blink"></span>
                </span>
              </h2>
            </div>
            
            <p className="text-slate-300 mb-8 text-lg md:text-xl max-w-2xl md:mx-0 mx-auto leading-relaxed">
              {resumeData.careerOverview}
            </p>
            
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Button primary onClick={scrollToContact}>
                联系我
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Button>
              
              <Button secondary>
                查看我的简历
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-2 relative hidden md:block">
            <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-700">
                {/* Profile image would go here */}
                <div className="w-full h-full flex items-center justify-center text-slate-400">
                  <svg className="w-40 h-40 opacity-30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-indigo-600 rounded-full h-16 w-16 flex items-center justify-center shadow-lg shadow-indigo-600/30">
              <span className="text-white text-xl font-bold">5+</span>
              <span className="text-white text-xs absolute bottom-3">Years</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-400 animate-bounce">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;