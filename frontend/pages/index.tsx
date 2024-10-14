import React from "react";
import {
  FiFigma,
  FiCode,
  FiBox,
  FiDollarSign,
  FiAirplay,
} from "react-icons/fi";

import ButtonLink from "../components/atoms/Button/ButtonLink";
import LineDivider from "../components/atoms/LineDivider";
import FeatureCard from "../components/molecules/Card/FeatureCard";
import PageSentence from "../components/molecules/PageSentence";
import PricingCard from "../components/molecules/Card/PricingCard";
import ProjectCard from "../components/molecules/Card/ProjectCard";
import SectionSentence from "../components/molecules/SectionSentence";
import LogoList from "../components/organisms/LogoList";
import TestimonialList from "../components/organisms/TestimonialList";
import PageTemplate from "../components/templates/PageTemplate";
import Image from "next/image";
import TeamCard from "../components/molecules/Card/TeamCard";
import CallOut from "../components/organisms/CallOut";
import Footer from "../components/organisms/Footer";
import Link from "next/link";
import TechJourneyStats from "../components/molecules/Card/JourneyStarts";
import GrantApplicationCard from "../components/molecules/Card/GrantApplicationCard/GrantApplicationCard";
import ICPEducationCard from "../components/molecules/Card/ICPEducationCard/ICPEducationCard";
import InnovationIncubatorCard from "../components/molecules/Card/InnovatorCard/InnovatorCard";
import VisionVideoCard from "../components/molecules/Card/VisionCard/VisionCard";

const statsData = [
  { value: "20+", label: "Hackathon" },
  { value: "1k+", label: "Developers" },
  { value: "10+", label: "Startups" },
];

