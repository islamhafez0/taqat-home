import { useTranslation } from "react-i18next";

const OurPartners = () => {
  const { t } = useTranslation();
  const sectionTitle = t("partners.title");
  const sectionDesc = t("partners.desc");
  const partners = t("partners.items", { returnObjects: true }) as {
    title: string;
    description: string;
    logo: string;
  }[];

  return (
    <section className="bg-[#F6F4F0]">
      <div className="main-container_small px-5 py-20 md:py-36">
        <div className="max-w-[910px] mx-auto text-center">
          <h3 className="text-[40px] md:text-6xl font-bold mb-6">
            {sectionTitle}
          </h3>
          <p className="md:text-2xl">{sectionDesc}</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-24">
          {partners.map(({ logo, title, description }) => (
            <li key={title}>
              <div className="bg-white px-20 py-24 rounded-2xl">
                <img src={logo} alt={title} className="h-12 object-contain" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mt-10 mb-4">{title}</h4>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurPartners;
