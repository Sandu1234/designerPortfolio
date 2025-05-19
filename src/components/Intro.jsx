// src/components/Intro.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Intro.css';

const text = `I am a digital-first brand identity & web designer and a Web developer. 
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
      { threshold: 0.5 }
    );

    const current = introRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
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