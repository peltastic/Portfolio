import {
  Mail,
  LinkedIn,
  TwitterIcon,
  GithubFooterIcon,
  GithubFooterIconDark,
  TwitterIconDark,
  LinkedInDark,
  MailDark,
} from "../components/Icons";
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import Link from "next/link";

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <footer
      id="contact"
      max-width="1650px"
      className="bg-[#313131] w-full py-10 text-[#fff] mt-12 sm:mt-auto"
    >
      <h1 className="font-secondary text-5xl text-center mt-4 mb-28">
        CONTACT ME
      </h1>
      <div className="flex flex-wrap items-center mb-20 justify-around ">
        <div className=" w-full sm:w-[50%] flex sm:block justify-center sm:justify-self-auto">
          <p className="text-3xl w-[70%] text-center">
            I am currently available for work and collaborations and will
            respond to your messages within the next 24 hours{" "}
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-self-auto mt-28 sm:mt-auto mb-12 sm:mb-auto">
          <div className=" mx-8 cursor-pointer shadow-lg rounded-full ">
            <Link href="mailto:onosogapelumi@gmail.com">
              <a>{theme === "light" ? <Mail /> : <MailDark />}</a>
            </Link>
          </div>

          <div className=" mx-8 cursor-pointer shadow-lg rounded-full">
            <Link href="https://linkedin.com/in/pelumi-onasoga-4767081ba/">
              {theme === "light" ? <LinkedIn /> : <LinkedInDark />}
            </Link>
          </div>
          <div className="mx-8 cursor-pointer shadow-lg rounded-full">
            <Link href="https://twitter.com/peltastica">
              <a>{theme === "light" ? <TwitterIcon /> : <TwitterIconDark />}</a>
            </Link>
          </div>
          <div className="mx-8 cursor-pointer shadow-lg rounded-full">
            <Link href="https://github.com/peltastic">
              <a>
                {theme === "light" ? (
                  <GithubFooterIcon />
                ) : (
                  <GithubFooterIconDark />
                )}
              </a>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-center text-3xl sm:text-xl">
        Made with nextjs, gsap and tailwindcss
      </p>
    </footer>
  );
};

export default Footer;