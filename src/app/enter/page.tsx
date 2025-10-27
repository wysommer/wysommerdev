import RippleGrid from "../components/ui/RippleGrid";
import Link from "next/link";

export default function EnterPage() {
  return (
    <div className="h-screen w-screen bg-black relative">
      <RippleGrid
        enableRainbow={true}
        gridColor="#274DF5"
        rippleIntensity={0.05}
        gridSize={10}
        gridThickness={15}
        mouseInteraction={true}
        mouseInteractionRadius={3}
        opacity={0.8}
      />
      <Link
        href="/"
        className="absolute top-4 left-4 text-white font-poppins text-sm hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent hover:scale-110 transition-all duration-300"
      >
        home
      </Link>
      <Link
        href="portfolio"
        className="absolute top-4 right-4 text-white font-poppins text-sm hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent hover:scale-110 transition-all duration-300"
      >
        portfolio
      </Link>
      <Link
        href="/resume"
        className="absolute bottom-4 left-4 text-white font-poppins text-sm hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent hover:scale-110 transition-all duration-300"
      >
        resumé
      </Link>
      <Link
        href="/contact"
        className="absolute bottom-4 right-4 text-white font-poppins text-sm hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent hover:scale-110 transition-all duration-300"
      >
        contact
      </Link>
    </div>
  );
}
