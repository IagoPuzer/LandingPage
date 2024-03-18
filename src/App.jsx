import { NavMenu } from "./components/NavMenu";
import Banner from "./assets/banner-novo.png";

export function App() {
  return (
    <div>
      <NavMenu />
      <div id="home" className="relative w-full">
        <div className="bg-cover bg-center h-[600px] 2xl:h-[800px] relative">
          <img src={Banner} alt="" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-left text-neutral-1000 z-20">
            <h1 className="text-3xl leading-10 md:text-5xl font-bold mb-4 md:leading-[60px]">
              <span className="text-cyan-800">Best</span>
              <span className="text-cyan-600">Spaces</span>
            </h1>
            <p className="text-sm md:text-xl font-medium mb-8 text-cyan-800">
              A 1a plataforma aberta de IA <br /> para a busca do ponto
              comercial perfeito!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
