import React from "react";
import { Person } from "@/types/person";
import Image from "next/image";
import { motion } from "framer-motion";

const PersonItem = ({ person }: { person: Person }) => {
  const { name, role, additionalInfo, image } = person;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top relative z-40 aspect-[4/5] w-full overflow-hidden rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
      >
        {/* Image Container - Full Size */}
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Gradient Overlay - Bottom 1/2 */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/0 to-transparent"></div>

        {/* Content - Positioned on Gradient */}
        <div className="absolute bottom-0 left-0 right-0 p-7.5 text-center xl:p-6">
          <h3 className="mb-2 text-xl font-semibold text-white xl:text-, sm:text-2xl">
            {name}
          </h3>
          <p className="mb-3 text-base font-medium text-white/90">
            {role}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default PersonItem;

