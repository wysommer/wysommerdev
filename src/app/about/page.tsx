import Stack from "../components/ui/Stack";
import { Sparkle, Globe, Book, Code, Music, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const images = [
  {
    id: 1,
    img: "/about/img01.jpg",
  },
  {
    id: 2,
    img: "/about/img02.jpg",
  },
  {
    id: 3,
    img: "/about/img03.jpg",
  },
  {
    id: 4,
    img: "/about/img04.jpg",
  },
  {
    id: 5,
    img: "/about/img05.jpg",
  },
  {
    id: 6,
    img: "/about/img06.jpg",
  },
  {
    id: 7,
    img: "/about/img07.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-blue-700 to-purple-500 flex flex-col items-center justify-center py-24">
      <Link href="/enter" className="flex items-center gap-1 absolute top-4 left-4 text-white font-poppins text-sm hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full transition-all duration-300 cursor-pointer">
        <ArrowLeftIcon className="w-4 h-4" />
        back
      </Link>
      <h1 className="text-white text-4xl font-bold font-poppins mb-7">
        about me
      </h1>
      <Stack
        randomRotation={true}
        sensitivity={180}
        sendToBackOnClick={false}
        cardDimensions={{ width: 200, height: 200 }}
        cardsData={images}
      />
      <div className="text-white text-center text-sm font-poppins mt-7 max-w-md flex flex-col space-y-4">
        <span>hey i&apos;m Wy.</span>
        <span>i&apos;m a software engineer from New York.</span>
        <span>i focus on design and frontend development.</span>
        <span className="font-bold">some things i love:</span>
        <div className="flex flex-col space-y-2">
          <span className="flex items-center gap-2">
            <Sparkle className="w-4 h-4" />
            designing (software, clothes, buildings)
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            traveling (been to 10+ countries so far)
          </span>
          <span className="flex items-center gap-2">
            <Book className="w-4 h-4" />
            writing (i wrote a short book about peace)
          </span>
          <span className="flex items-center gap-2">
            <Code className="w-4 h-4" />
            coding (frontend and full-stack stuff)
          </span>
          <span className="flex items-center gap-2">
            <Music className="w-4 h-4" />
            music (afrobeats, reggae are my favorites)
          </span>
        </div>
        <span className="font-bold text-center">
          some things i&apos;ve built:
        </span>
        <Link href="/portfolio/links" className="rounded-full p-4 text-white text-sm font-poppins hover:scale-110 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-500/20 hover:to-purple-500/20 border border-white/10 hover:border-cyan-500 transition-all duration-300 cursor-pointer">
          view my portfolio
        </Link>
        <Link href="/resume" className="rounded-full p-4 text-white text-sm font-poppins hover:scale-110 bg-black/20 hover:bg-black border border-white/10 hover:border-lime-500 transition-all duration-300 cursor-pointer">
          view my resumé
        </Link>
      </div>
    </div>
  );
}
