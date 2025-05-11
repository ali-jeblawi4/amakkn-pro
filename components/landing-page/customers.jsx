"use client";
import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "../ui/grid";

export function ManageCustomersSection() {
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
          Better management of your customers
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We offer you all the features to manage your customers from adding,
          deleting and modifying in addition to following up on your customers'
          interests and communicating with them.
        </p>
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 md:gap-4 max-w-7xl mx-auto">
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
    title: "Reports and Analytics",
    description:
      "Create reports that include all customers interested in your real estate ADs including their information, comments, and degree of seriousness.",
  },
  {
    title: "Communicate with customers",
    description:
      "You can communicate with your customers via WhatsApp or email to follow up on their interests in your real estate ADs.",
  },
  {
    title: "Manage your customers' data",
    description:
      "Create a list of your customers from brokers, owners and researchers with the ability to add their real estate interests.",
  },
];
