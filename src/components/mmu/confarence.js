const Confarence = ({
  title = "Your Conference Photos Are Ready",
  subtitle = "I had the honor of capturing this event as the un-official photographer. You can now access, view, and download your favorite moments.",
  buttonText = "Access your photos",
  buttonLink = "/photo-cate",
  backgroundImage = "https://res.cloudinary.com/dip3vjhbo/image/upload/v1775381650/WhatsApp_Image_2026-04-05_at_5.32.03_PM_rm25uj.jpg",
}) => {
  return (
    <section className="relative isolate min-h-screen w-screen overflow-hidden">
      <div
        className="h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0  " />

        <div className="relative z-10 mx-auto flex h-screen w-full max-w-5xl items-center justify-center px-3 py-14 sm:px-8">
          <div className="max-w-2xl text-center text-white">
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide backdrop-blur-sm">
              📸 Official Event Gallery
            </span>

            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>

            <p className="mt-4 text-base leading-relaxed  text-justify   text-white/90 sm:text-lg">{subtitle}</p>

            <div className="mt-8 flex justify-center">
              <a
                href={buttonLink}
                className="inline-flex items-center no-underline gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-black/30 sm:text-base"
              >
                <span aria-hidden="true">🖼️</span>
                {buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Confarence;
