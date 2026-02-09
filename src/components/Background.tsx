import { Link } from "react-router-dom";
import Button from "./Button";

export default function Background() {
  return (
    <div className="bg-[url('/mobile.png')]  md:bg-[url('/back.png')] bg-cover bg-center bg-no-repeat w-full h-screen font-audiowide ">
      <h1 className="text-4xl pt-50 md:text-6xl md:pt-70 text-black pl-18 md:pl-40">MAËLLE AUCHER</h1>
      <p className=" text-l md:text-2xl p-8 text-black pl-29 md:pl-65">DEVELOPPEUSE FULL STACK</p>

      <div className="pl-22 md:pl-75 gap-4 mt-6 flex">
        <Link to="/Myself">
          <Button variant="primary">Get to know me</Button>
        </Link>

        <Link to="/Projects">
          <Button variant="primary">My projects</Button>
        </Link>
      </div>
    </div>
  );
}
