import React from "react";
import PageTemplate from "../../components/templates/PageTemplate";
import Footer from "../../components/organisms/Footer";
import EducationBanner from "../../components/molecules/Card/EducationBanner/EducationBanner";

const statsData = [
  { value: "20+", label: "Hackathon" },
  { value: "1k+", label: "Developers" },
  { value: "10+", label: "Startups" },
];

const Education = () => {
  return (
    <>
      <PageTemplate title="Home - ICP HUB KE">
        {/* Banner Section */}
        <EducationBanner />
      </PageTemplate>

      <Footer />
    </>
  );
};

export default Education;
