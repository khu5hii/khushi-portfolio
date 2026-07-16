import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Cedarville_Cursive } from "next/font/google";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="mx-auto flex h-13 max-w-7xl items-center justify-between px-8">

        <Link
          href="/"
          className={`${cedarville.className} text-2xl text-primary hover:text-primary-hover transition-colors`}
        >
          khushi patil
        </Link>

        <div className="hidden items-center gap-8 text-sm font-semibold md:flex">
          <Link href="#hero" className="text-text-secondary transition-colors hover:text-primary-hover">
            Home
          </Link>

          <Link href="#about" className="text-text-secondary transition-colors hover:text-primary-hover">
            About
          </Link>

          <Link href="#skills" className="text-text-secondary transition-colors hover:text-primary-hover">
            Skills
          </Link>

          <Link href="#projects" className="text-text-secondary transition-colors hover:text-primary-hover">
            Projects
          </Link>

          <Link href="#experience" className="text-text-secondary transition-colors hover:text-primary-hover">
            Experience
          </Link>

          <Link href="#contact" className="text-text-secondary transition-colors hover:text-primary-hover">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-5 text-text-secondary">
          <a
            href="mailto:khushipatil1377@gmail.com"
            className="transition-colors hover:text-primary-hover"
          >
            <MdEmail size={21} />
          </a>

          <a
            href="https://github.com/khu5hii"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-hover"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/khushi-patil-03944b385/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary-hover"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}