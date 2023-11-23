import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroSection() {
   return (
      <section className="max-w-5xl mx-auto">
         <div className="md:text-5xl text-3xl text-center md:leading-[5rem] leading-[3rem]">
            Effortless{" "}
            <span className="font-bold text-primary">Multimedia</span> Asset
            Management for Developers.
         </div>
         <div className="flex flex-col items-center pt-16 pb-20 md:flex-row ">
            <div className="order-2 basis-1/2 md:order-1">
               <p className="text-lg font-medium text-center md:pt-10 md:text-xl lg:text-2xl md:text-left">
                  Welcome to <span className="font-bold">QwikSave</span>. where
                  developers find joy in effortlessly managing, categorizing,
                  and sharing their multimedia assets. Say goodbye to chaos, and
                  embrace a new era of streamlined creativity.
               </p>
               <div className="flex items-center justify-center gap-6 pt-10 md:justify-normal">
                  <Button className="px-5 py-6 text-base">
                     Get Started for free
                  </Button>
                  <Button
                     className="px-8 py-6 text-base font-bold"
                     variant="outline">
                     Talk to us 👋
                  </Button>
               </div>
            </div>

            <div className="flex items-center justify-center order-1 mt-5 md:order-2">
               <Image
                  src="/hero-svg.svg"
                  alt="hero-svg"
                  height={500}
                  width={500}
               />
            </div>
         </div>
      </section>
   );
}
