import { NavMenu } from "./components/NavMenu";
import { Cards } from "./components/Cards";
import Banner from "./assets/energia.jpg";
import About from "./assets/about.jpg";
import { FaWhatsapp } from "react-icons/fa";

export function App() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 mx-auto stroke-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          role="graphics-symbol"
          aria-labelledby="title-01 desc-01"
        >
          <title id="title-01">Icon title</title>
          <desc id="desc-01">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      title: "Bonus",
      description:
        "All components come with proper attributes to ensure full accessibility with the WAI-ARIA standards. Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 mx-auto stroke-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          role="graphics-symbol"
          aria-labelledby="title-01 desc-01"
        >
          <title id="title-01">Icon title</title>
          <desc id="desc-01">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      title: "Bonus",
      description:
        "All components come with proper attributes to ensure full accessibility with the WAI-ARIA standards. Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 mx-auto stroke-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1"
          role="graphics-symbol"
          aria-labelledby="title-01 desc-01"
        >
          <title id="title-01">Icon title</title>
          <desc id="desc-01">A more detailed description of the icon</desc>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      title: "Bonus",
      description:
        "All components come with proper attributes to ensure full accessibility with the WAI-ARIA standards. Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them.",
    },
  ];

  return (
    <div>
      <NavMenu />
      {/* Hero */}
      <section id="home" className="relative w-full">
        <div className="bg-cover bg-center h-[600px] 2xl:h-[800px] relative">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20">
            <h1 className="text-3xl leading-10 md:text-5xl font-bold mb-4 md:leading-[60px]">
              <span className="text-green-500">Power</span>
              <span className="text-blue-500">Gen</span>
            </h1>
            <p className="text-lg md:text-xl font-medium mb-8 text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo quos
              molestias officia sint voluptates doloremque magni
            </p>
            <button className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <FaWhatsapp />
              <span>Fale conosco</span>
            </button>
          </div>
        </div>
      </section>
      {/* Fim Hero */}
      <section id="about" className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 px-8">
          {/* Coluna da Imagem */}
          <div className="md:w-1/2">
            <img
              src={About}
              alt="Descrição da Imagem"
              className="w-full h-auto rounded-lg"
            />
          </div>
          {/* Coluna do Texto */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conheça a PowerGen
            </h2>
            <p className="text-lg text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum, dolor a pharetra aliquet, arcu mi sollicitudin metus,
              nec fermentum odio felis vel erat. Duis dignissim tempus arcu non
              placerat. Vestibulum dapibus fringilla ex nec ultrices.
            </p>
            <button className="inline-flex h-8 items-center justify-center gap-2 whitespace-nowrap rounded border border-emerald-500 px-4 text-xs font-medium tracking-wide text-emerald-500 transition duration-300 hover:border-emerald-600 hover:text-emerald-600 focus:border-emerald-700 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:text-emerald-300 disabled:shadow-none">
              <span>Conheça-nos melhor</span>
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-8 ">
          <h2 className="flex justify-center text-2xl font-semibold mb-6">
            Nossos Serviços
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {services.map((card, index) => (
              <Cards
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
