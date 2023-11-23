import Image from "next/image";
import React from "react";

export default function Features() {
   return (
      <section className="max-w-5xl pt-20 mx-auto">
         <h1 className="md:text-4xl text-3xl md:leading-[3rem] leading-[2.5rem]">
            <p className="text-center">
               Unlock Unlimited{" "}
               <span className="text-primary">Creativity </span>{" "}
               <br className="md:hidden" />
               And <br className="hidden md:block" /> Explore The Core Features
               That Define Qwiksave
            </p>
         </h1>
         <p className="py-10 text-lg font-medium text-center opacity-95">
            Revolutionize Your Workflow with Seamless Asset Management and
            Sharing.
         </p>

         {/* list of features */}
         <div className="pt-16">
            <div className="justify-center gap-10 py-10 md:flex">
               <div className="basis-1/2">
                  <h1 className="pb-5 text-3xl font-bold text-center md:text-left">
                     Effortless Organization for Swift Retrieval
                  </h1>
                  <article className="pt-5 text-lg">
                     <blockquote>
                        Easily categorize your assets so that when the need
                        arises, grabbing a bunch for your projects is as simple
                        as a few clicks. No more searching; your assets are
                        neatly organized and ready to roll.
                     </blockquote>
                  </article>
               </div>

               <div className="md:translate-y-[-50px] flex justify-center items-center md:block">
                  <Image
                     src={"/folder.svg"}
                     alt="feature-img"
                     height={400}
                     width={400}
                  />
               </div>
            </div>
         </div>

         {/* 2 */}
         <div className="pt-16">
            <div className="justify-center gap-5 py-10 md:flex">
               <div className="order-2 basis-1/2">
                  <h1 className="pb-5 text-3xl font-bold text-center md:text-left">
                     Total Control Over Visibility
                  </h1>
                  <article className="pt-5 text-lg">
                     <blockquote>
                       &ldquo;Decide the fate of your creations. With a quick tag,
                        choose whether your images should be shared with the
                        world. Want your work to shine on the Discover page?
                        It&#39;s your call, just a tag away.&rdquo;
                     </blockquote>
                  </article>
               </div>

               <div className="md:translate-y-[-50px] flex justify-center items-center md:block">
                  <Image
                     src={"/secret.svg"}
                     alt="feature-img"
                     height={400}
                     width={400}
                  />
               </div>
            </div>
         </div>
         {/* 3 */}
         <div className="pt-16">
            <div className="justify-center gap-5 py-10 md:flex">
               <div className="basis-1/2">
                  <h1 className="pb-5 text-3xl font-bold text-center md:text-left">
                     Seamless Team Collaboration
                  </h1>
                  <article className="pt-5 text-lg">
                     <blockquote>
                        Sharing assets with your team has never been smoother.
                        Send a link to specific categories containing the assets
                        they need. No more cumbersome file transfers; streamline
                        collaboration effortlessly.
                     </blockquote>
                  </article>
               </div>

               <div className="md:translate-y-[-50px] flex justify-center items-center md:block">
                  <Image
                     src={"/colaborate.svg"}
                     alt="feature-img"
                     height={400}
                     width={400}
                  />
               </div>
            </div>
         </div>
         {/* 4 */}
         <div className="pt-16">
            <div className="justify-center gap-5 py-10 md:flex">
               <div className="order-2 basis-1/2">
                  <h1 className="pb-5 text-3xl font-bold text-center md:text-left">
                     Tagging Magic
                  </h1>
                  <article className="pt-5 text-lg">
                     <blockquote>
                        Master the art of tagging to pinpoint exactly what you
                        need. A well-tagged asset library means less time
                        searching and more time creating. Your tags, your rules.
                     </blockquote>
                  </article>
               </div>

               <div className="md:translate-y-[-50px] flex justify-center items-center md:block">
                  <Image
                     src={"/tagging.svg"}
                     alt="feature-img"
                     height={400}
                     width={400}
                  />
               </div>
            </div>
         </div>
         {/* 5 */}
         <div className="pt-16">
            <div className="justify-center gap-5 py-10 md:flex">
               <div className="basis-1/2">
                  <h1 className="pb-5 text-3xl font-bold text-center md:text-left">
                     Discover and Be Discovered
                  </h1>
                  <article className="pt-5 text-lg">
                     <blockquote>
                        Showcase your best work on the Discover page. Let the
                        world see your creativity. It&#39;s not just about finding;
                        it&#39;s about being found.
                     </blockquote>
                  </article>
               </div>

               <div className="md:translate-y-[-50px] flex justify-center items-center md:block">
                  <Image
                     src={"/progress.svg"}
                     alt="feature-img"
                     height={400}
                     width={400}
                  />
               </div>
            </div>
         </div>
         {/* 6 */}
         <div className="pt-16">
            <div className="justify-center gap-5 py-10 md:flex">
               <div className="order-2 basis-1/2">
                  <h1 className="pb-5 text-3xl font-bold text-center md:text-left">
                     Instant Access, Anytime, Anywhere
                  </h1>
                  <article className="pt-5 text-lg">
                     <blockquote>
                        Enjoy the freedom of accessing your categorized assets
                        from anywhere. Need that perfect image for a late-night
                        coding session or an early morning brainstorm? It&#39;s at
                        your fingertips, no matter where you are.
                     </blockquote>
                  </article>
               </div>

               <div className="md:translate-y-[-50px] flex justify-center items-center md:block">
                  <Image
                     src={"/acess.svg"}
                     alt="feature-img"
                     height={400}
                     width={400}
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
