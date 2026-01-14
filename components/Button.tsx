import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-display font-bold tracking-wider uppercase transition-all duration-300 ease-out group";
  
  const variants = {
    primary: "bg-electric-blue text-black hover:bg-white",
    outline: "border border-white/20 text-white hover:bg-white hover:text-black",
    ghost: "text-white/70 hover:text-electric-blue"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
      <span className="relative flex items-center gap-2">{children}</span>
    </button>
  );
};