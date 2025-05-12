"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Mail, MapPin, Phone, Pin } from "lucide-react";

export default function ContactSection() {
  const [msg, setMsg] = useState("");

  return (
    <section
      id="contact"
      className="px-4 py-12 md:px-8 lg:px-16 max-w-7xl mx-auto"
    >
      <div className="px-8 pb-10">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Contact us
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          We'd love to talk about how we can help you.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left: Form */}
        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-6">Fill in the form</h3>
          <form className="space-y-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone Number" type="tel" />
            <div className="space-y-2">
              <Textarea
                placeholder="Message"
                rows={5}
                value={msg}
                onChange={(e) => setMsg(e.target.value.slice(0, 500))}
                maxLength={500}
              />
              <div className="text-sm text-muted-foreground text-right">
                {msg.length}/{500}
              </div>
            </div>
            <Button className="w-full" type="submit">
              Send inquiry
            </Button>
            <p className="text-sm text-center text-muted-foreground mt-2">
              We'll get back to you in 1–2 business days.
            </p>
          </form>
        </div>

        <div className="space-y-8">
          <div className="flex gap-2 border-b-1 pb-8 mt-6">
            <div>
              <MapPin />
            </div>
            <div>
              <h4 className="font-semibold">Our address</h4>
              <p className="text-muted-foreground">
                We're here to help with any questions or code.
              </p>
              <p className="mt-2">
                Kingdom of Saudi Arabia, Riyadh, Al Nakhil,
                <br /> Prince Turki bin Abdulaziz Street, 12385
              </p>
            </div>
          </div>
          <div className="flex gap-2 border-b-1 pb-8">
            <div>
              <Mail />
            </div>
            <div>
              <h4 className="font-semibold">Email us</h4>
              <p className="text-muted-foreground">
                We'll get back to you as soon as possible.
              </p>
              <p className="mt-2">hello@example.com</p>
            </div>
          </div>

          <div className="flex gap-2 ">
            <div>
              <Phone />
            </div>
            <div>
              <h4 className="font-semibold">Call us</h4>
              <p className="text-muted-foreground">Sun–Thu from 8AM to 5PM.</p>
              <p className="mt-2">+966 (05) 0000–0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
