import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useTranslation } from "react-i18next";

const SolveBlog = ({ solve }) => {
  const isPDF = solve && typeof solve === "string" && solve.endsWith(".pdf");
  const { t } = useTranslation();

  return (
    <section>
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="max-w-3xl">
          <h2 className="font-bold text-xl md:text-2xl">
            {t("ctf.solveTitle")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:gap-16">
          <div className="lg:py-8">
            {isPDF ? (
              <div
                style={{
                  height: "80dvh",
                  maxHeight: "650px",
                  width: "100%",
                }}
              >
                <Worker
                  workerUrl={`https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`}
                >
                  <Viewer fileUrl={solve} />
                </Worker>
              </div>
            ) : (
              <p>{t("ctf.noData")}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolveBlog;
