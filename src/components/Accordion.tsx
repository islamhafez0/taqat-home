import React, { useState } from "react";
import { useTranslation } from "react-i18next";

interface AccordionItemProps {
  number: string;
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const Accordion = () => {
  const [openItem, setOpenItem] = useState(0);

  const { t } = useTranslation();
  const sectionTitle = t("values.title");
  const sectionDesc = t("values.desc");
  const items = t("values.items", { returnObjects: true }) as {
    title: string;
    content: string;
  }[];
  const handleItemClick = (index: number) => {
    if (openItem === index) {
      const nextItem = (index + 1) % items.length;
      setOpenItem(nextItem);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <section
      className="flex items-center justify-center py-20 md:py-52 px-5 md:px-20"
      id="about-us"
    >
      <div className="main-container_small w-full flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-5/12 min-h-[360px] rounded-lg lg:max-h-[600px]">
          <img
            src="/assets/accordion-img.png"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full lg:w-6/12">
          <h2 className="text-[40px] md:text-6xl font-bold mb-5">
            {sectionTitle}
          </h2>
          <p className="mb-8 text-2xl font-bold">{sectionDesc}</p>

          <div className="space-y-2">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                number={`0${index + 1}`}
                title={item.title}
                content={item.content}
                isOpen={openItem === index}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  number,
  title,
  content,
  isOpen,
  onClick,
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div className="border-b border-[#D1D5DB]" tabIndex={0}>
      <button
        className="w-full py-4 flex items-center gap-8 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-lg">{number}</span>
        <span className="text-2xl font-bold">{title}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div
          className={`pl-12 pb-6 text-xl ${
            currentLanguage === "ar" ? "pr-12" : "pl-12"
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
