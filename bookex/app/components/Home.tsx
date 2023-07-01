"use client";
import React,{ useEffect, useState } from 'react'
import Image from 'next/image'
import Header from './Header'
import ProductFeed from './ProductFeed'
import channelImage from "./bgb.png";

import Banner from './Banner'
function Home() {
  return (
    <div>
      <Header/>
      <div className="relative">
          <Image className="w-full h-full object-contain sm:max-h-96" src={channelImage}  alt="Description"   />
      </div>
      {/* <Banner/> */}
      <ProductFeed/>
    </div>
  )
}

export default Home



// import React, { useState, ChangeEvent, FormEvent } from "react";
// import Image from "next/image";
// import Header from "./Header";
// import channelImage from "./bgb.png";

// interface FormData {
//     name: string;
//     email: string;
// }

// const Home: React.FC = () => {
//     const [formData, setFormData] = useState<FormData>({
//         name: "",
//         email: "",
//     });


//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         // Send form data to the server
//         fetch("/api/submit-form", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(formData),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Form submission successful:", data);
//                 // Handle success response as needed
//             })
//             .catch((error) => {
//                 console.error("Error:", error);
//                 // Handle error response as needed
//             });
//     };

//     return (
//         <div>
//             <Header />
//             <div className="relative">
//                 <Image
//                     className="w-full h-full object-contain sm:max-h-96"
//                     src={channelImage}
//                     alt="Description"
//                 />
//             </div>
//             {/* <Banner/> */}
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Name"
//                 />
//                 <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Email"
//                 />
//                 <button
//             className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//             type="submit"
//         >
//             Sign In
//         </button>
//             </form>
//         </div>
//     );
// };

// export default Home;