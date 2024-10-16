import NavBrand from "../../atoms/NavBrand";
import NavLink from "../../atoms/NavLink";
import Text from "../../atoms/Text";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#632020] text-white py-16 px-24 flex flex-col ">
      <div className="container flex flex-col space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-4xl font-bold mb-4">Join The Revolution</h2>
            <p className="mb-4 max-w-sm">
              ICP Hub Kenya is dedicated to providing the advancement of
              blockchain technology within our region and beyond.
            </p>
            <a
              href="#"
              className="bg-[#f6b73c] text-black px-6 py-3 rounded-lg hover:bg-[#d9972c] transition"
            >
              Join ICP Events
            </a>
          </div>
          <div className="mt-12 lg:mt-0">
            <img
              src="/images/Astronaut.svg"
              alt="Astronaut"
              className="max-w-3xl h-auto"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <NavBrand />
            <p className="text-sm mt-4">
              Copyright © {new Date().getFullYear()}
            </p>
          </div>
          <div>
            <h4
              className="text-lg font-bold 
Follow Us
Telegram

Twitter

Instagram

LinkedIn

mb-4"
            >
              Follow Us
            </h4>
            <ul className="space-y-2">
              <NavLink value="Telegram" href="https://t.me/icphub_KE" />
              <NavLink value="Twitter" href="https://twitter.com/icphub_KE" />
              <NavLink
                value="Instagram"
                href="https://www.instagram.com/icphub_ke/"
              />
              <NavLink
                value="LinkedIn"
                href="https://www.linkedin.com/company/icphub-ke/"
              />
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Education</h4>
            <ul className="space-y-2">
              <NavLink
                value="Dacade course"
                href="https://dacade.org/communities/icp"
              />
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
