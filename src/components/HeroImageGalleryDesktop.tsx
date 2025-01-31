const HeroImageGalleryDesktop = () => {
  return (
    <div className="hidden lg:flex gap-4 justify-center main-container pb-28">
      <div>
        <img
          src="/assets/hero/gallery/Rectangle1.png"
          alt="Rectangle 1"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="/assets/hero/gallery/Rectangle2.png"
          alt="Rectangle 2"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="/assets/hero/gallery/Rectangle3.png"
          alt="Rectangle 3"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-4">
        <img
          src="/assets/hero/gallery/Rectangle4.png"
          alt="Rectangle 4"
          loading="lazy"
        />
        <img
          src="/assets/hero/gallery/Rectangle5.png"
          alt="Rectangle 5"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src="/assets/hero/gallery/Rectangle6.png"
          alt="Rectangle 6"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default HeroImageGalleryDesktop;
