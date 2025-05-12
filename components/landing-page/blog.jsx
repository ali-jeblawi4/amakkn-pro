"use client";

import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Grid } from "../ui/grid";
import { WobbleCard } from "../ui/wobble-card";

export function ManageBlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const [hasMounted, setHasMounted] = useState(false);

  // useEffect(() => {
  //   setHasMounted(true);
  // }, []);

  // if (!hasMounted) return null;
  return (
    <div id="blog" className="relative z-20 py-10  max-w-7xl mx-auto">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-black"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Marketing your articles
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              You can market your articles effectively through social media and
              other networks to attract more customers to your platform.
            </p>
          </div>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] !bg-purple-900">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Create new articles
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            We provide you with the ability to create your articles through a
            simplified interface by dragging and dropping.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="!bg-green-600 col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Blog management
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              We offer you all the features that make it easy for you to manage
              your blog in an easy and enjoyable way.
            </p>
          </div>
        </WobbleCard>
      </div>
    </div>
  );
}
