// "use client";
// import { motion, useInView } from "motion/react";
// import React, { useEffect, useRef, useState } from "react";
// import { Grid } from "../ui/grid";

// export function ManageCustomersSection() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   // const [hasMounted, setHasMounted] = useState(false);

//   // useEffect(() => {
//   //   setHasMounted(true);
//   // }, []);

//   // if (!hasMounted) return null;
//   return (
//     <div id="customers" className="relative z-20 py-10  max-w-7xl mx-auto">
//       <div className="px-8 pb-10">
//         <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
//           Better management of your customers
//         </h4>

//         <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
//           We offer you all the features to manage your customers from adding,
//           deleting and modifying in addition to following up on your customers'
//           interests and communicating with them.
//         </p>
//       </div>
//       <div className="relative ">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-10 md:gap-4 max-w-7xl mx-auto">
//           {grid.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
//               ref={ref}
//               initial={{ opacity: 0, x: 100 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               <Grid size={20} />

//               <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
//                 {feature.title}
//               </p>
//               <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
//                 {feature.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// const grid = [
//   {
//     title: "Reports and Analytics",
//     description:
//       "Create reports that include all customers interested in your real estate ADs including their information, comments, and degree of seriousness.",
//   },
//   {
//     title: "Communicate with customers",
//     description:
//       "You can communicate with your customers via WhatsApp or email to follow up on their interests in your real estate ADs.",
//   },
//   {
//     title: "Manage your customers' data",
//     description:
//       "Create a list of your customers from brokers, owners and researchers with the ability to add their real estate interests.",
//   },
// ];

"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function ManageCustomersSection() {
  return (
    <div id="customers" className="relative z-20 py-10  max-w-7xl mx-auto">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Reports and Analytics
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              Create reports that include all customers interested in your real
              estate ADs including their information, comments, and degree of
              seriousness.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-black">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Communicate with customers
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            You can communicate with your customers via WhatsApp or email to
            follow up on their interests in your real estate ADs.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Manage your customers' data
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Create a list of your customers from brokers, owners and
              researchers with the ability to add their real estate interests.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
