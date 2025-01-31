import React from "react";
import { Marquee } from "./Marquee";

const brands: string[] = [
  "/assets/hero/brands/Vector.png",
  "/assets/hero/brands/Vector-1.png",
  "/assets/hero/brands/Vector-2.png",
  "/assets/hero/brands/Vector-3.png",
  "/assets/hero/brands/Vector-4.png",
  "/assets/hero/brands/Vector-5.png",
  "/assets/hero/brands/Vector-6.png",
  "/assets/hero/brands/Vector-7.png",
];

const BrandsContainer: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={15} className="gap-6">
        {brands.map((brand, index) => (
          <div key={index} className="px-6">
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="w-[220px] object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandsContainer;
