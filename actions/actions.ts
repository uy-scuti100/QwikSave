"use server"
import useUserStore from "@/store/userStore"
import axios from "axios"
import { redirect } from "next/navigation"



const api = axios.create({
    baseURL: "http://localhost:3500"
})

const authEndPoint = "/users"


const createUser = async function (email: string, password: string, username: string, firstName: string, lastName: string, dob: string, image: string) {
    try {
        const response = await api.post(authEndPoint, { email, password, username, firstName, lastName, dob, image })

        return response.data

    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Couldn't create user");
    }


}
export async function submitForm (formData: FormData) {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const username = ""
    const firstName = ""
    const lastName = ""
    const image = ""
    const dob = ""


    let userData;

    try {
        userData = await createUser(email, password, username, firstName, lastName, image, dob);
    } catch (error) {
        console.error("Error submitting form:", error);
    }

    // Check if userData is defined before attempting to access its properties
    if (userData && userData.id) {
        // Store the user data in local storage
        // Update user data in Zustand store
        useUserStore.getState().setUserData(userData);

        return redirect(`/profile/${userData.id}`);
    }
}



// "use client";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";

// export default function ProfilePage() {
//    const { email } = useParams();
//    const decodedEmail = decodeURIComponent(email);

//    // State to hold the user data
//    const [userData, setUserData] = useState(null);

//    useEffect(() => {
//       // Fetch the stored user data from local storage
//       const storedUserData = localStorage.getItem("userData");

//       // Parse the JSON string into an object
//       const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

//       // Set the user data in the state
//       setUserData(parsedUserData);
//    }, []);

//    return (
//       <div>
//          {userData ? (
//             <>
//                <div>This is the profile page for {decodedEmail}</div>
//                {/* Render other user information as needed */}
//             </>
//          ) : (
//             <div>Loading...</div>
//          )}
//       </div>
//    );
// }
