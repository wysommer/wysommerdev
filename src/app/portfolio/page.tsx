import FlyingPosters from "../components/ui/FlyingPosters";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function PortfolioPage() {
  const items = [
    "/images/art2.png",
    "/images/art3.png",
    "/images/light.png",
    "/images/16-7.png",
    "/images/27-2.png",
  ];
  return (
    <div className="bg-gradient-to-br from-black to-gray-700">
      <Link
        href="/enter"
        className="z-10 absolute top-4 left-4 text-white font-poppins text-sm hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:text-white p-2 rounded-full transition-all duration-300 cursor-pointer"
      >
        <ArrowLeftIcon className="w-4 h-4" />
      </Link>
      <Link
        href="/portfolio/links"
        className="z-10 absolute top-4 right-4 text-white font-poppins text-sm hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer"
      >
        links
      </Link>
      <div style={{ height: "100vh", position: "relative" }}>
        <FlyingPosters items={items} />
      </div>
    </div>
  );
}
