import Layout from "../layout/Layout";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import PortfolioCard from "../components/common/PortfolioCard";
import EmblaCarousel from "../components/common/Carousel/EmblaCarousel";
import "../components/common/Carousel/css/base.css";
import "../components/common/Carousel/css/embla.css";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import TypingAnimation from "../components/ui/AnimationText";
import PortfolioCTFCard from "../components/common/PortfolioCTFCard";

const Home = () => {
  const { t } = useTranslation();
  const OPTIONS = { loop: true };

  const ctfProjects = t("ctfs", { ns: "ctfs", returnObjects: true })
    .map((section) => section.projects)
    .flat()
    .slice(0, 3);

  const frontendProjects = t("projects", {
    ns: "projects",
    returnObjects: true,
  })
    .map((section) => section.projects)
    .flat()
    .slice(0, 3);

  const skills = {
    frontend: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Figma",
      "Git",
      "AWS",
      "Zustand",
      "TailwindCSS",
      "Astrojs",
    ],
    hacking: [
      "Hacking Web",
      "Hacking Cloud",
      "Linux",
      "Bash",
      "Python",
      "Nmap",
      "Fuzzing",
      "Burp Suite",
    ],
  };

  return (
    <Layout>
      <section>
        <div className="py-8">
          <div className="grid gap-4 md:flex justify-between items-center w-full">
            <div className="p-6 px-6 lg:py-24">
              <div>
                <h1 className="text-2xl font-bold md:text-3xl">
                  <Trans
                    i18nKey="home.title"
                    components={{
                      1: <span className="text-secondary" />,
                      2: <span className="text-secondary" />,
                    }}
                  />
                </h1>

                <p className="hidden parrafo sm:mt-4 md:block">
                  {t("home.description")}
                </p>

                <div className="mt-4 md:mt-8">
                  <Link
                    to="/contact"
                    className="inline-block rounded-lg border dark:border-border_dark px-12 py-3 text-sm font-medium text-secondary chrisvd9_transition hover:bg-gray_light dark:hover:bg-border_dark active:animate-button-pop"
                  >
                    {t("home.contactMe")}
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex">
                <div className="absolute -z-10">
                  <img
                    src="./img/home/Logo.png"
                    alt="logo"
                    className="relative sm:inset-y-4 sm:inset-x-0 xl:inset-y-28 xl:inset-x-5 -z-10 h-44"
                  />
                </div>

                <img
                  alt=""
                  src="./img/icon.png"
                  className="w-full object-cover z-10"
                />

                <div className="absolute z-10">
                  <img
                    src="./img/home/Dots.png"
                    alt="logo"
                    className="relative inset-60 2md:inset-56 md:inset-36 lg:inset-40 xl:inset-[24rem] 4xl:xl:inset-[25rem] z-10"
                  />
                </div>
              </div>

              <div className="rounded-lg border dark:border-contrast_dark p-4 flex gap-4 items-center">
                <span className="bg-secondary h-4 w-4 text-secondary flex items-center">
                  .
                </span>
                <TypingAnimation text={t("home.currentlyWorking")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="py-8 grid gap-8">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold md:text-3xl">
                <span className="text-secondary">#</span>
                {t("home.projects")}
              </h2>
              <div className="hidden md:block h-0.5 w-44 lg:w-96 bg-gray_light dark:bg-border_dark"></div>
            </div>
            <div>
              <Link to="/works" className="text-secondary-hover">
                {t("home.seeMore")} -&gt;
              </Link>
            </div>
          </div>

          <TabGroup>
            <TabList className="flex p-1 space-x-1 rounded-xl">
              <Tab
                className={({ selected }) =>
                  `w-full py-2.5 text-sm leading-5 font-medium rounded-lg border dark:border-border_dark ${
                    selected
                      ? "bg-bg_dark text-white dark:bg-white dark:text-black"
                      : "hover:bg-gray_light dark:hover:bg-white/[0.12] dark:hover:text-white"
                  }`
                }
              >
                CTF
              </Tab>
              <Tab
                className={({ selected }) =>
                  `w-full py-2.5 text-sm leading-5 font-medium rounded-lg border dark:border-border_dark ${
                    selected
                      ? "bg-bg_dark text-white dark:bg-white dark:text-black"
                      : "hover:bg-gray_light dark:hover:bg-white/[0.12] dark:hover:text-white"
                  }`
                }
              >
                Front End
              </Tab>
            </TabList>
            <TabPanels className="mt-2">
              <TabPanel className="rounded-xl p-3 chrisvd9_transition duration-500 ease-in-out transform">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {ctfProjects.map((project, idx) => (
                    <PortfolioCTFCard
                      key={idx}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      machine={project.machine}
                      difficulty={project.difficulty}
                      link={project.link}
                      solve={project.solve}
                    />
                  ))}
                </div>
              </TabPanel>

              <TabPanel className="rounded-xl p-3 chrisvd9_transition duration-500 ease-in-out transform">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {frontendProjects.map((project, idx) => (
                    <PortfolioCard
                      key={idx}
                      title={project.title}
                      description={project.description}
                      live={project.live}
                      code={project.code}
                      skills={project.skills}
                      image={project.image}
                    />
                  ))}
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </section>

      <section className="mt-40">
        <div className="py-8 grid gap-8">
          <div className="grid gap-4 lg:flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold md:text-3xl">
                <span className="text-secondary">#</span>
                {t("home.skills")}
              </h2>
              <div className="h-0.5 w-32 lg:w-96 bg-gray_light dark:bg-border_dark"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2">
            <img
              className=""
              src="./img/home/group-left.png"
              alt="logos-cuadros"
            />
            <div className="grid md:grid-cols-2 gap-4 mt-12 lg:mt-0">
              <div>
                <div className="rounded-lg border dark:border-border_dark">
                  <h3 className="p-2">Front end skills</h3>
                  <div className="border-t p-2 dark:border-border_dark">
                    <ul className="grid grid-cols-2">
                      {skills.frontend.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row-span-2">
                <div className="rounded-lg border dark:border-border_dark">
                  <h3 className="p-2">Hacking skills</h3>
                  <div className="border-t p-2 dark:border-border_dark">
                    <ul className="grid grid-cols-2">
                      {skills.hacking.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="py-8 grid gap-8">
          <div className="grid gap-4 lg:flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold md:text-3xl">
                <span className="text-secondary">#</span>
                {t("home.certifications")}
              </h2>
              <div className="h-0.5 w-24 lg:w-96 bg-gray_light dark:bg-border_dark text-red-500"></div>
            </div>
          </div>
          <div>
            <EmblaCarousel options={OPTIONS} />
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="py-8 grid gap-8">
          <div className="grid gap-4 lg:flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold md:text-3xl">
                <span className="text-secondary">#</span>
                {t("home.aboutMe")}
              </h2>
              <div className="h-0.5 w-32 lg:w-96 bg-gray_light dark:bg-border_dark text-red-500"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 w-full place-items-center">
            <div className="grid gap-4 parrafo">
              <p>{t("home.description1")}</p>
              <p>{t("home.description2")}</p>
              <p>{t("home.description3")}</p>
              <p>{t("home.description4")}</p>

              <div>
                <Link
                  to="about"
                  className="inline-block w-1/2 text-center rounded-lg border dark:border-border_dark px-12 py-3 text-sm font-medium text-secondary chrisvd9_transition hover:bg-gray_light dark:hover:bg-border_dark active:animate-button-pop"
                >
                  {t("home.readMore")}
                </Link>
              </div>
            </div>

            <div className="">
              <img
                src="./img/home/person.png"
                alt="me"
                className="hidden lg:block lg:object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-40 mb-36">
        <div className="py-8 grid gap-8">
          <div className="grid gap-4 lg:flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold md:text-3xl">
                <span className="text-secondary">#</span>
                {t("home.contactMe")}
              </h2>
              <div className="h-0.5 w-32 lg:w-96 bg-gray_light dark:bg-border_dark text-red-500"></div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:gap-32">
            <p className="parrafo">{t("home.availableOpportunities")}</p>
            <div className="grid lg:grid-cols-2 gap-4 w-full">
              <div className="w-full">
                <div className="rounded-lg border dark:border-border_dark">
                  <h3 className="p-2">Message me here</h3>

                  <div className="border-t p-2 dark:border-border_dark">
                    <ul className="grid gap-4">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/christian-vergara-dominguez-84061121b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <BsLinkedin className="size-5" />
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:christianvd99@gmail.com"
                          className="flex items-center gap-2"
                        >
                          <MdEmail className="size-5" />
                          christianvd99@gmail.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
