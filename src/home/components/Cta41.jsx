import ctaBackground from "../../assets/cta-background.png";

export function Cta41() {
  return (
    <section id="relume" className="bg-cbl-light px-page py-section-lg">
      <div className="container max-w-container mx-auto">
        <div className="relative flex items-center justify-center overflow-hidden p-16 rounded-card min-h-[400px]">
          {/* Background with image overlay */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-card">
            <div className="absolute bg-cbl-dark inset-0 rounded-card" />
            <img
              alt=""
              className="absolute max-w-none object-cover opacity-30 rounded-card size-full"
              src={ctaBackground}
              style={{ objectPosition: '50% 50%' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col gap-8 items-center justify-center max-w-content-lg text-center">
            <div className="flex flex-col gap-6 text-cbl-light">
              <h2 className="font-neue-header text-h1 leading-[1.2] font-thin">
                Let's Create Together
              </h2>
              <p className="font-neue-display text-body-thin leading-[1.5]">
                Ready to elevate your project with stunning color? Let's discuss your vision today!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-center">
              <button className="bg-gradient-cbl rounded-full-btn px-6 py-3 font-neue-display text-body-light text-cbl-light hover:opacity-90 transition-opacity">
                Contact
              </button>
              <button className="relative rounded-full-btn px-6 py-3 font-neue-display text-body-light text-cbl-light bg-transparent overflow-hidden group">
                {/* Gradient border effect */}
                <span className="absolute inset-0 rounded-full-btn p-[2px] bg-gradient-cbl">
                  <span className="flex items-center justify-center h-full w-full bg-cbl-dark rounded-full-btn group-hover:bg-cbl-dark/90 transition-colors">
                  </span>
                </span>
                <span className="relative z-10">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
