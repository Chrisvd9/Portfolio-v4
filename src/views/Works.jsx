import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Pagination from "../components/common/Pagination";
import { useTranslation } from "react-i18next";
import PortfolioCTFCard from "../components/common/PortfolioCTFCard";
import PortfolioCard from "../components/common/PortfolioCard";
import { useLocation, useNavigate } from "react-router-dom";
import { HiSearch } from "react-icons/hi";

const Works = () => {
  const { t } = useTranslation(["translation", "ctfs", "projects"]);
  const location = useLocation();
  const navigate = useNavigate();

  const ctfProjects = t("ctfs", { ns: "ctfs", returnObjects: true });
  const frontendProjects = t("projects", {
    ns: "projects",
    returnObjects: true,
  });

  const projectSections = frontendProjects.map((section) => ({
    category: section.category,
    projects: section.projects,
  }));

  const itemsPerPage = 6;

  const getCurrentPageFromQuery = (param) => {
    const query = new URLSearchParams(location.search);
    const page = query.get(param);
    return page ? parseInt(page, 10) : 1;
  };

  const [activeTab, setActiveTab] = useState("ctfs");
  const [ctfCurrentPage, setCtfCurrentPage] = useState(
    getCurrentPageFromQuery("ctfPage")
  );
  const [frontendCurrentPage, setFrontendCurrentPage] = useState(
    getCurrentPageFromQuery("frontendPage")
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("");
  const [filteredCTFs, setFilteredCTFs] = useState(ctfProjects);

  useEffect(() => {
    const filtered = ctfProjects.map((section) => ({
      ...section,
      projects: section.projects.filter((project) => {
        const matchesSearch = project.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesDifficulty = difficultyFilter
          ? project.difficulty.toLowerCase() === difficultyFilter.toLowerCase()
          : true;
        return matchesSearch && matchesDifficulty;
      }),
    }));
    setFilteredCTFs(filtered);
  }, [searchTerm, difficultyFilter, ctfProjects]);

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);

    if (newTab === "ctfs") {
      setCtfCurrentPage(1);
    } else if (newTab === "frontend") {
      setFrontendCurrentPage(1);
    }

    navigate({
      search: "",
    });
  };

  const getPaginatedData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const handlePageChange = (page, section) => {
    const query = new URLSearchParams(location.search);

    if (section === "ctfs") {
      setCtfCurrentPage(page);
      query.set("ctfPage", page);
    } else if (section === "frontend") {
      setFrontendCurrentPage(page);
      query.set("frontendPage", page);
    }

    navigate({ search: query.toString() });
  };

  return (
    <Layout>
      <section className="grid gap-16 pb-16">
        <div className="grid gap-2 mt-8">
          <h1 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">/</span>
            {t("works.title")}
          </h1>
          <p className="parrafo">{t("works.subtitle")}</p>
        </div>

        {/* CTF Projects */}
        <div className="grid gap-4 mt-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">#</span>ctf
          </h2>

          <TabGroup onChange={(index) => handleTabChange("ctfs")}>
            <TabList className="grid grid-cols-2 gap-4 lg:flex p-1 space-x-1 rounded-xl">
              {filteredCTFs.map((section, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm leading-5 font-medium rounded-lg border dark:border-border_dark ${
                      selected
                        ? "bg-bg_dark text-white dark:bg-white dark:text-black"
                        : "hover:bg-gray_light dark:hover:bg-white/[0.12] dark:hover:text-white"
                    }`
                  }
                >
                  {section.category}
                </Tab>
              ))}
            </TabList>

            <div className="grid gap-4 grid-cols-2 md:flex justify-between items-center p-1.5 py-4">
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  {t("works.search")}
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder={t("works.search")}
                  className="input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <HiSearch className="size-4" />
                </span>
              </div>

              <div>
                <select
                  name="difficulty"
                  id="difficulty"
                  className="input h-10"
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                >
                  <option value="">{t("works.difficulty")}</option>
                  <option value={t("works.veryEasy")}>{t("works.veryEasy")}</option>
                  <option value={t("works.easy")}>{t("works.easy")}</option>
                  <option value={t("works.medium")}>{t("works.medium")}</option>
                  <option value={t("works.hard")}>{t("works.hard")}</option>
                </select>
              </div>
            </div>

            <TabPanels className="mt-2">
              {filteredCTFs.map((section, index) => (
                <TabPanel
                  key={index}
                  className="rounded-xl p-1.5 chrisvd9_transition duration-500 ease-in-out transform"
                >
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {getPaginatedData(section.projects, ctfCurrentPage).length >
                    0 ? (
                      getPaginatedData(section.projects, ctfCurrentPage).map(
                        (project, idx) => (
                          <PortfolioCTFCard
                            key={idx}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            machine={project.machine}
                            difficulty={project.difficulty}
                            link={project.link}
                            solve={project.solve}
                            id={project.id}
                          />
                        )
                      )
                    ) : (
                      <p>No CTFs found matching your criteria.</p>
                    )}
                  </div>

                  {section.projects.length > itemsPerPage && (
                    <div className="mt-4">
                      <Pagination
                        totalPages={Math.ceil(
                          section.projects.length / itemsPerPage
                        )}
                        currentPage={ctfCurrentPage}
                        onPageChange={(page) => handlePageChange(page, "ctfs")}
                      />
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>

        {/* Frontend Projects */}
        <div className="grid gap-4 mt-4">
          <h2 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">#</span>
            {t("works.frontend")}
          </h2>

          <TabGroup onChange={(index) => handleTabChange("frontend")}>
            <TabList className="grid grid-cols-2 gap-4 lg:flex p-1 space-x-1 rounded-xl">
              {projectSections.map((section, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `w-full py-2.5 text-sm leading-5 font-medium rounded-lg border dark:border-border_dark ${
                      selected
                        ? "bg-bg_dark text-white dark:bg-white dark:text-black"
                        : "hover:bg-gray_light dark:hover:bg-white/[0.12] dark:hover:text-white"
                    }`
                  }
                >
                  {section.category}
                </Tab>
              ))}
            </TabList>

            <TabPanels className="mt-2">
              {projectSections.map((section, index) => (
                <TabPanel
                  key={index}
                  className="rounded-xl p-1.5 chrisvd9_transition duration-500 ease-in-out transform"
                >
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {getPaginatedData(section.projects, frontendCurrentPage)
                      .length > 0 ? (
                      getPaginatedData(
                        section.projects,
                        frontendCurrentPage
                      ).map((project, idx) => (
                        <PortfolioCard
                          key={idx}
                          title={project.title}
                          description={project.description}
                          live={project.live}
                          code={project.code}
                          skills={project.skills}
                          image={project.image}
                        />
                      ))
                    ) : (
                      <p>No projects found matching your criteria.</p>
                    )}
                  </div>

                  {section.projects.length > itemsPerPage && (
                    <div className="mt-4">
                      <Pagination
                        totalPages={Math.ceil(
                          section.projects.length / itemsPerPage
                        )}
                        currentPage={frontendCurrentPage}
                        onPageChange={(page) =>
                          handlePageChange(page, "frontend")
                        }
                      />
                    </div>
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </Layout>
  );
};

export default Works;
