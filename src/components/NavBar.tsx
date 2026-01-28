import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";;
import { SlUserFemale } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";

export default function NavBar() {
  return (
    <nav className="hidden md:block">
      <div className="flex justify-between items-center w-full p-6">
        <div>
        </div>
        <div className=" flex-1 flex justify-center space-x-4 font-bold text-xl">
          <Link to="/home" className="flex items-center ">
            <FiHome className="mr-2 p-0.001 text-2xl " />
            Accueil
          </Link>
          <Link to="/myself" className="flex items-center">
            <SlUserFemale className="mr-3 p-0.001 text-2xl " />
            Qui suis-je ?
          </Link>
          <Link to="/projects" className="flex items-center">
            <GoProjectRoadmap className="mr-2 p-0.001 text-2xl " />
            Mes projets
          </Link>
          <Link to="/getintouch" className="flex items-center">
            <FaRegMessage className="mr-2 p-0.001 text-2xl " />
            Get in touch
          </Link>
        </div>
        <div>
          
        </div>
      </div>
    </nav>
  );
}