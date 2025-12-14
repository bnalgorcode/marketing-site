"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Services Start ===== --> */}
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-25 max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR SERVICES",
              subtitle: "",
              description: `We provide comprehensive solutions tailored to your business needs. Our expert team delivers high-quality services to help you achieve your goals and drive success.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Services item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Services item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Services End ===== --> */}
    </>
  );
};

export default Feature;
