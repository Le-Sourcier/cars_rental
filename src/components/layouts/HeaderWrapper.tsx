// components/layouts/HeaderWrapper.tsx
"use client";

import { useHeaderSection } from "../contexts/HeaderSectionContext";

export default function HeaderWrapper() {
  const { section } = useHeaderSection();

  if (!section) return null;

  return <>{section}</>;
}

// import React from "react";
// import Image from "next/image";
// import image from "@/components/utils/images";
// function HeaderWrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <div>
//       <section className="w-full h-auto bg-blue-500 py-20 px-4">
//         <div className="max-w-screen-xl px-4 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
//           {/* Texte */}
//           <div className="flex-1 text-white space-y-6">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//               Révolutionnez votre recherche automobile
//               <br />
//               <span className="text-yellow-300">avec notre IA experte</span>
//             </h1>
//             <p className="text-lg max-w-md">
//               {
//                 "Découvrez une nouvelle façon d'acheter votre véhicule. Notre technologie analyse en temps réel plus de 2 000 offres pour vous garantir jusqu'à 40% d'économies sur votre prochain achat."
//               }
//             </p>
//             {/* booking button */}
//             <div className=" cursor-pointer border border-red-500 hover:bg-red-500 transition-all duration-300 w-max px-2 py-1 rounded-[7px]">
//               Book Now
//             </div>
//           </div>

//           {/* Image */}
//           <div className="flex-1 relative w-full max-w-[600px] h-[400px]">
//             <Image
//               src={image.VolVo_3D}
//               alt="Voiture 3D Volvo"
//               fill
//               priority
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </section>
//       <div className="max-w-screen-xl mx-auto px-4"> {children}</div>
//     </div>
//   );
// }

// export default HeaderWrapper;
