"use client";
import { motion } from "motion/react";
import { Highlight, SectionHighlight } from "../ui/section-highlight";

export function AboutUsSection() {
  return (
    <SectionHighlight>
      <motion.h3
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl px-4 md:text-2xl lg:text-3xl  text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <b>Amakkn Pro</b> is a service provided by the
        <Highlight className="text-white dark:text-white ms-2">
          Amakkn platform
        </Highlight>{" "}
        that allows you to create and manage your real estate website to market
        your business and showcase your licensed property listings. This service
        is authorized and regulated by the General Real Estate Authority.
      </motion.h3>
    </SectionHighlight>
  );
}
