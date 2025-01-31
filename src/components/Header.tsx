import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const currentLanguage = i18n.language;

  const switchLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, []);
  const ContactUsText = t("header.contactButton");

  const handleCloseMenu = () => {
    setMobileMenu(false);
  };

  return (
    <header className="py-5 md:py-6 px-5 md:px-20 flex items-center justify-between">
      <a href="/">
        <img src="/assets/logo.png" alt="Taqat Logo" />
      </a>
      <nav>
        <div className="md:hidden">
          <button
            className="h-8 w-8 grid place-content-center transition-transform duration-200 hover:scale-110 active:scale-100"
            onClick={() => setMobileMenu(true)}
            aria-label="Open Menu"
            aria-expanded={mobileMenu}
          >
            <img src="/assets/Icon/menu.svg" alt="Menu" className="w-8 h-8" />
          </button>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() =>
              switchLanguage(currentLanguage === "en" ? "ar" : "en")
            }
            className="p-2"
          >
            {currentLanguage === "ar" ? "English" : "العربية"}
          </button>
          <a
            href="#contact-us"
            className="bg-primary px-9 py-4 rounded-full font-bold"
          >
            {ContactUsText}
          </a>
        </div>
        <MobileMenu
          ContactUsText={ContactUsText}
          currentLanguage={currentLanguage}
          handleCloseMenu={handleCloseMenu}
          mobileMenu={mobileMenu}
          switchLanguage={switchLanguage}
        />
      </nav>
    </header>
  );
};

export default Header;
