import { ThemeToggle } from "@/provider/mode-toggle";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = React.memo(() => {
   const author = "logan";

   const user = false;
   return (
      <nav className="max-w-5xl mx-auto ">
         <div className="flex items-center justify-between px-5 py-4 border-b ">
            <Link href={"/"} className="text-2xl font-bold tracking-widest">
               {" "}
               Qwik<span className="text-primary">Save</span>
            </Link>
            <div className="flex items-center gap-5 ">
               <ThemeToggle />
               {user ? (
                  <Avatar>
                     <AvatarImage
                        src="/profile.jpeg"
                        className="object-cover"
                     />
                     <AvatarFallback className="uppercase">
                        {author.substring(0, 2).toUpperCase()}
                     </AvatarFallback>
                  </Avatar>
               ) : (
                  <div>
                     <Button>Sign in</Button>
                  </div>
               )}
            </div>
         </div>
      </nav>
   );
});

export default Navbar;
