import { NavMenu } from "./components/NavMenu";
import Banner from "./assets/energia.jpg";

export function App() {
  return (
    <div>
      <NavMenu />
      <div id="home" className="relative w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
}
