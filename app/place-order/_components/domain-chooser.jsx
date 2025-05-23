"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { CreditCard, SearchIcon } from "lucide-react";
import { useState } from "react";

const DomainSearchArea = ({ setStep }) => (
  <div className="text-center">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Check Domain Availability
    </h1>
    <p className="text-muted-foreground mt-3 text-xl">
      Enter a domain name below to see if it's available for registration.
    </p>
    <div className="relative mx-auto mt-7 max-w-xl sm:mt-12">
      <div>
        <div className="bg-background relative z-10 flex space-x-3 rounded-lg border p-3 shadow-lg">
          <div className="flex-[1_0_0%]">
            <Label htmlFor="article" className="sr-only">
              Search domain...
            </Label>
            <Input
              name="domain"
              className="h-full"
              id="article"
              placeholder="Search here..."
            />
          </div>
          <div className="flex-[0_0_auto]">
            <Button size={"icon"}>
              <SearchIcon />
            </Button>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <div className="grid gap-4">
            <Card className="p-4 flex flex-row justify-between">
              <CardHeader>
                <CardTitle className="text-start text-xl">
                  example.com
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="text-green-500 font-medium">Available</div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="text-sm text-muted-foreground">
                      $8.99/year
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className={"flex items-center"}>
                <Button variant="outline" size="sm" onClick={() => setStep(1)}>
                  Choose
                </Button>
              </CardContent>
            </Card>
            <Card className="p-4 flex flex-row justify-between">
              <CardHeader>
                <CardTitle className="text-start text-xl">
                  example.net
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 w-full">
                    <div className="text-red-500 font-medium whitespace-nowrap">
                      Not Available
                    </div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="text-sm text-muted-foreground">
                      $14.99/year
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className={"flex items-center"}>
                <Button variant="outline" size="sm" disabled>
                  Choose
                </Button>
              </CardContent>
            </Card>
            <Card className="p-4 flex flex-row justify-between">
              <CardHeader>
                <CardTitle className="text-start text-xl">
                  example.org
                </CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2">
                    <div className="text-green-500 font-medium">Available</div>
                    <Separator orientation="vertical" className="h-4" />
                    <div className="text-sm text-muted-foreground">
                      $8.99/year
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className={"flex items-center"}>
                <Button variant="outline" size="sm" onClick={() => setStep(2)}>
                  Choose
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="absolute end-0 top-0 hidden translate-x-20 -translate-y-12 md:block">
        <svg
          className="h-auto w-16 text-orange-500"
          width={121}
          height={135}
          viewBox="0 0 121 135"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
          <path
            d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
          <path
            d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
            stroke="currentColor"
            strokeWidth={10}
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute start-0 bottom-0 hidden -translate-x-32 translate-y-10 md:block">
        <svg
          className="h-auto w-40 text-cyan-500"
          width={347}
          height={188}
          viewBox="0 0 347 188"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
            stroke="currentColor"
            strokeWidth={7}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default function DomainChooser() {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 ? (
        <>
          <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
              <DomainSearchArea setStep={setStep} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-24 md:px-6 lg:py-32 2xl:max-w-[1400px]">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-6 lg:col-span-2">
                  <DomainSearchArea setStep={setStep} />
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                      <CardDescription>
                        Review your order details.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <Label>Promo Code</Label>
                        <div className="flex gap-2">
                          <Input placeholder="Enter promo code" />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Subtotal</span>
                          <span>${(100).toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>${(1000).toFixed(2)}</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
