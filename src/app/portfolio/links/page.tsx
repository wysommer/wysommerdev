import Link from "next/link";
import InfiniteMenu from "../../components/ui/InfiniteMenu";
import { ArrowLeftIcon } from "lucide-react";

const items = [
  {
    image: "/images/art2.png",
    link: "https://written-art.com",
  },
  {
    image: "/images/art3.png",
    link: "https://written-art.com",
  },
  {
    image: "/images/light.png",
    link: "https://lightagain.app",
  },
  {
    image: "/images/16-7.png",
    link: "https://16-7.studio",
  },
];

export default function LinksPage() {
  return (
    <div className="h-screen">
      <Link
        href="/enter"
        className="z-10 absolute top-4 left-4 flex items-center gap-1 text-white font-poppins text-sm hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 transition-all duration-300 cursor-pointer"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        back
      </Link>
      <div className="h-full relative">
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
}
