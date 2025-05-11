"use client";

import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "../ui/grid";

export function ManageBlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) return null;
  return (
    <div className="relative z-20 py-10  max-w-7xl mx-auto">
      <div className="px-8 pb-10">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Build your blog in easy and simple steps
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We offer you all the possibilities to write your articles and market
          them effectively through social media and other networks to attract
          more readers.
        </p>
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-4 max-w-7xl mx-auto">
          {grid.map((feature, index) => (
            <motion.div
              key={feature.title + index}
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
    title: "Marketing your articles",
    description:
      "You can market your articles effectively through social media and other networks to attract more customers to your platform.",
  },
  {
    title: "Create new articles",
    description:
      "We provide you with the ability to create your articles through a simplified interface by dragging and dropping.",
  },
  {
    title: "Blog management",
    description:
      "We offer you all the features that make it easy for you to manage your blog in an easy and enjoyable way.",
  },
];
