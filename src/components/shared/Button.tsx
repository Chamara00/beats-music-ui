import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}) => {
  const baseClasses = 'font-medium font-noto-sans transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue focus:ring-opacity-50';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#638CFE] to-[#17DCF5] text-white border border-[#17DCF5] hover:from-[#5A7FE8] hover:to-[#15C4E0] hover:shadow-lg hover:shadow-blue/25',
    secondary: 'bg-gray-600 text-white border border-gray-600 hover:bg-gray-700 hover:border-gray-700',
    outline: 'bg-transparent text-[#17DCF5] border border-[#17DCF5] hover:bg-[#17DCF5] hover:text-white',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  
  const disabledClasses = disabled 
    ? 'opacity-50 cursor-not-allowed' 
    : 'cursor-pointer';

  const combinedClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${widthClass}
    ${disabledClasses}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;
