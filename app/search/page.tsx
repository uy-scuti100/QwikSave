import "./search.css";
import { Mic, Search } from "lucide-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
export default function SearchPage() {
   return (
      <section className="max-w-5xl px-5 pt-8 mx-auto ">
         <div className="flex items-center px-5 border rounded-md border-input">
            <Search className="w-4 h-4 opacity-75 cursor-pointer" />
            <input
               className="w-full h-10 px-5 bg-transparent outline-none opacity-75 placeholder:text-sm placeholder:opacity-75"
               placeholder="search"
            />
            <Mic className="w-4 h-4 opacity-75 cursor-pointer" />
         </div>

         <div className="grid gap-3 mt-8 grid-container">
            <div
               style={{ gridArea: "a" }}
               className="p-3 rounded-md grid-one"></div>
            <div
               style={{ gridArea: "b" }}
               className="p-3 rounded-md grid-two"></div>
            <div
               style={{ gridArea: "c" }}
               className="p-3 rounded-md grid-three"></div>
            <div
               style={{ gridArea: "d" }}
               className="p-3 rounded-md grid-four"></div>
            <div
               style={{ gridArea: "e" }}
               className="p-3 rounded-md grid-five"></div>
            <div
               style={{ gridArea: "f" }}
               className="p-3 rounded-md grid-six"></div>
         </div>
      </section>
   );
}
