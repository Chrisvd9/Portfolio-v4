import React from "react";
import { useTranslation } from "react-i18next";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="grid gap-4 border-t dark:border-border_dark py-8">
      <div className="grid gap-4 md:flex justify-between">
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <img
              src="./img/icon.png"
              alt="iconXploit"
              className="fill-current h-10 w-10 mr-2"
              width="54"
              height="54"
            />
            <span className="font-semibold text-xl tracking-tight">
              Xpl01t CL
            </span>
          </div>
          <span className="parrafo text-sm">christianvd99@gmail.com</span>
          <p>{t("footer.role")}</p>
        </div>

        <div className="">
          <h4 className="text-xl">Media</h4>
          <ul className="flex items-center gap-4 mt-2">
            <li>
              <a
                href="https://github.com/Chrisvd9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="size-5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/christian-vergara-dominguez-84061121b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="size-5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-sm parrafo">
        © Copyright {new Date().getFullYear()}.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Chrisvd9"
        >
          {t("footer.madeBy")}
        </a>
        . {t("footer.allRights")}
      </p>
    </footer>
  );
};

export default Footer;
