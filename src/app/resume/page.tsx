import Link from "next/link";
import { ArrowLeftIcon, ExternalLink, DownloadIcon } from "lucide-react";

const experience = [
  {
    company: "Shiloh",
    title: "tech sales rep",
    description:
      "helping business owners own their tech by switching to open-source enterpise solutions.",
    date: "2025",
  },
  {
    company: "Skinstric AI",
    title: "Frontend Engineer",
    description:
      "converted figma designs into functional web app using custom API.",
    date: "2025",
  },
  {
    company: "Frontend Simplified",
    title: "Frontend Engineer & Support Staff",
    description:
      "completed frontend engineering projects, provided support to students, and helped create content for the platform.",
    date: "2024",
  },
];

const projects = [
  {
    title: "Jesus Journal™",
    description:
      "Jesus Journal is a full-stack web app that allows users to use Bible verse prompts to write journal entries about their faith. includes OpenAI API integration and Stripe API integration.",
    link: "https://jesusjournal.app",
    date: "Oct. 2025",
  },
  {
    title: "light again™",
    description: "light again is a mobile app that allows users to track their daily mood and activities. the goal is to help people overcome depression and mental health struggles.",
    link: "https://lightagain.app",
    date: "Sept. 2025",
  },
  {
    title: "27 School™",
    description: "27 School is a web-based Christian community platform where people can come together to share their faith and build relationships.",
    link: "https://27.school",
    date: "2024-2025",
  },
];

const education = [
  {
    school: "Switch Dimension",
    degree: "Build With AI Certificate",
    description: "Education 1 description",
    date: "2025",
  },
  {
    school: "Frontend Simplified",
    degree: "Frontend Engineering Cert.",
    description:
      "Learned frontend engineering concepts and technologies. Completed 10+ projects.",
    date: "2024",
  },
  {
    school: "University of Denver",
    degree: "Full-Stack Web Dev. Cert.",
    description: "Education 1 description",
    date: "2018",
  },
];
export default function ResumePage() {
  return (
    <div className="animate-gradient min-h-screen flex flex-col items-center justify-center py-24 px-8">
      <Link
        href="/enter"
        className="flex items-center gap-1 absolute top-4 left-4 text-white font-poppins text-sm hover:scale-110 hover:bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-full transition-all duration-300 cursor-pointer"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        back
      </Link>
      <h1 className="text-white text-4xl font-bold font-poppins mb-7">
        my resumé
      </h1>
      {/* experience */}
      <div className="max-w-lg bg-black/20 border border-white/10 hover:border-lime-500 rounded-xl p-7 mb-12">
        <h3 className="text-white text-lg font-bold font-poppins mb-4">
          experience
        </h3>
        {experience.map((item) => (
          <div key={item.company} className="flex flex-col gap-1">
            <h3 className="text-white text-xl font-bold font-poppins">
              {item.company}
            </h3>
            <div className="flex justify-between">
              <p className="text-white text-sm font-poppins italic">
                {item.title}
              </p>
              <p className="text-white text-sm italic font-poppins">
                {item.date}
              </p>
            </div>
            <p className="text-white text-sm font-poppins mb-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {/* projects */}
      <div className="max-w-lg bg-black/20 border border-white/10 hover:border-blue-500 rounded-xl p-7 mb-12">
        <h3 className="text-white text-lg font-bold font-poppins mb-4">
          projects
        </h3>
        {projects.map((item) => (
          <div key={item.title} className="flex flex-col gap-1">
            <h3 className="text-white text-xl font-bold font-poppins">
              {item.title}
            </h3>
            <div className="flex justify-between">
              <a
                href={item.link}
                target="_blank"
                className="text-white text-sm font-poppins hover:text-lime-500 italic flex items-center gap-1"
              >
                view project <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-white text-sm italic font-poppins">
                {item.date}
              </p>
            </div>
            <p className="text-white text-sm font-poppins mb-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      {/* education */}
      <div className="max-w-lg bg-black/20 border border-white/10 hover:border-purple-500 rounded-xl p-7 mb-12">
        <h3 className="text-white text-lg font-bold font-poppins mb-4">
          education
        </h3>
        {education.map((item) => (
          <div key={item.school} className="flex flex-col gap-1">
            <h3 className="text-white text-xl font-bold font-poppins">
              {item.school}
            </h3>
            <div className="flex justify-between">
              <p className="text-white text-sm font-poppins italic">
                {item.degree}
              </p>
              <p className="text-white text-sm italic font-poppins">
                {item.date}
              </p>
            </div>
            <p className="text-white text-sm font-poppins mb-7">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <Link href="/cv" target="_blank" className="text-white text-sm font-poppins hover:text-lime-500 italic flex items-center gap-1">
        download cv <DownloadIcon className="w-3 h-3" />
      </Link>
    </div>
  );
}
