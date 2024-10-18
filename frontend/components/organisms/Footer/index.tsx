import NavBrand from "../../atoms/NavBrand";
import NavLink from "../../atoms/NavLink";
import Text from "../../atoms/Text";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#632020] text-white py-16 px-24 flex flex-col ">
      <div className="container flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col  w-full space-y-6 items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-5xl font-bold mb-4 tracking-tighter">
              Join The Revolution
            </h2>

            <p className="text-lg  max-w-sm">
              ICP Hub Kenya is dedicated to providing the advancement of
              blockchain technology within our region and beyond.
            </p>
            <a
              href="#"
              className="bg-[#f6b73c] text-center text-black text-xl  px-6 py-3 w-[50%] rounded-lg hover:bg-[#d9972c] transition"
            >
              Join ICP Kenya Hub
            </a>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/images/Astronaut.svg"
              alt="Astronaut"
              className="max-w-4xl h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <NavBrand />
            <p className="text-md mt-4 text-white/60 ">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <ul className="text-white/80">
              <li className="mb-4">
                <NavLink value="Telegram" href="https://t.me/icphub_KE" />
              </li>
              <li className="mb-4">
                <NavLink value="Twitter" href="https://twitter.com/icphub_KE" />
              </li>
              <li className="mb-4">
                <NavLink
                  value="Instagram"
                  href="https://www.instagram.com/icphub_ke/"
                />
              </li>
              <li className="mb-4">
                <NavLink
                  value="LinkedIn"
                  href="https://www.linkedin.com/company/icphub-ke/"
                />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Education</h4>
            <ul className="">
              <li className="mb-4 text-white/80">
                <NavLink
                  value="Dacade course"
                  href="https://dacade.org/communities/icp"
                />
              </li>
              <li className="mb-4">
                <NavLink
                  value="About"
                  href="https://dacade.org/communities/icp"
                />
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg  font-bold mb-4">Blog</h4>
            <ul className="space-y-2">
              <NavLink value="Our blog posts" href="/blog" />
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
