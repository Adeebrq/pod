import React from 'react';

interface ContactButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'small';
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'default',
  className = ''
}) => {
  const baseClasses = "flex justify-center items-center gap-2.5 shrink-0 bg-[#001039] rounded-[30px] transition-all duration-200 hover:bg-[#002055] active:scale-95";
  
  const sizeClasses = {
    default: "w-[134px] h-10 px-5 py-[5px] max-sm:w-[120px] max-sm:h-[35px] max-sm:px-[15px] max-sm:py-[5px]",
    small: "w-[156px] h-10 pl-[15px] pr-0 py-[5px] max-sm:w-[140px]"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      aria-label={typeof children === 'string' ? children : 'Contact button'}
    >
      {children}
    </button>
  );
};
