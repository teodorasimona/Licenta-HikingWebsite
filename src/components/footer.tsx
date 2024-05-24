import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center px-36 bg-lime-950 max-md:px-5 w-full   ">
      <div className="mt-7 w-full max-md:max-w-full">
        <div className=" flex gap-5 py-6 max-md:flex-col max-md:gap-0">
          <div className=" flex flex-col w-1/3 max-md:ml-0 max-md:w-full ">
            <img className="h-6" src="images/logo.svg" />
          </div>
          <div className="flex flex-col ml-12 w-1/3 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col text-white max-md:mt-10 max-md:max-w-full">
              <h4 className="pb-4 text-lg">Urmărește-ne</h4>
              <div className="flex gap-3 text-white">
                <a href="#" className=" ">
                  <InstagramIcon />
                </a>
                <a href="#" className="">
                  <FacebookIcon />
                </a>
                <a href="#" className="">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-1/3 max-md:ml-0 max-md:w-full text-white">
            <h4 className="text-lg pb-4">Linkuri utile</h4>
            <ul className="list-unstyled footer-li">
              <li>
                <a href="#">Termeni și condiții</a>
              </li>
              <li>
                <a href="#">Politică de cookies</a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" text-center py-3 text-white">
          ©{" "}
          <span className="current-year" id="currentYear">
            2024
          </span>{" "}
          Trailventure. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
