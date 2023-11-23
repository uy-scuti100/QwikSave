import { CardWithForm } from "@/components/customcomponents/Card";
import { InfoProp } from "./layout";
import HeroSection from "@/components/(homepageComponents)/HeroSection";
import Features from "@/components/(homepageComponents)/Features";
import CallToAction from "@/components/(homepageComponents)/CallToAction";

export default function Home() {
   return (
      <main className="min-h-screen px-10 mx-auto mt-10">
         <HeroSection />
         <Features />
         <CallToAction />
      </main>
   );
}
