import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

const OurPrograms = () => {
  const { t, i18n } = useTranslation();
  const sectionTitle = t("programs.title");
  const sectionDesc = t("programs.desc");
  const sectionDetails = t("programs.details");
  const projects = t("programs.items", { returnObjects: true }) as {
    image: string;
    logo: string;
    name: string;
    description: string;
    details: string;
    buttonText: string;
    href: string;
  }[];
  const currentLanguage = i18n.language;

  return (
    <section>
      <div className="main-container_small px-5 py-20 md:py-36 relative">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-[40px] md:text-6xl font-bold mb-8">
              {sectionTitle}
            </h3>
            <p className="text-3xl md:text-4xl font-bold pb-10">
              {sectionDesc}
            </p>
            <hr className="bg-[#D1D5DB] h-[1px] border-0 hidden md:block" />
          </div>
          <p className="text-xl md:text-2xl w-full md:w-1/2">
            {sectionDetails}
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-hide mt-20 md:mt-36">
          <ul className="flex flex-col lg:flex-row space-y-20 lg:space-y-0 lg:gap-20 snap-x snap-mandatory">
            {projects.map((project) => (
              <li
                key={project.name}
                className="flex flex-col lg:flex-row items-center min-w-full lg:min-w-[80%] gap-12 lg:gap-24"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover"
                />
                <div className="max-w-[550px]">
                  <img
                    src={project.logo}
                    alt={project.name}
                    className="object-cover"
                  />
                  <div>
                    <h4 className="text-[28px] md:text-[32px] font-bold mt-10">
                      {project.name}
                    </h4>
                    <p className="my-4">{project.description}</p>
                    <p>{project.details}</p>
                  </div>
                  <a
                    href={project.href}
                    className={`text-primary border border-primary hover:bg-primary hover:border-transparent hover:text-white mt-10 px-8 py-4 justify-between lg:justify-between flex items-center gap-3 rounded-full w-full sm:w-fit transition-custom ${
                      currentLanguage === "ar" ? "flex-row-reverse" : "flex-row"
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <ArrowLeft />
                    {project.buttonText}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
