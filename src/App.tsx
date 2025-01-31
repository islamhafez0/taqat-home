import { useTranslation } from "react-i18next";
import Accordion from "./components/Accordion";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurGoals from "./components/OurGoals";
import OurPartners from "./components/OurPartners";
import OurPrograms from "./components/OurPrograms";
import OurPrjects from "./components/OurProjects";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const App = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
    if (i18n.language !== storedLang) {
      i18n.changeLanguage(storedLang);
    }
    localStorage.setItem("lang", i18n.language);
    if (i18n.language === "ar" && !location.pathname.startsWith("/ar")) {
      navigate(`/ar${location.pathname}`, { replace: true });
    } else if (i18n.language === "en" && location.pathname.startsWith("/ar")) {
      navigate(location.pathname.replace(/^\/ar/, ""), { replace: true });
    }
  }, [i18n.language, location.pathname]);

  const { t } = useTranslation();
  const documentTitle = t("metaTitle");
  const documentDescription = t("metaDescription");

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: i18n.language,
          dir: i18n.language === "ar" ? "rtl" : "ltr",
        }}
      >
        <title>{documentTitle}</title>
        <meta name="description" content={documentDescription} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:description" content={documentDescription} />
        <meta property="og:image" content="/assets/logo.png" />
      </Helmet>
      <main aria-label="Main Content Area">
        <Hero />
        <Accordion />
        <OurPartners />
        <OurPrograms />
        <OurGoals />
        <OurPrjects />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};

export default App;
