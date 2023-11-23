import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Image from "next/image";

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

         <div className="pt-20">
            {" "}
            <div className="relative text-2xl font-bold capitalize testimonial">
               testimonials from happy users
            </div>
            <div className="flex flex-col items-center justify-center flex-grow my-40 space-y-20 md:space-y-16 lg:space-y-0 md:gap-5 lg:flex-row">
               <Card className="max-w-lg bg-white shadow dark:bg-black/40 h-[600px] w-96">
                  <div className="flex items-center justify-center translate-y-[-50px]">
                     <Image
                        src="/12.jpeg"
                        alt="tewtimonial-image"
                        height={500}
                        width={500}
                        className="rounded-full h-[150px] w-[150px] object-cover "
                     />
                  </div>

                  <div>
                     <h3 className="text-3xl font-semibold text-center">
                        Sarah Thompson
                     </h3>
                     <p className="pt-5 text-center opacity-50">
                        Senior Developer at TechSprint Innovation
                     </p>
                     <blockquote className="px-10 pt-10 italic text-center ">
                        &ldquo;As a Senior Developer, time is my most precious
                        resource. QwikSave has transformed the way I manage
                        assets. Categorization is a breeze, and the URL sharing
                        feature? Genius! My team&#34;s collaboration has never
                        been smoother. Highly recommended for developers aiming
                        to boost efficiency and creativity.&rdquo;
                     </blockquote>
                  </div>
               </Card>
               <Card className="max-w-lg bg-white shadow dark:bg-black/40 h-[600px] w-96">
                  <div className="flex items-center justify-center translate-y-[-50px]">
                     <Image
                        src="/4.jpeg"
                        alt="tewtimonial-image"
                        height={500}
                        width={500}
                        className="rounded-full h-[150px] w-[150px] object-cover"
                     />
                  </div>

                  <div>
                     <h3 className="text-3xl font-semibold text-center">
                        Alex Rodriguez
                     </h3>
                     <p className="pt-5 text-center opacity-50">
                        Lead Frontend Engineer at CodeCraft Solutions
                     </p>
                     <blockquote className="px-10 pt-10 italic text-center ">
                        &ldquo;In the fast-paced world of frontend engineering,
                        QwikSave is my secret weapon. Categorizing assets for
                        projects is a game-changer, and the ability to decide
                        visibility with a simple tag is pure brilliance. Plus,
                        the URL sharing? It&#34;s like a direct line to
                        productivity. A must-have for any developer serious
                        about streamlining workflows.&rdquo;
                     </blockquote>{" "}
                  </div>
               </Card>
               <Card className="max-w-lg bg-white shadow dark:bg-black/40 h-[600px] w-96">
                  <div className="flex items-center justify-center translate-y-[-50px]">
                     <Image
                        src="/6.jpeg"
                        alt="tewtimonial-image"
                        height={500}
                        width={500}
                        className="rounded-full h-[150px] w-[150px] object-cover"
                     />
                  </div>

                  <div>
                     <h3 className="text-3xl font-semibold text-center">
                        Michael Chen
                     </h3>
                     <p className="pt-5 text-center opacity-50">
                        Software Architect at Quantum Solutions
                     </p>
                     <blockquote className="px-10 pt-10 italic text-center ">
                        &ldquo;In my role as a Software Architect, precision and
                        collaboration are paramount. QwikSave has become an
                        indispensable part of our toolkit. The ease of
                        organizing assets and the seamless team collaboration
                        through shared URLs have elevated our development
                        process. Say goodbye to scattered files; say hello to
                        efficiency.&rdquo;
                     </blockquote>
                  </div>
               </Card>
            </div>
         </div>
      </section>
   );
}
