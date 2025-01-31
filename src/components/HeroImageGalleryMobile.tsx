import { Marquee } from "./Marquee";

const mobileImages = [
  "/assets/hero/mobile-brands/Rectangle-1.png",
  "/assets/hero/mobile-brands/Rectangle-2.png",
  "/assets/hero/mobile-brands/Rectangle-3.png",
  "/assets/hero/mobile-brands/Rectangle-4.png",
  "/assets/hero/mobile-brands/Rectangle-5.png",
  "/assets/hero/mobile-brands/Rectangle-6.png",
];

const HeroImageGalleryMobile = () => {
  return (
    <div className="flex lg:hidden main-container pb-12">
      <Marquee speed={8} className="bg-transparent">
        {mobileImages.map((image, index) => (
          <div key={index} className="px-2">
            <img
              src={image}
              alt={`Rectangle ${index + 1}`}
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroImageGalleryMobile;
