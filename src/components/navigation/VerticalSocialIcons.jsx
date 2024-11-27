import React, { useState, useEffect } from "react";
import { BsBook, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiArrowDown, HiArrowUp } from "react-icons/hi2";

const VerticalSocialIcons = () => {
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = () => {
    if (atBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScrollPosition = () => {
      const scrolledDown = window.scrollY > window.innerHeight * 0.1;

      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      setAtBottom(scrolledDown || atPageBottom);
    };

    window.addEventListener("scroll", handleScrollPosition);
    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  return (
    <div className="hidden lg:flex flex-col items-center h-screen fixed">
      <div className="flex flex-col items-center">
        <div className="w-0.5 h-32 bg-gray_light dark:bg-border_dark"></div>
        <div className="space-y-4 mt-4 flex flex-col">
          <a
            href="https://cved0m.gitbook.io/cved0m-docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsBook className="size-5" />
          </a>
          <a
            href="https://github.com/Chrisvd9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/christian-vergara-dominguez-84061121b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className="size-5" />
          </a>
        </div>

        <div className="mt-4 cursor-pointer" onClick={handleScroll}>
          {atBottom ? (
            <HiArrowUp className="h-6 w-6" />
          ) : (
            <HiArrowDown className="h-6 w-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VerticalSocialIcons;
