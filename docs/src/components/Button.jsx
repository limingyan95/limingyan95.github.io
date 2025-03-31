import React from 'react';

function Button({ children, primary, className, onClick, type = "button" }) {
  const baseClasses = "px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center";
  const primaryClasses = "bg-indigo-600 hover:bg-indigo-700 text-white";
  const secondaryClasses = "bg-transparent border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white";
  
  const allClasses = `${baseClasses} ${primary ? primaryClasses : secondaryClasses} ${className || ''}`;
  
  return (
    <button 
      type={type} 
      className={allClasses} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;