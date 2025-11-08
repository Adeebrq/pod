import React, { useState } from 'react';

interface KeywordButtonProps {
  keyword: string;
  onClick?: () => void;
  className?: string;
  animated?: boolean;
}

export const KeywordButton: React.FC<KeywordButtonProps> = ({
  keyword,
  onClick,
  className = '',
  animated = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (animated) {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 800);
    }
    onClick?.();
  };

  return (
    <div className={`h-10 shrink-0 rounded-[30px] w-fit ${className}`}>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        className="relative flex h-10 justify-center items-center gap-9 shrink-0 bg-[#001039] pl-[15px] pr-1 py-[5px] rounded-[30px] transition-all duration-200 hover:bg-[#002055] active:scale-95 overflow-hidden"
        aria-label={`Search for ${keyword}`}
      >
        <span
          className={`text-white text-[15px] font-normal capitalize whitespace-nowrap ${
            animated ? 'transition-transform duration-700' : ''
          } ${
            animated && isAnimating ? 'translate-x-[52px]' : 'translate-x-0'
          }`}
        >
          {keyword}
        </span>
        <div
          className={`flex w-9 h-9 justify-center items-center shrink-0 bg-[#BDD8E9] px-2.5 py-[10.5px] rounded-[18px] hover:bg-[#A5C9E1] ${
            animated ? 'transition-all duration-700' : ''
          } ${
            animated && isAnimating ? '-translate-x-[calc(100%+60px)]' : 'translate-x-0'
          } ${
            animated && !isAnimating && isHovered ? 'rotate-12' : 'rotate-0'
          }`}
        >
          <div className="flex w-4 h-[15px] justify-center items-center shrink-0">
            <div className="flex w-4 h-[15px] justify-center items-center shrink-0">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    "<svg width=\"16\" height=\"15\" viewBox=\"0 0 16 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"arrow-icon\" style=\"width: 16px; height: 15px; flex-shrink: 0\"> <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.99999 1.18454L7.40725 1.77728L9.63343 4.00345L11.8596 6.22963L6.81457 6.22974L1.76953 6.22985V7.07061V7.91136L6.81457 7.91147L11.8596 7.91158L9.63343 10.1377L7.40725 12.3639L7.99999 12.9567L8.59274 13.5494L11.8322 10.31L15.0716 7.07061L11.8322 3.8312L8.59274 0.591797L7.99999 1.18454Z\" fill=\"white\"></path> </svg>",
                }}
              />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};