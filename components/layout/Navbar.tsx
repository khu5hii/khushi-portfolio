import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({
  subsets: ["latin"],
  weight: "400",
});

export default function Navbar() {
  return (
    <nav className="zbg-black-800 p-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className={`${cedarville.className} text-2xl font-semibold hover:text-primary-hover`}>
          khushi patil
        </a>

        <div className="space-x-4 text-sm font-bold">
          <a href="/" className="text-gray-300  hover:text-primary-hover">
            Home
          </a>
          <a href="/about" className="text-gray-300 hover:text-primary-hover">
            About
          </a>
          <a href="/skills" className="text-gray-300 hover:text-primary-hover">
            Skills
          </a>
          <a href="/projects" className="text-gray-300 hover:text-primary-hover">
            Projects
          </a>
          <a href="/experience" className="text-gray-300 hover:text-primary-hover">
            Experience
          </a>
          <a href="/contact" className="text-gray-300 hover:text-primary-hover">
            Contact
          </a>
        </div>

        <div className="flex gap-4">
          <a href="mailto:khushipatil1377@gmail.com" className="hover:text-primary">
            <MdEmail size={20} />
          </a>
          <a href="https://github.com/khu5hii" className="hover:text-primary">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/khushi-patil-03944b385/" className="hover:text-primary">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
}
