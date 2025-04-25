import React, { useEffect, useRef, useState } from 'react';
import './Intro.css';

const text = `I am a digital-first brand identity & web designer and a Webflow developer. 
I help companies connect with their audience, expand their reach, and achieve greater commercial success.`;

const Intro = () => {
  const introRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animate) {
          setAnimate(true);
        }
      },
      {
        threshold: 0.5, // Adjust to trigger halfway into view
      }
    );
  
    const currentRef = introRef.current;
    if (currentRef) observer.observe(currentRef);
  
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [animate]);
  

  const words = text.split(' ');

  return (
    <section className="intro" ref={introRef}>
      <div className="intro-text">
        <p>
          {words.map((word, i) => (
            <span
              key={i}
              className={`fade-word ${animate ? 'animate' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default Intro;