const Home = () => {
  return (
    <>
      <PageTemplate title="Home - ICP HUB KE">
        {/* Banner Section */}
        <section className="relative overflow-hidden w-full h-[80vh] p-[60px_40px] mt-[30px] bg-gradient-to-r from-[#571E1E] to-[#340A0A] rounded-[60px] shadow-xl border-[6px] border-[#400d0b] hero-section">
          <div className="flex justify-between items-center max-w-[1200px] mx-auto">
            <div className="flex-1 text-white pr-10 text-base">
              <h1 className="text-5xl font-bold mb-5">
                Revolutionizing Blockchain Education
              </h1>
              <p className="text-lg mb-8">
                At the forefront of technology is ICP.Hub Kenya dedicated to
                advancing the Internet Computer ecosystem.
              </p>
              <button className="bg-[#e0a040] text-black px-6 py-3 rounded font-bold cursor-pointer transition-colors duration-300 hover:bg-[#d09030]">
                Explore Kenya ICP Hub
              </button>
            </div>
            <div className="flex-1 relative">
              <img
                src="/images/HeroImage.svg"
                alt="ICP Hub Kenya Group"
                className="w-full h-full object-cover rounded-[30px]"
              />
              {/* <Image src={'/images/HeroImage.svg'} width={200} height={100} alt='Grant Application' loading='lazy' /> */}
            </div>
          </div>
        </section>

        {/* Feature List */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TechJourneyStats
              title="We provide easy medium to get started in your tech journey"
              stats={statsData}
            />
            <GrantApplicationCard />
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ICPEducationCard />
            <InnovationIncubatorCard />
          </div>
        </section>

        {/* Vision Card */}
        <VisionVideoCard />

        {/* Our Teams */}
        <section className="bg-[#4b1c1c] border-8 py-12 px-4 sm:px-8 md:px-12 w-full">
          <h2 className="text-white text-4xl font-bold text-center mb-12">
            Our Core Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {/* Team member 1 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/yvonne.png"
                  alt="Yvonne Kagondu"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">
                Yvonne Kagondu
              </h3>
              <p className="text-gray-300">CO-FOUNDER</p>
            </div>

            {/* Team member 2 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/tevin.png"
                  alt="Tevin Isaac"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">Tevin Isaac</h3>
              <p className="text-gray-300">DEVELOPER</p>
            </div>

            {/* Team member 3 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/Mary.png"
                  alt="Mary Usaji"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">Mary Usaji</h3>
              <p className="text-gray-300">PROJECT MANAGER</p>
            </div>
            {/* Team member 4 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/steve.png"
                  alt="Steve KImoi"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">Steve Kimoi</h3>
              <p className="text-gray-300">PROJECT MANAGER</p>
            </div>
            {/* Team member 5 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/bella.png"
                  alt="Bella Chris"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">Bella Chris</h3>
              <p className="text-gray-300">COMMUNITY MANAGER</p>
            </div>
            {/* Team member 6 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/sammy.png"
                  alt="Sammy Fash"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">Sammy Fash</h3>
              <p className="text-gray-300">LEAD DESIGNER</p>
            </div>
            {/* Team member 7 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-4 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/orlah.png"
                  alt="Peace Adekoya"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">
                Peace Adekoya
              </h3>
              <p className="text-gray-300">SOCIAL MEDIA MANAGER</p>
            </div>
            {/* Team member 8 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64   mb-4 overflow-hidden">
                <img
                  src="/images/maic.png"
                  alt="Maic Sebakara"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">
                Maic Sebakara
              </h3>
              <p className="text-gray-300">ICP RWANDA SPOKE</p>
            </div>
            {/* Team member 9 */}
            <div className="flex flex-col items-center">
              <div className="w-64 h-64 border-8 border-[#f8b230] rounded-md mb-4 overflow-hidden">
                <img
                  src="/images/charles.png"
                  alt="Charles Maina"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-lg font-semibold">
                Charles Maina
              </h3>
              <p className="text-gray-300">TECHNICAL WRITER</p>
            </div>
          </div>
        </section>

        <LineDivider />
      </PageTemplate>

      {/* Section with light background */}
      <PageTemplate title="Home - ICP HUB KE" light>
        <section
          data-light-section
          className="flex flex-col gap-16 items-center mt-0"
        >
          <div
            className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12 mt-0 mb-2 sm:mb-0"
            data-aos=""
          >
            <SectionSentence
              lightTitle="ICP has unique features"
              lightBadge="WHAT ICP OFFERS TODAY"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-1 mt-2 sm:mt-0">
            <div data-aos="">
              <ProjectCard
                lightTitle="Dev friendliness"
                lightDescription="Developers can write  cansister smart contracts using popular languages like Rust, TypeScript, or Python and easily incorporate libraries from their respective ecosystem."
                imageSource="/images/DevFriendly2.png"
                imageAlt="ICP Developer languages"
              />
            </div>
            <div data-aos="">
              <ProjectCard
                lightTitle="Interoperability"
                lightDescription="ICP can interface with other smart contract blockchains and traditional (Web 2) internet resources via HTTP requests and signing capabilities. Chain-Key Cryptography has made this possible."
                imageSource="/images/Interopability.png"
                imageAlt="Interopability on ICP"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-5 mt-0">
            <div data-aos="">
              <ProjectCard
                lightTitle="Everything On-Chain"
                lightDescription="ICP allows developers to host their applications fully on-chain (i.e frontend and smart contract), big thanks to the web-serving capability of canister smart contracts on ICP."
                imageSource="/images/Onchain2.png"
                imageAlt="Host everything on chain using ICP"
              />
            </div>
            <div data-aos="">
              <ProjectCard
                lightTitle="Very very cheap!"
                lightDescription="The cost of storing data on-chain with ICP is just $5 USD per GB per year. This is significantly lower as compared to other chains that currently exist."
                imageSource="/images/VeryCheap.png"
                imageAlt="ICP is very cheap as compared to other chains"
              />
            </div>
          </div>
        </section>

        <div data-aos="">
          <CallOut />
        </div>
      </PageTemplate>

      <Footer />
    </>
  );
};

export default Home;
