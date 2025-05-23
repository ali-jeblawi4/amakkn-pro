"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Grid } from "../ui/grid";
import { SAR } from "../shared/sar";

const planFeatures = [
  {
    type: "Basic Features",
    features: [
      {
        name: "Technical support priority",
        pro: false,
        proPlus: true,
      },
      {
        name: "Ability to add the company logo to the AD's images",
        pro: false,
        proPlus: true,
      },
      {
        name: "Ability to add the unified contact number 9200 or 800",
        pro: true,
        proPlus: true,
      },
      {
        name: "Ability to add the location to the map on the company page",
        pro: true,
        proPlus: true,
      },
      {
        name: "Ability to add videos to the real estate AD",
        pro: true,
        proPlus: true,
      },
      {
        name: "Printable and shareable image of real estate listing details",
        pro: true,
        proPlus: true,
      },
      {
        name: "Ability to feature only one real estate AD",
        pro: true,
        proPlus: true,
      },
    ],
  },
  {
    type: "SaaS Service",
    features: [
      {
        name: "Website (example.amakkn.com)",
        pro: true,
        proPlus: true,
      },
      {
        name: "Website with independent domain (example.com)",
        pro: true,
        proPlus: true,
      },
      {
        name: "Real estate ADs map",
        pro: true,
        proPlus: true,
      },
      {
        name: "Projects and interests",
        pro: false,
        proPlus: true,
      },
      {
        name: "Blog",
        pro: false,
        proPlus: true,
      },
      {
        name: "Show 𝕏 account on landing page",
        pro: false,
        proPlus: true,
      },
      {
        name: "Link with WhatsApp (experimental)",
        pro: false,
        proPlus: true,
      },
      {
        name: "Link with Google Tag Manager",
        pro: false,
        proPlus: true,
      },
      {
        name: "Link with Google Analytics",
        pro: false,
        proPlus: true,
      },
    ],
  },
];

