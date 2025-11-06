import bioImage from "../../assets/bio-image-new.png";

export function Layout1() {
  return (
    <section id="relume" className="bg-cbl-dark w-full">
      <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[700px]">
        {/* Image on the left - 50% width, full height */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
          <img
            src={bioImage}
            className="w-full h-full object-cover"
            alt="Professional colorist workspace"
            style={{
              objectPosition: '34% center',
            }}
          />
        </div>

        {/* Content on the right - 50% width */}
        <div className="w-full md:w-1/2 flex flex-col gap-8 justify-center px-8 md:px-12 lg:px-20 py-16 md:py-20">
          <div className="flex flex-col gap-6">
            <h2 className="font-helvetica text-[40px] md:text-[64px] leading-[1.2] font-thin text-cbl-light">
              Meet Your Professional Colorist
            </h2>
            <p className="font-helvetica text-body-light text-cbl-light">
              With years of experience in film post-production, our colorist brings stories to life through vibrant visuals. Their expertise in color grading enhances the emotional impact of every project.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative rounded-full-btn px-6 py-3 font-helvetica text-body-light text-cbl-light bg-transparent overflow-hidden group">
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
    </section>
  );
}
