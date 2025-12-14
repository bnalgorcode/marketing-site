"use client";
import React from "react";
import workData from "./workData.json";
import WorkItem from "./workItem";
import SectionHeader from "../Common/SectionHeader";

const WorkList = () => {
  return (
    <>
      {/* <!-- ===== Recent Projects Start ===== --> */}
      <section id="work" className="py-8 lg:py-12 xl:py-14">
        <div className="mx-25 max-w-c-1315 px-4 md:px-6 py-4 md:py-10 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "RECENT PROJECTS",
              subtitle: "",
              description: `Explore our latest work`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-8 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-10 xl:mt-10 xl:gap-5">
            {/* <!-- Work item Start --> */}
            {workData.map((work) => (
              <WorkItem work={work} key={work.id} />
            ))}
            {/* <!-- Work item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Recent Projects End ===== --> */}
    </>
  );
};

export default WorkList;
