import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const words = [
    "Aspiring Data Analyst",
    "Web Developer",
    "AWS Certified Cloud Practitioner",
    "Ex-President at CodeChef BU",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);

        if (letterIndex === currentWord.length) {
          setIsDeleting(true);
        }
      }
    };

    const timeoutId = setTimeout(type, 80);
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, letterIndex, currentWordIndex]);

  return (
    <div id="typewriter">
      I'm a {text}
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default Typewriter;
