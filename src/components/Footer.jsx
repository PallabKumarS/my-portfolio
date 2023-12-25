"use client";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const handleNewsletter = (e) => {
    e.preventDefault();
    handleAlert("success", "You Have Successfully Submitted To Our Newsletter");
  };
  return (
    <div className="mt-20 text-center mx-auto bg-slate-600">
      <footer className="footer p-10 bg-base-200 justify-evenly">
        <aside className="text-center">
          <p className={`text-lg font-medium`}>
            <span className="text-3xl font-bold text-teal-500">
              My PortFolio
            </span>
            <br />
            Created With NextJs and NextUi
          </p>
        </aside>

        <div className="mx-auto mb-10">
          <nav className="text-center mx-auto">
            <header className="text-2xl text-center mx-auto font-medium text-teal-500 mb-3">
              Social Links
            </header>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="https://www.facebook.com/PallabKumars">
                <BsFacebook className="text-4xl text-blue-500 hover:link-hover"></BsFacebook>
              </a>
              <a href="https://www.instagram.com/pallabkumars/">
                <FaInstagram className="text-4xl text-red-500 hover:link-hover"></FaInstagram>
              </a>
              <a href="https://twitter.com/PallabKumarS">
                <BsTwitter className="text-4xl text-sky-500 hover:link-hover"></BsTwitter>
              </a>
            </div>
          </nav>
        </div>
        <p>Copyright © 2023 - All right reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
