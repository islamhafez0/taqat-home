import { useTranslation } from "react-i18next";

const HeroContent = () => {
  const { t } = useTranslation();
  return (
    <div className="main-container py-12 md:py-28 px-5 md:px-20">
      <div className="flex items-center flex-col justify-center">
        <div className="text-center max-w-[910px]">
          <h1 className="text-[40px] md:text-[54px] px-0 md:px-4 mb-6 font-bold">
            {t("hero.content1.heroTitle")}
          </h1>
          <p className="text-base md:text-2xl px-4 md:px-16">
            {t("hero.content1.heroSubTitle")}
          </p>
        </div>
        <div className="flex flex-col w-full md:flex-row items-center justify-center gap-4 md:gap-8 mt-12">
          <a
            className="px-9 py-4 rounded-full font-bold border border-[#FEFDF9] w-full md:w-fit flex justify-center"
            href="#about-us"
          >
            {t("hero.content1.aboutButton")}
          </a>
          <a
            className="bg-primary px-9 py-4 rounded-full font-bold w-full md:w-fit flex justify-center"
            href="#contact-us"
          >
            {t("hero.content1.contactButton")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
