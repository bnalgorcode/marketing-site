import React from "react";
import { Work } from "@/types/work";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkItem = ({ work }: { work: Work }) => {
  const { title, description, image } = work;

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
        className="animate_top z-40 overflow-hidden rounded-lg border border-white bg-white shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
      >
        {/* Image Container - Larger Size */}
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content - Below Image */}
        <div className="p-8 text-center xl:p-10">
          <h3 className="mb-3 text-2xl font-semibold text-black dark:text-white xl:text-3xl">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-waterloo dark:text-manatee xl:text-lg">
            {description}
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default WorkItem;

