import React from "react";
import { Button } from "../ui/button";

export default function CallToAction() {
   return (
      <section className="max-w-5xl py-10 mx-auto">
         <div className="flex flex-col items-center justify-center gap-10">
            <h1 className="text-3xl font-medium text-center ">
               Ready to Amplify Your Creativity?
            </h1>
            <Button variant="default" className="px-8 py-6 text-base">
               Get Started Now!
            </Button>
         </div>

         <div className="py-20">
            {" "}
            <div className="text-2xl font-bold capitalize relative testimonial">
               testimonials from users
            </div>
         </div>
      </section>
   );
}
