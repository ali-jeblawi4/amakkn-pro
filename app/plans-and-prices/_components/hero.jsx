"use client";

import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden py-14">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:14px_24px]"></div>
      <div className="relative container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="grid gap-6 pt-12 pb-8 md:pt-16 md:pb-12 lg:grid-cols-2 lg:pt-20 lg:pb-16">
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="from-foreground to-foreground/60 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
                Options that suit your business
              </h1>
              <p className="text-muted-foreground mb-8 max-w-[85%] text-xl">
                Choose the plan that suits you and enjoy a unique experience
                with Amakkn Pro.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                data-slot="button"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4"
                href="#"
              >
                Explore plans
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right ml-2 h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="perspective relative h-[400px] w-full md:h-[500px]">
              <div className="rotateX-[60deg] rotateZ-[45deg] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="transform-style preserve-3d h-64 w-64 rounded-lg border border-indigo-500/30 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 shadow-xl">
                  <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:12px_12px]"></div>
                  <div className="transform-style preserve-3d absolute -top-10 left-8 h-16 w-16">
                    <div className="absolute inset-0 translate-z-8 transform bg-blue-500/80 shadow-lg"></div>
                    <div className="rotateY-90 absolute inset-0 translate-z-8 transform bg-blue-400/80 shadow-lg"></div>
                    <div className="rotateX-90 absolute inset-0 translate-z-8 transform bg-blue-600/80 shadow-lg"></div>
                  </div>
                  <div className="transform-style preserve-3d absolute top-8 right-8 h-12 w-12">
                    <div className="absolute inset-0 translate-z-6 transform bg-purple-500/80 shadow-lg"></div>
                    <div className="rotateY-90 absolute inset-0 translate-z-6 transform bg-purple-400/80 shadow-lg"></div>
                    <div className="rotateX-90 absolute inset-0 translate-z-6 transform bg-purple-600/80 shadow-lg"></div>
                  </div>
                  <div className="transform-style preserve-3d absolute right-14 bottom-12 h-14 w-14">
                    <div className="absolute inset-0 translate-z-7 transform bg-emerald-500/80 shadow-lg"></div>
                    <div className="rotateY-90 absolute inset-0 translate-z-7 transform bg-emerald-400/80 shadow-lg"></div>
                    <div className="rotateX-90 absolute inset-0 translate-z-7 transform bg-emerald-600/80 shadow-lg"></div>
                  </div>
                  <div className="transform-style preserve-3d absolute bottom-10 left-10 h-10 w-10">
                    <div className="absolute inset-0 translate-z-5 transform bg-amber-500/80 shadow-lg"></div>
                    <div className="rotateY-90 absolute inset-0 translate-z-5 transform bg-amber-400/80 shadow-lg"></div>
                    <div className="rotateX-90 absolute inset-0 translate-z-5 transform bg-amber-600/80 shadow-lg"></div>
                  </div>
                </div>
                <div className="animate-bounce-slow absolute -top-16 -left-16 h-8 w-8 rounded-full bg-pink-400 shadow-lg"></div>
                <div className="animate-bounce-slow absolute -top-12 right-0 h-6 w-6 rounded-full bg-yellow-400 shadow-lg delay-200"></div>
                <div className="animate-bounce-slow absolute -right-8 -bottom-8 h-10 w-10 rounded-full bg-blue-400 shadow-lg delay-300"></div>
                <div className="animate-bounce-slow absolute -bottom-12 left-4 h-7 w-7 rounded-full bg-green-400 shadow-lg delay-100"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 translate-z-24 transform">
                  <div className="bg-background flex h-16 w-16 items-center justify-center rounded-2xl shadow-xl">
                    <Image
                      src={"/amakknLogo.png"}
                      width={40}
                      height={40}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[60%] left-1/2 h-12 w-64 -translate-x-1/2 transform rounded-full bg-black/10 blur-xl"></div>
              <div className="border-primary/20 animate-spin-slow absolute top-1/4 right-8 h-12 w-12 rounded-full border-4"></div>
              <div className="animate-spin-slow absolute bottom-1/4 left-8 h-16 w-16 rounded-full border-4 border-dashed border-amber-500/20 delay-300"></div>
              <div className="bg-primary/5 absolute top-1/2 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 transform rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
