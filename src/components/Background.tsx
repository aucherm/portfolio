import { Link } from "react-router-dom";
import Button from "./Button";

export default function Background() {
  return (
    <div className="bg-[url('/mobile.png')] md:bg-[url('/back.png')] bg-cover bg-center bg-no-repeat w-full h-screen font-audiowide">
      <div className="flex flex-col items-center justify-start text-center px-4 pt-40 md:items-start md:text-left md:pt-70 md:pl-40">
        <h1 className="text-3xl md:text-6xl text-black">MAËLLE AUCHER</h1>

        <p className="text-lg md:text-2xl text-black mt-4 md:mt-4 md:pl-25">
          DEVELOPPEUSE FULL STACK
        </p>

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:pl-35">
          <Link to="/Myself">
            <Button variant="primary">Get to know me</Button>
          </Link>

          <Link to="/Projects">
            <Button variant="primary">My projects</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
