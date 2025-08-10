import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Anuncio = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  let swiperInstance = null;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition = 200;
      setVisible(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (visible && !swiperInstance) {
      swiperInstance = new Swiper(".swiper", {
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 8000,
        },
        fadeEffect: {
          crossFade: true,
        },
        navigation: {
          prevEl: ".swiper-prev-button",
          nextEl: ".swiper-next-button",
        },
      });
    }
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
        swiperInstance = null;
      }
    };
  }, [visible]);

  return (
    <div
      className={`bg-gray-100 dark:bg-border_dark px-4 py-3 fixed bottom-0 left-0 right-0 transition-opacity duration-500 ${
        visible ? "anuncio-visible" : "anuncio-hidden"
      }`}
    >
      <div className="mx-auto flex  items-center justify-center">
        <button
          className="swiper-prev-button hidden hover:text-gray-500 sm:block sm:rounded sm:transition"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="size-5" />
        </button>

        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <p className="text-center text-sm font-medium">
                {t("anuncio.2")}
              </p>
            </div>
            <div className="swiper-slide">
              <p className="text-center text-sm font-medium">
                {t("anuncio.1")} -&gt;{" "}
                <a
                  href="https://github.com/Chrisvd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline sm:inline-block"
                >
                  here
                </a>
              </p>
            </div>
            <div className="swiper-slide">
              <p className="text-center text-sm font-medium">
                {t("anuncio.3")} -&gt;{" "}
                <a
                  href="https://cved0m.gitbook.io/v3d0m-docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block underline sm:inline-block"
                >
                  here
                </a>
              </p>
            </div>
          </div>
        </div>

        <button
          className="swiper-next-button hidden hover:text-gray-500 sm:block sm:rounded sm:transition"
          aria-label="Next slide"
        >
          <HiChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
};

export default Anuncio;
