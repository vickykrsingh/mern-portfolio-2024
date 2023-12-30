import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css'; // Import the default styles

const TypewriterComponent = () => {
  const words = ['Hello', 'World', 'React', 'Tailwind', 'Typewriter'];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-md shadow-md bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Typewriter Component</h1>
      <Typist cursor={{ show: false }}>
        {words.map((word, index) => (
          <span key={index}>
            {index === currentWordIndex && <>{word}</>}
            {index !== currentWordIndex && <>{word}{' '}</>}
          </span>
        ))}
      </Typist>
    </div>
  );
};

export default TypewriterComponent;