export default function PricingSection({ withoutHeader }) {
  const [annual, setAnnual] = useState(false);
  const router = useRouter();

  return (
    <>
      <div id="pricing" className="relative z-20 py-10  max-w-7xl mx-auto">
        {!withoutHeader && (
          <div className="px-8 pb-10">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
              Pricing
            </h4>

            <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
              Options that suit your business
            </p>
          </div>
        )}
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-5">
          <div className="flex justify-center items-center">
            <Label htmlFor="payment-schedule" className="me-3">
              Monthly
            </Label>
            <Switch
              id="payment-schedule"
              checked={annual}
              onCheckedChange={() => setAnnual(!annual)}
            />
            <Label htmlFor="payment-schedule" className="relative ms-3">
              Annual
              <span className="absolute -top-10 start-auto -end-28">
                <span className="flex items-center">
                  <svg
                    className="w-14 h-8 -me-6"
                    width={45}
                    height={25}
                    viewBox="0 0 45 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z"
                      fill="currentColor"
                      className="text-muted-foreground"
                    />
                  </svg>
                  <Badge className="mt-3 uppercase">Save up to 10%</Badge>
                </span>
              </span>
            </Label>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6 lg:items-center">
            <div></div>
            <Card className="flex flex-col relative overflow-hidden">
              <Grid size={20} />
              <CardHeader className="text-center pb-2">
                <CardTitle className="mb-7">Pro Business</CardTitle>
                <span className="font-bold text-5xl aligned-text justify-center">
                  <SAR width={34} top={"6px"} />
                  <span>{!annual ? "599" : "3,999"}</span>
                </span>
              </CardHeader>
              <CardDescription className="text-center">
                Suitable for medium real estate companies
              </CardDescription>
              <CardContent className="flex-1">
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">
                      Ability to add 300 ADs
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">
                      Ability to add an agent
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">
                      Customer management system (2,000 customers)
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">3 templates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    router.push(
                      withoutHeader ? "/place-order" : "/plans-and-prices"
                    )
                  }
                  className="w-full cursor-pointer transform rounded-lg bg-white border-1 border-black px-2 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 hover:text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Start free now
                </Button>
              </CardFooter>
            </Card>
            <Card className="border-primary flex flex-col relative overflow-hidden">
              <Grid size={20} />

              <CardHeader className="text-center pb-2">
                <Badge className="uppercase w-max self-center mb-3">
                  Most popular
                </Badge>
                <CardTitle className="!mb-7">Pro Business +</CardTitle>

                <span className="font-bold text-5xl aligned-text justify-center">
                  <SAR width={34} top={"6px"} />
                  <span>{!annual ? "899" : "6,999"}</span>
                </span>
              </CardHeader>
              <CardDescription className="text-center w-11/12 mx-auto">
                Suitable for large real estate companies
              </CardDescription>
              <CardContent className="flex-1">
                <ul className="mt-7 space-y-2.5 text-sm">
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">
                      Ability to add 500 ADs
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">
                      Ability to add 3 agents
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">
                      Customer management system (2,000 customers)
                    </span>
                  </li>
                  <li className="flex space-x-2">
                    <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                    <span className="text-muted-foreground">10 templates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() =>
                    router.push(
                      withoutHeader ? "/place-order" : "/plans-and-prices"
                    )
                  }
                  className="w-full cursor-pointer transform rounded-lg  px-2 py-2 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  Start free now
                </Button>
              </CardFooter>
            </Card>
            <div></div>
          </div>
          <div className="mt-20 lg:mt-32">
            <div className="lg:text-center mb-10 lg:mb-20">
              <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Compare plans
              </h4>
              <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                Detailed features of the plans
              </p>
            </div>
            <Table className="hidden lg:table">
              <TableHeader>
                <TableRow className="bg-gray-100 hover:bg-gray-200">
                  <TableHead className="w-3/12 text-primary">Plans</TableHead>
                  <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                    Pro Business
                  </TableHead>
                  <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                    Pro Business +
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planFeatures.map((featureType) => (
                  <React.Fragment key={featureType.type}>
                    <TableRow className="bg-gray-200/50">
                      <TableCell colSpan={5} className="font-bold">
                        {featureType.type}
                      </TableCell>
                    </TableRow>
                    {featureType.features.map((feature) => (
                      <TableRow
                        key={feature.name}
                        className="text-muted-foreground"
                      >
                        <TableCell>{feature.name}</TableCell>
                        <TableCell>
                          <div className="mx-auto w-min">
                            {feature.pro ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="mx-auto w-min">
                            {feature.proPlus ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>

            <div className="space-y-24 lg:hidden">
              <section>
                <div className="mb-4">
                  <h4 className="text-xl font-medium">Pro Business</h4>
                </div>
                <Table>
                  {planFeatures.map((featureType) => (
                    <React.Fragment key={featureType.type}>
                      <TableRow className="bg-gray-200 hover:bg-gray-200">
                        <TableCell
                          colSpan={2}
                          className="w-10/12 text-primary font-bold"
                        >
                          {featureType.type}
                        </TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow
                          className="text-muted-foreground"
                          key={feature.name}
                        >
                          <TableCell className="w-11/12">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {feature.enterprise ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </Table>
              </section>
              <section>
                <div className="mb-4">
                  <h4 className="text-xl font-medium">Pro Business +</h4>
                </div>
                <Table>
                  {planFeatures.map((featureType) => (
                    <React.Fragment key={featureType.type}>
                      <TableRow className="bg-gray-200 hover:bg-gray-200">
                        <TableCell
                          colSpan={2}
                          className="w-10/12 text-primary font-bold"
                        >
                          {featureType.type}
                        </TableCell>
                      </TableRow>
                      {featureType.features.map((feature) => (
                        <TableRow
                          className="text-muted-foreground"
                          key={feature.name}
                        >
                          <TableCell className="w-11/12">
                            {feature.name}
                          </TableCell>
                          <TableCell className="text-right">
                            {feature.proPlus ? (
                              <CheckIcon className="h-5 w-5" />
                            ) : (
                              <MinusIcon className="h-5 w-5" />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </Table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
