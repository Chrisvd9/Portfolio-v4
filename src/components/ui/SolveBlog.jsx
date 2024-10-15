import React from "react";
import CodeBlockWithCopy from "./CodeBlockWithCopy";
import { useTranslation } from "react-i18next";

const SolveBlog = ({ solve }) => {
  const { t } = useTranslation();

  if (!solve) {
    return <p>No solve information available.</p>;
  }

  const { name, step1, step2, step3, step4, step5 } = solve;

  const steps = [step1, step2, step3, step4, step5].filter(Boolean);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-bold text-xl md:text-4xl">{name}</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-16">
            <div className="lg:py-8">
              <article className="space-y-4 grid gap-2">
                {steps.map((stepArray, index) => (
                  <div
                    key={index}
                    className="grid gap-2 border-b py-4 dark:border-border_dark"
                  >
                    <h3 className="text-lg md:text-3xl font-bold">
                      {t(`works.step${index + 1}`)}
                    </h3>
                    {stepArray.map((step, idx) => (
                      <div key={idx}>
                        <p className="parrafo text-sm">{step.step}</p>
                        <CodeBlockWithCopy
                          codeString={step.command1}
                          language="bash"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolveBlog;
