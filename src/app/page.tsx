"use client";
import { useHeaderSection } from "@/components/contexts/HeaderSectionContext";
import React from "react";
import Image from "next/image";
import image from "@/components/utils/images";
import Card from "@/components/ui/card";

function HomePage() {
  const { setSection } = useHeaderSection();

  React.useEffect(() => {
    setSection(
      <section className="w-full h-screen bg-blue-500 py-20 px-4">
        <div className="max-w-screen-xl px-4 mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Texte */}
          <div className="flex-1 text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Révolutionnez votre recherche automobile
              <br />
              <span className="text-yellow-300">avec notre IA experte</span>
            </h1>
            <p className="text-lg max-w-md">
              {
                "Découvrez une nouvelle façon d'acheter votre véhicule. Notre technologie analyse en temps réel plus de 2 000 offres pour vous garantir jusqu'à 40% d'économies sur votre prochain achat."
              }
            </p>
            <div className=" flex flex-wrap items-center gap-4">
              <div className="cursor-pointer borde bg-red-500 hover:bg-red-500 transition-all duration-300 w-max px-3 py-2 rounded-[7px]">
                {"DEMMARER L'ANALYSE"}
              </div>
              <div className="cursor-pointer bg-[var(--primary-900)] transition-all duration-300 w-max px-3 py-2 rounded-[7px]">
                EN SAVOIR PLUS
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full max-w-[600px h-400px]">
            <Image
              src={image.Voiture_3d}
              alt="Voiture 3D Volvo"
              // fill
              width={1000}
              height={1000}
              priority
              className="object-cover w-[800px] h-[800px]"
            />
          </div>
        </div>
      </section>
    );

    return () => setSection(null); // Nettoyage si on quitte la page
  }, [setSection]);

  return (
    <main className="w-full px-4 -mt-6 space-y-12">
      <section className="w-full h-auto b-blue-500 -translate-y-6 px-4">
        <div className="p-4 bg-white w-full rounded-xl shadow-white shadow-sm ">
          <div className="p-4 bg-red-400 -translate-y-7 w-1/2 mx-auto flex rounded-xl"></div>
        </div>
        <div className=" flex flex-col py-4">
          {/* Présentation du service */}
          <section className="">
            <div className="text-center space-y-2 mb-8">
              <span className="text-red-500 font-semibold text-sm ">
                Nos services
              </span>
              <h2 className="text-xl font-bold uppercase">
                Nos meilleurs services pensés pour vous
              </h2>
            </div>

            {/* Service card */}
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 3 }).map((itm, index) => (
                <Card key={index} />
              ))}
            </div>
          </section>
          {/* Presentation a propos de nous */}
          <section>
            <div className="">
              {/* Title */}
              <div className="text-center space-y-2 mb-8">
                <span className="text-red-500 font-semibold text-sm ">
                  A Propos de nous
                </span>
                <h2 className="text-xl font-bold uppercase">
                  Notre engagement pour votre confort et votre satisfaction
                </h2>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
