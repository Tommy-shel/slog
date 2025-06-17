import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplitText = ({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 0.6, 
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete = () => {}
}) => {
  const containerRef = useRef(null);
  const chars = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split text into individual spans
    const lines = text.split('\n');
    containerRef.current.innerHTML = '';
    
    lines.forEach((line, lineIndex) => {
      const lineContainer = document.createElement('div');
      lineContainer.style.textAlign = textAlign;
      
      if (splitType === "chars") {
        const characters = line.split('');
        characters.forEach((char, index) => {
          const span = document.createElement('span');
          span.textContent = char;
          span.style.display = 'inline-block';
          span.style.opacity = '0';
          chars.current.push(span);
          lineContainer.appendChild(span);
        });
      } else {
        const span = document.createElement('span');
        span.textContent = line;
        span.style.display = 'inline-block';
        span.style.opacity = '0';
        chars.current.push(span);
        lineContainer.appendChild(span);
      }
      
      containerRef.current.appendChild(lineContainer);
      
      // Add line break if not the last line
      if (lineIndex < lines.length - 1) {
        containerRef.current.appendChild(document.createElement('br'));
      }
    });

    // Create animation timeline
    const tl = gsap.timeline({ 
      delay,
      onComplete: onLetterAnimationComplete 
    });

    // Animate each character
    chars.current.forEach((char, index) => {
      tl.fromTo(char, 
        { ...from },
        { 
          ...to,
          duration,
          ease,
          delay: index * 0.02 // Stagger effect
        },
        index * 0.02
      );
    });

    // Cleanup
    return () => {
      tl.kill();
      chars.current = [];
    };
  }, [text, delay, duration, ease, from, to, splitType, textAlign, onLetterAnimationComplete]);

  return (
    <div ref={containerRef} className={className} />
  );
};

export default SplitText; 