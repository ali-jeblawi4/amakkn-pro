"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [active, setActive] = useState(null);
  const router = useRouter();
  return (
    <div
      className={
        "fixed top-2 inset-x-0 max-w-7xl  mx-auto z-50 flex items-center justify-between"
      }
    >
      <Image src={"/amakkn-logo-en.png"} width={120} height={60} alt="logo" />
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="About us"
          href="/#about"
        />
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              setActive={setActive}
              title="Build your website"
              href="/#website"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="We enable you to build your website in one minute."
            />
            <ProductItem
              title="Manage your projects"
              href="/#projects"
              setActive={setActive}
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="We provide you with all the capabilities to manage your projects."
            />
            <ProductItem
              title="Customer management"
              href="/#customers"
              setActive={setActive}
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Better management of your customers."
            />
            <ProductItem
              title="Manage your blog"
              href="/#blog"
              setActive={setActive}
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Build your blog in easy and simple steps."
            />
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Pricing"
          href="/#pricing"
        />
        <MenuItem
          setActive={setActive}
          active={active}
          item="Contact us"
          href="/#contact"
        />
      </Menu>
      <button
        onClick={() => router.push("/plans-and-prices")}
        className="cursor-pointer w-40 transform rounded-lg bg-black px-2 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        Start Free Now
      </button>
    </div>
  );
}
