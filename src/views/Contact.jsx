import { useTranslation } from "react-i18next";
import Layout from "../layout/Layout";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useTranslation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_pjsjl0m", "template_ico0aor", form.current, {
        publicKey: "UhawM4bubvojMbn0d",
      })
      .then(
        () => {
          toast.success(t("contact.postMessage"));
        },
        (error) => {
          toast.error(t("contact.postError"), error);
        }
      );
  };

  return (
    <Layout>
      <section className="grid gap-16 pb-16">
        <div className="grid gap-2 mt-8">
          <h1 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">/</span>
            {t("contact.title")}
          </h1>
          <p className="parrafo">{t("contact.subtitle")}</p>
        </div>

        <div className="py-8 grid gap-8">
          <div className="grid gap-4 2lg:grid-cols-2 lg:gap-32">
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

        <div className="grid gap-4 mt-4">
          <h1 className="text-2xl font-bold md:text-3xl">
            <span className="text-secondary">#</span>
            {t("contact.message")}
          </h1>

          <div className="rounded-xl p-8 border dark:border-border_dark lg:col-span-3 lg:p-12">
            <form className="space-y-4" ref={form} onSubmit={sendEmail}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="name">
                    {t("contact.form.name")}
                  </label>
                  <input
                    className="w-full input p-3 text-sm"
                    placeholder={t("contact.form.name")}
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="email">
                    {t("contact.form.email")}
                  </label>
                  <input
                    className="w-full input p-3 text-sm"
                    placeholder={t("contact.form.email")}
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  {t("contact.form.message")}
                </label>

                <textarea
                  className="w-full input p-3 text-sm"
                  placeholder={t("contact.form.message")}
                  rows="8"
                  id="message"
                  name="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-gray-100 dark:bg-border_dark px-5 py-3 font-medium sm:w-auto hover:bg-border_dark hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition duration-500"
                >
                  {t("contact.form.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
