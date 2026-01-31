import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { SlUserFemale } from "react-icons/sl";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow md:hidden font-audiowide font-bold">
      <div className="flex justify-around items-center py-2 text-xs font-medium">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <FiHome className="text-2xl" />
          Accueil
        </NavLink>

          <NavLink
          to="/myself"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <SlUserFemale  className="text-2xl" />
          Qui suis-je ?
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <GoProjectRoadmap  className="text-2xl" />
          Projects
        </NavLink>

           <NavLink
          to="/getintouch"
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-btn-secondary" : "text-gray-500"
            }`
          }
        >
          <FaRegMessage  className="text-2xl" />
           Get in touch
        </NavLink>
      </div>
    </nav>
  );
}
