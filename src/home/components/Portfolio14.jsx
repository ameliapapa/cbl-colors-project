import { RxChevronRight } from "react-icons/rx";
import portfolioBarracuda from "../../assets/portfolio-barracuda.png";
import portfolioElsMalsNoms from "../../assets/portfolio-els-mals-noms.png";
import portfolioNena from "../../assets/portfolio-nena.png";
import portfolioSextortionDiary from "../../assets/portfolio-sextortion-diary.png";
import portfolioMuseum from "../../assets/portfolio-museum.png";
import portfolioUnfixing from "../../assets/portfolio-unfixing.png";

const portfolioItems = [
  {
    id: 1,
    title: "El Tesoro de Barracuda",
    image: portfolioBarracuda,
    url: "#",
  },
  {
    id: 2,
    title: "Els Mals Noms",
    image: portfolioElsMalsNoms,
    url: "#",
  },
  {
    id: 3,
    title: "Nena",
    image: portfolioNena,
    url: "#",
  },
  {
    id: 4,
    title: "My Sextortion Diary",
    image: portfolioSextortionDiary,
    url: "#",
  },
  {
    id: 5,
    title: "More than a museum",
    image: portfolioMuseum,
    url: "#",
  },
  {
    id: 6,
    title: "The unfixing",
    image: portfolioUnfixing,
    url: "#",
  },
];

export function Portfolio14() {
  // Arrange items in 3 columns matching Figma design
  const column1 = [portfolioItems[0], portfolioItems[1]]; // El Tesoro, Els Mals Noms
  const column2 = [portfolioItems[2], portfolioItems[3]]; // Nena, My Sextortion Diary
  const column3 = [portfolioItems[4], portfolioItems[5]]; // More than a museum, The unfixing

  return (
    <section id="relume" className="bg-cbl-light px-page py-section-lg">
      <div className="container max-w-container mx-auto">
        {/* Section Title */}
        <div className="mb-20 flex items-center gap-4">
          <div className="h-[2px] w-32 bg-gradient-cbl"></div>
          <h2 className="font-neue-header text-h1">Selected Work</h2>
        </div>

        {/* Portfolio Grid - 3 Columns */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-8 w-full">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 flex-1">
            {column1.map((item) => (
              <div
                key={item.id}
                className="bg-cbl-dark overflow-hidden rounded-card shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col"
              >
                <a href={item.url} className="block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="px-6 py-4">
                  <h3 className="font-neue-header text-h5 text-cbl-light mb-4">
                    <a href={item.url} className="hover:opacity-70 transition-opacity">
                      {item.title}
                    </a>
                  </h3>
                  <a
                    href={item.url}
                    className="flex gap-2 items-center font-neue-display text-body-light text-cbl-light hover:opacity-70 transition-opacity"
                  >
                    <span>View project</span>
                    <RxChevronRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-8 flex-1">
            {column2.map((item) => (
              <div
                key={item.id}
                className="bg-cbl-dark overflow-hidden rounded-card shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col"
              >
                <a href={item.url} className="block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="px-6 py-4">
                  <h3 className="font-neue-header text-h5 text-cbl-light mb-4">
                    <a href={item.url} className="hover:opacity-70 transition-opacity">
                      {item.title}
                    </a>
                  </h3>
                  <a
                    href={item.url}
                    className="flex gap-2 items-center font-neue-display text-body-light text-cbl-light hover:opacity-70 transition-opacity"
                  >
                    <span>View project</span>
                    <RxChevronRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-8 flex-1">
            {column3.map((item) => (
              <div
                key={item.id}
                className="bg-cbl-dark overflow-hidden rounded-card shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col"
              >
                <a href={item.url} className="block overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <div className="px-6 py-4">
                  <h3 className="font-neue-header text-h5 text-cbl-light mb-4">
                    <a href={item.url} className="hover:opacity-70 transition-opacity">
                      {item.title}
                    </a>
                  </h3>
                  <a
                    href={item.url}
                    className="flex gap-2 items-center font-neue-display text-body-light text-cbl-light hover:opacity-70 transition-opacity"
                  >
                    <span>View project</span>
                    <RxChevronRight className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <button className="relative rounded-full-btn px-6 py-3 font-neue-display text-body-light text-cbl-dark bg-transparent overflow-hidden group">
            {/* Gradient border effect */}
            <span className="absolute inset-0 rounded-full-btn p-[2px] bg-gradient-cbl">
              <span className="flex items-center justify-center h-full w-full bg-cbl-light rounded-full-btn group-hover:bg-cbl-light/90 transition-colors">
              </span>
            </span>
            <span className="relative z-10">View all</span>
          </button>
        </div>
      </div>
    </section>
  );
}
