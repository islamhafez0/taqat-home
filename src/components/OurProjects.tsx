import { useTranslation } from "react-i18next";

const OurPrjects = () => {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true }) as {
    name: string;
    description: string;
    logo: string;
  }[];
  return (
    <section className="bg-[#F6F4F0]">
      <div className="main-container_small px-5 py-20 md:py-36">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <h3 className="text-[40px] md:text-6xl font-bold w-full md:w-1/2">
            {t("projects.title")}
          </h3>
          <p className="text-2xl w-full md:relative md:before:absolute md:before:left-0 md:before:top-0 md:before:w-[1px] md:before:h-full md:before:bg-[#d4d4d4] md:ps-12">
            {t("projects.desc")}
          </p>
          <div className="flex flex-col w-full items-start md:items-center md:w-1/4">
            <span className="text-7xl font-bold">
              {t("projects.numberOfPrjs")}
            </span>
            <span>{t("projects.word")}</span>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12 md:mt-24">
          {projects.map(({ logo, name, description }, inx) => (
            <li key={inx} className="bg-white rounded-2xl p-8">
              <div className="pb-12">
                <img src={logo} alt={name} className="h-12 object-contain" />
              </div>
              <hr className="bg-[#E5E7EB] h-[1px] border-0" />
              <div>
                <h3 className="pt-6 pb-2 text-[18px] font-bold">{name}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurPrjects;
