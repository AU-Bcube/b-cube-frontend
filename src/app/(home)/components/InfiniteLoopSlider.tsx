import React, { CSSProperties, useState } from 'react';

interface InfiniteLoopSliderProps {
  children: React.ReactNode;
  onHoverStop?: boolean;
  style?: CSSProperties; 
  className?: string;
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({
  children,
  style,
  onHoverStop,
  className = '',
}) => {
  const [hoverCardIndex, setHoverCardIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // ** children을 2배로 늘려 무한 루프 효과 **
  const duplicatedChildren = React.Children.toArray(children).concat(
    React.Children.toArray(children)
  );

  return (
    <div className={`InfiniteLoop__slider ${className}`}>
      <ul className={`InfiniteLoop__inner ${isPaused ? 'paused' : ''}`} style={style}>
        {duplicatedChildren.map((child, index) => (
          <li
            key={index}
            className={`InfiniteLoop__item ${hoverCardIndex === index ? 'InfiniteLoop_hoverItem' : ''}`}
            onMouseOver={(e) => {
              if (e.currentTarget === e.target) return; // 빈 공간에서 hover 방지
              setHoverCardIndex(index);
              if (onHoverStop) setIsPaused(true);
            }}
            onMouseOut={() => {
              setHoverCardIndex(null);
              if (onHoverStop) setIsPaused(false);
            }}
            style={{
              transition: 'transform 0.3s ease-in-out',
              transform: hoverCardIndex === index ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {child}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteLoopSlider;
