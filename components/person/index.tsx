"use client";
import React from "react";
import personData from "./personData.json";
import PersonItem from "./personItem";
import SectionHeader from "../Common/SectionHeader";

const Person = () => {
  return (
    <>
      {/* <!-- ===== Meet Team Start ===== --> */}
      <section id="meet-team" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "MEET OUR TEAM",
              subtitle: "",
              description: `Meet the talented individuals who make our success possible. Our diverse team brings together expertise, passion, and dedication to deliver exceptional results.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-8 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-10 lg:grid-cols-3 xl:mt-10 xl:gap-3">
            {/* <!-- Person item Start --> */}
            {personData.map((person) => (
              <PersonItem person={person} key={person.id} />
            ))}
            {/* <!-- Person item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Meet Team End ===== --> */}
    </>
  );
};

export default Person;

