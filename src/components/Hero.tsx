import { useTranslation } from "react-i18next";
import BrandsContainer from "./BrandsContainer";
import Header from "./Header";
import HeroContent from "./HeroContent";
import HeroImageGalleryDesktop from "./HeroImageGalleryDesktop";
import HeroImageGalleryMobile from "./HeroImageGalleryMobile";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <div className="bg-black text-white min-h-screen pb-20 md:pb-52">
      <motion.div
        className="hero-wrapper main-container"
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={container}
      >
        <Header />
        <HeroContent />
        <HeroImageGalleryDesktop />
        <HeroImageGalleryMobile />
        <div>
          <div className="py-16 md:py-28 px-5 md:px-20">
            <div className="flex items-center flex-col justify-center main-container">
              <div className="max-w-[910px] mx-auto">
                <h2 className="text-center text-[28px] md:text-[40px] px-0 md:px-8">
                  {t("hero.content2.details")}
                </h2>
                <h3 className="text-center custom-gradient w-fit mx-auto mt-24 text-[28px] md:text-[40px]">
                  {t("hero.content2.title")}
                </h3>
              </div>
            </div>
          </div>
          <BrandsContainer />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
