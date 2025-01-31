import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <section className="text-white bg-black" id="contact-us">
      <div className="main-container_small py-16 md:py-36 px-5">
        <div
          className={`text-center max-w-[930px] mx-auto ${
            currentLanguage === "ar" && "max-w-[860px]"
          }`}
        >
          <h3
            className={`text-primary font-bold text-2xl px-5 md:px-20 md:text-[40px]`}
          >
            {t("contact.title")}
          </h3>
          <p
            className={`text-3xl md:text-5xl lg:text-7xl font-bold mt-6 mb-8 ${
              currentLanguage === "ar" && "px-5 md:px-16 md:!leading-[90px]"
            }`}
          >
            {t("contact.desc")}
          </p>
          <p className="text-base md:text-[22px] md:text-2xl">
            {t("contact.details")}
          </p>
        </div>
        <div className="mt-16 md:mt-[120px] flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col gap-14 w-full md:w-1/2 py-0 md:py-10">
            <div>
              <div className="flex items-center gap-4">
                <MapPin />
                <h3 className="text-2xl font-bold">
                  {t("contact.info.location.title")}
                </h3>
              </div>
              <p
                className={`text-[18px] mt-5 w-full max-w-[400px] ${
                  currentLanguage === "ar" ? "pr-10" : "pl-10"
                }`}
                dangerouslySetInnerHTML={{
                  __html: t("contact.info.location.desc"),
                }}
              />
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Mail />
                <h3 className="text-2xl font-bold">
                  {t("contact.info.email.title")}
                </h3>
              </div>
              <a
                href={`mailto:${t("contact.info.email.desc")}`}
                className={`block w-fit text-[18px] mt-5 hover:text-blue-600 ${
                  currentLanguage === "ar" ? "pr-10" : "pl-10"
                }`}
              >
                {t("contact.info.email.desc")}
              </a>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Phone />
                <h3 className="text-2xl font-bold">
                  {t("contact.info.details.title")}
                </h3>
              </div>
              <div
                className={`flex flex-col mt-5 gap-1.5 ${
                  currentLanguage === "ar" ? "pr-10" : "pl-10"
                }`}
              >
                <a
                  href={`tel:${t("contact.info.details.phone")}`}
                  className="hover:text-blue-600"
                >
                  {t("contact.info.details.phone")}
                </a>
                <p className="mt-12">{t("contact.info.details.workDays")}</p>
                <p>{t("contact.info.details.weekends")}</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[320px] md:h-[600px] mt-12 md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4465694124638!2d51.502918975166715!3d25.289196177651863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45e7f9fd70da9d%3A0x315a41543dc395f0!2sTAQAT%20Trading%20%26%20Business%20Solutions!5e0!3m2!1sen!2seg!4v1738320019806!5m2!1sen!2seg"
              width="660px"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl max-w-full"
              title="TAQAT Trading & Business Solutions"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
