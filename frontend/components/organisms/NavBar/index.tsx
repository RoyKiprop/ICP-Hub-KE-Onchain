import React, { useEffect, useState } from "react";
import NavBrand from "../../atoms/NavBrand";
import NavLink from "../../atoms/NavLink";
import ButtonLink from "../../atoms/Button/ButtonLink";
import Container from "../../templates/Container";
import { FiMenu, FiX } from "react-icons/fi";
import useMobileDeviceDetection from "../../../hooks/useMobileDetection";
import useGetBrowserName from "../../../hooks/useGetBrowserName";
import GradientButton from "../../atoms/GradientButton/GradientButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLightSectionVisible, setIsLightSectionVisible] = useState(false);
  const browserName = useGetBrowserName();
  const isMobile = useMobileDeviceDetection();

  const handleTelegramRedirect = () => {
    window.open('https://t.me/icphub_KE', '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const lightSectionElement = document.querySelector("[data-light-section]");

    if (lightSectionElement) {
      const lightSectionTop = lightSectionElement.getBoundingClientRect().top;
      const lightSectionBottom = lightSectionElement.getBoundingClientRect().bottom;

      setIsLightSectionVisible(
        (lightSectionTop >= 0 && lightSectionTop <= window.innerHeight) ||
        (lightSectionBottom >= 0 && lightSectionBottom <= window.innerHeight)
      );
    }

    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.body.classList.toggle("h-screen", isOpen);
    document.body.classList.toggle("overflow-y-hidden", isOpen);
  }, [isOpen]);

  return (
    <>
      {!isScrolled && (
        <nav
          className={`pt-8 xl:px-[150px] w-full top-0 left-0 z-30 ${
            isScrolled ? "fixed" : "absolute"
          }`}
        >
          <Container>
            <div
              className={`px-6 py-4 w-full rounded-md ${
                isScrolled || isOpen ? "" : "lg:px-0"
              }`}
            >
              <div className="flex flex-col lg:flex-row w-full place-content-between lg:place-items-center">
                <NavBrand />
                
                <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                  <div
                    className={`text-white text-2xl ${
                      isMobile ? "cursor-default" : "cursor-pointer"
                    }`}
                  >
                    {isOpen ? <FiX /> : <FiMenu />}
                  </div>
                </div>

                <div className={`${isOpen ? "" : "hidden"} lg:flex lg:items-center lg:space-x-8`}>
                  <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-5 lg:space-y-0 mt-8 lg:mt-0">
                    <NavLink href="/education" value="Education" canActive={true} />
                    <NavLink href="/events" value="Events" canActive={true} />
                    <NavLink href="/blog" value="Blog" canActive={true} />
                    <NavLink href="/about" value="About" canActive={true} />
                    <NavLink href="/partners" value="Partners" canActive={true} />
                  </div>

                  <div className="mt-5 lg:mt-0">
                  <GradientButton onClick={handleTelegramRedirect}>
                    <span className="px-4">Join Us</span>
                  </GradientButton>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </nav>
      )}
    </>
  );
};

export default NavBar;