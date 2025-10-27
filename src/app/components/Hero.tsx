import RotatingText from "./ui/RotatingText";
import TextPressure from "./ui/TextPressure";
import ColorBends from "./ui/ColorBends";
import Aurora from "./ui/Aurora";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black md:bg-transparent overflow-hidden">
      <div className="block md:hidden absolute top-0 left-0 w-full h-full">
        <Aurora
          colorStops={["#82FF9C", "#3048FF", "#9330FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      <div className="hidden md:block absolute top-0 left-0 w-full h-full">
        <ColorBends
          colors={[
            "#ff5c7a",
            "#8a5cff",
            "#00ffd1",
            "#ffd15c",
            "#ff5c7a",
            "#8a5cff",
            "#00ffd1",
            "#ffd15c",
          ]}
          rotation={30}
          speed={0.3}
          scale={1.2}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent={false}
          style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none">
        <div className="mb-12 pointer-events-auto">
          <TextPressure
            text="WYSOMMER"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ffffff"
            minFontSize={120}
            className="cursor-cell"
          />
        </div>
        <div className="flex items-center justify-center pointer-events-auto">
          <h1 className="text-2xl md:text-4xl font-extralight text-white font-poppins">
            what i do:
          </h1>
          <RotatingText
            texts={["design", "develop", "create", "have fun", "innovate"]}
            mainClassName="font-poppins px-4 py-2 text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 mx-4 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <Link href="/enter" className="mt-12 pointer-events-auto">
          <p className="text-white text-sm font-poppins hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
            ENTER SITE
          </p>
        </Link>
      </div>
    </div>
  );
}
