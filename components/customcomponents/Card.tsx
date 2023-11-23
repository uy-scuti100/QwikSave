"use client";
import * as React from "react";

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
import { useToast } from "@/components/ui/use-toast";
import { submitForm } from "@/actions/actions";
import { useRouter } from "next/navigation";
export function CardWithForm() {
   const router = useRouter();
   const { toast } = useToast();
   async function showToast() {
      // console.log("good/");
      toast({
         title: "Account Created 🎉✅",
         description: "You have successfully created an account",
      });
   }

   return (
      <Card className="w-[350px]">
         <CardHeader>
            <CardTitle className="text-center">Create A User Profile</CardTitle>
            <CardDescription className="text-center">
               create your profile to open an acount
            </CardDescription>
         </CardHeader>
         <CardContent>
            <form action={submitForm}>
               <div className="grid items-center w-full gap-4">
                  <div className="flex flex-col space-y-1.5">
                     <Label htmlFor="email">Email</Label>
                     <Input
                        id="email"
                        name="email"
                        placeholder="johndoe@example.com"
                        required
                     />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                     <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">Password</Label>
                        <Input
                           id="password"
                           name="password"
                           type="password"
                           placeholder="********"
                           required
                        />
                     </div>
                  </div>
               </div>
               <div className="flex justify-between mt-4">
                  <Button className="w-full" type="submit">
                     Sign Up
                  </Button>
               </div>
            </form>
         </CardContent>
      </Card>
   );
}
