import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ text }) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [text],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      startDelay: 1000,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    return () => {
      typed.destroy();
    };
  }, [text]);
  return <p className="text-sm md:text-base parrafo" ref={el}></p>;
};

export default TypingAnimation;
