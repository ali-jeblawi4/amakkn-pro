"use client";
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "../ui/grid";
import { motion, useInView } from "motion/react";

export function ManageProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) return null;
  return (
    <div id="projects" className="relative z-20 py-10  max-w-7xl mx-auto">
      <div className="px-8 pb-10">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Marketing Your Projects in Simple Steps
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We provide you with all the capabilities to manage and market your
          projects effectively through social media and other networks to
          attract more customers.
        </p>
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 max-w-7xl mx-auto">
          {grid.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
              ref={ref}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Grid size={20} />

              <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Unique user experience",
    description:
      "We provide you with a unique and enjoyable user experience that saves you a lot of time and effort.",
  },
  {
    title: "Manage your projects",
    description:
      "Create a list of your projects including all relevant information and residential unit models.",
  },
  {
    title: "Reports and Analytics",
    description:
      "Create reports that include all customers interested in your projects with the ability to communicate with them to follow up on their interest.",
  },
  {
    title: "Marketing your projects",
    description:
      "You can market your projects effectively through social media and other networks to attract more customers to your platform.",
  },
];
