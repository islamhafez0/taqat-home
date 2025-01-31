import { useTranslation } from "react-i18next";

const OurGoals = () => {
  const { t, i18n } = useTranslation();
  const sectionTitle = t("goals.title");
  const sectionDesc = t("goals.desc");
  const sectionDetails = t("goals.details");
  const currentLanguage = i18n.language;

  return (
    <section
      className={`our-goals bg-primary min-h-screen ${
        currentLanguage === "ar"
          ? "md:bg-[url(/assets/ourgoals-bg_rtl.png)]"
          : "md:bg-[url(/assets/ourgoals-bg.png)]"
      }`}
    >
      <div className="md:hidden w-full">
        <img
          src="/assets/mobile/ourgoals.png"
          alt="Our Goals"
          className="w-full"
        />
      </div>
      <div className="main-container_small px-5 py-12 md:py-36">
        <div>
          <div className="w-full max-w-3xl">
            <div>
              <img
                src="/assets/2030.png"
                alt="Our 2030 Goals"
                className="w-24 md:w-full max-w-48"
              />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mt-14 mb-4">
                {sectionTitle}
              </h3>
              <p className="text-3xl md:text-[40px] leading-[1.2] font-bold mb-4 md:mb-10">
                {sectionDesc}
              </p>
              <p className="text-xl md:text-2xl leading-9">{sectionDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurGoals;
