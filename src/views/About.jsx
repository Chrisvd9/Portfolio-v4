import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import Experience from "../components/ui/sections/Experience";

const About = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <section className="grid gap-16 pb-16">
        <div className="grid gap-2 mt-8">
          <h1 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">/</span>
            {t("about.title")}
          </h1>
          <p className="parrafo">{t("about.subtitle")}</p>
        </div>

        <div className="grid gap-4 mt-4">
          <div className="grid lg:flex justify-between w-full items-center gap-16">
            <div className="grid gap-4 parrafo">
              <p>{t("home.description1")}</p>
              <p>{t("home.description2")}</p>
              <p>{t("home.description3")}</p>
              <p>{t("home.description4")}</p>
            </div>

            <div className="w-full">
              <img
                src="./img/home/me-2025.jpg"
                alt="me"
                className="hidden lg:block lg:object-cover rounded-xl grayscale-[1] hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 mt-4">
          <h1 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">#</span>
            {t("about.experience")}
          </h1>
          <Experience />
        </div>
      </section>
    </Layout>
  );
};

export default About;
