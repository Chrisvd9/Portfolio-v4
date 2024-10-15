import React from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { BiMenu } from "react-icons/bi";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-transparent p-6">
      <Disclosure>
        {({ open }) => (
          <>
            <div className="flex items-center justify-between flex-wrap">
              <Link to="/" className="flex items-center flex-shrink-0 mr-6">
                <img
                  src="./img/icon.png"
                  alt="iconXploit"
                  className="fill-current h-12 w-12 mr-2"
                  width="54"
                  height="54"
                />
                <span className="font-semibold text-xl tracking-tight">
                  Xpl01t CL
                </span>
              </Link>
              <div className="block lg:hidden">
                <DisclosureButton className="flex items-center px-3 py-2 rounded text-secondary-hover">
                  <BiMenu className="h-6 w-6" />
                </DisclosureButton>
              </div>
              <div className="hidden lg:flex lg:items-center lg:w-auto w-full gap-4">
                <div className="text-sm lg:flex-grow">
                  <Link
                    to="/"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } mr-4`}
                  >
                    {isActive("/") ? `# ${t("navbar.home")}` : t("navbar.home")}
                  </Link>
                  <Link
                    to="/works"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/works")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } mr-4`}
                  >
                    {isActive("/works")
                      ? `# ${t("navbar.works")}`
                      : t("navbar.works")}
                  </Link>
                  <Link
                    to="/about"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/about")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } mr-4`}
                  >
                    {isActive("/about")
                      ? `# ${t("navbar.about")}`
                      : t("navbar.about")}
                  </Link>
                  <Link
                    to="/contact"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/contact")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } `}
                  >
                    {isActive("/contact")
                      ? `# ${t("navbar.contact")}`
                      : t("navbar.contact")}
                  </Link>
                </div>
                <div className="mt-4 lg:mt-0">
                  <ThemeToggle />
                </div>
                <div>
                  <select
                    onChange={changeLanguage}
                    className="input"
                    value={i18n.language}
                  >
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                  </select>
                </div>
              </div>
            </div>

            <Transition
              show={open}
              enter="chrisvd9_transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="chrisvd9_transition ease-in duration-200"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <DisclosurePanel className="lg:hidden">
                <div className="text-sm">
                  <Link
                    to="/"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } mr-4`}
                  >
                    {isActive("/") ? `# ${t("navbar.home")}` : t("navbar.home")}
                  </Link>
                  <Link
                    to="/works"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/works")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } mr-4`}
                  >
                    {isActive("/works")
                      ? `# ${t("navbar.works")}`
                      : t("navbar.works")}
                  </Link>
                  <Link
                    to="/about"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/about")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } mr-4`}
                  >
                    {isActive("/about")
                      ? `# ${t("navbar.about")}`
                      : t("navbar.about")}
                  </Link>
                  <Link
                    to="/contact"
                    className={`block mt-4 lg:inline-block lg:mt-0 text-secondary-hover ${
                      isActive("/contact")
                        ? "text-red-700 dark:text-red-500 font-bold"
                        : ""
                    } `}
                  >
                    {isActive("/contact")
                      ? `# ${t("navbar.contact")}`
                      : t("navbar.contact")}
                  </Link>
                  <div className="mt-4">
                    <ThemeToggle />
                  </div>
                  <div className="mt-4 w-16">
                    <select
                      onChange={changeLanguage}
                      className="input"
                      value={i18n.language}
                    >
                      <option value="es">ES</option>
                      <option value="en">EN</option>
                    </select>
                  </div>
                </div>
              </DisclosurePanel>
            </Transition>
          </>
        )}
      </Disclosure>
    </nav>
  );
};

export default Navbar;
