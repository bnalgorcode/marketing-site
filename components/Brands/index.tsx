"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-25 max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap justify-between">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
