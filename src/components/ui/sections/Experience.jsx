import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import { DiMysql, DiSwift } from "react-icons/di";
import { SiAstro, SiTailwindcss } from "react-icons/si";

const SKILLS_ICONS = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: FaJs,
  React: FaReact,
  Node: FaNodeJs,
  MySQL: DiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Swift: DiSwift,
  AWS: FaAws,
  Astro: SiAstro,
  Tailwind: SiTailwindcss,
  Figma: FaFigma,
};

const ExperienceSection = ({ className }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const { t } = useTranslation(["translation", "cv"]);

  const workItems = t("work", { ns: "cv", returnObjects: true });

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className={`${className} mt-8`} title="Experience">
      {Array.isArray(workItems) ? (
        <ul className="flex flex-col">
          {workItems.map((workItem, index) => {
            const {
              name,
              startDate,
              endDate,
              position,
              summary,
              responsibilities,
              achievements,
              skills,
              url,
              location,
              location_type,
            } = workItem;

            const startYear = new Date(startDate).getFullYear();
            const endYear = endDate
              ? new Date(endDate).getFullYear()
              : `${t("about.present")}`;

            return (
              <li key={index} className="relative print:py-2">
                <div className="group relative grid pb-1 print:pb-0 transition-all print:grid-cols-1 print:gap-1 sm:grid-cols-12 sm:gap-8 md:gap-6 lg:hover:!opacity-100">
                  <header className="relative mt-1 text-xs font-semibold sm:col-span-2 border-r dark:border-border_dark">
                    <time dateTime={startDate} data-title={startDate}>
                      {startYear}
                    </time>{" "}
                    -{" "}
                    <time dateTime={endDate} data-title={endDate}>
                      {endYear}
                    </time>
                  </header>
                  <div className="relative flex flex-col pb-6 print:pb-0 sm:col-span-10">
                    <div className="absolute w-2 h-2 bg-secondary rounded-full mt-2 -translate-x-[1.71rem] ring print:hidden ring-secondary"></div>
                    <h3>
                      <div
                        className="inline-flex items-center text-lg print:text-base leading-tight group/link"
                        aria-label={`${position} - ${name}`}
                      >
                        <span>
                          {position} <span className="text-secondary">@</span>{" "}
                          {url ? (
                            <a
                              className="text-secondary"
                              href={url}
                              title={`View ${name}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {name}
                            </a>
                          ) : (
                            <span>{name}</span>
                          )}
                        </span>
                      </div>
                    </h3>
                    {(location || location_type) && (
                      <div className="text-xs ">
                        {location} {location && location_type && "-"}{" "}
                        {location_type}
                      </div>
                    )}
                    <div className="mt-4 flex flex-col gap-4 text-sm">
                      {summary && (
                        <div className="flex flex-col gap-1">
                          <h4>{t("about.summaryTitle")}</h4>{" "}
                          <ul className="list-disc ml-4 flex flex-col gap-2">
                            {Array.isArray(summary) ? (
                              summary.map((item, i) => <li key={i}>{item}</li>)
                            ) : (
                              <li>{summary}</li>
                            )}
                          </ul>
                        </div>
                      )}

                      <div
                        className={`md:after:from-skin-hue dark:md:after:to-skin-hue/0 flex relative flex-col max-sm:!h-auto print:!h-auto gap-4 print:gap-2 md:after:bg-gradient-to-t md:after:absolute md:after:bottom-0 md:after:w-full print:after:hidden md:after:h-12 md:after:content-[''] transition-all duration-300 ease-in-out overflow-hidden ${
                          expandedItems[index] ? "max-h-full" : "max-h-0"
                        }`}
                      >
                        {(responsibilities || achievements) && (
                          <div className="flex flex-col gap-4">
                            {responsibilities && (
                              <div className="flex flex-col gap-1">
                                <h4>{t("about.responsibilitiesTitle")}</h4>
                                <ul className="list-disc ml-4 flex flex-col gap-2">
                                  {responsibilities.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {achievements && (
                              <div className="flex flex-col gap-1">
                                <h4>{t("about.achievementsTitle")}</h4>
                                <ul className="list-disc ml-4 flex flex-col gap-2">
                                  {achievements.map((item, i) => (
                                    <li key={i}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => toggleExpand(index)}
                        className="print:hidden group/more w-fit cursor-pointer text-xs underline transition-all hover:text-secondary flex items-center gap-1.5"
                        aria-expanded={expandedItems[index]}
                      >
                        <span>
                          {expandedItems[index]
                            ? `${t("about.showLess")}`
                            : `${t("about.showMore")}`}
                        </span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedItems[index] ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      <ul
                        className={`flex print:hidden flex-wrap gap-2 ${
                          expandedItems[index] ? "mt-4" : "hidden"
                        }`}
                        aria-label="Technologies used"
                      >
                        {skills &&
                          skills.map((skill, i) => {
                            const iconName =
                              skill === "Next.js" ? "Next" : skill;
                            const Icon = SKILLS_ICONS[iconName];
                            return (
                              <li
                                key={i}
                                className="bg-secondary text-white flex gap-1 items-center border dark:border-border_dark rounded-md px-2 py-0.5 text-xs"
                              >
                                {Icon && <Icon />} <span>{skill}</span>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No work experience available.</p>
      )}
    </section>
  );
};

export default ExperienceSection;
