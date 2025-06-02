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
      <section className="relative w-full min-h-screen bg-gradient-to-br from-primary-600 to-primary-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/50 to-primary-900/80"></div>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {/* Hero Text */}
          <div className="flex-1 text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-500/10 border border-secondary-500/20">
              <span className="w-2 h-2 rounded-full bg-secondary-500 animate-pulse"></span>
              <span className="text-secondary-400 text-sm font-semibold tracking-wide">Nouveau service disponible</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Révolutionnez votre recherche automobile
              <span className="block text-secondary-400 mt-3">avec notre IA experte</span>
            </h1>
            
            <p className="text-lg text-neutral-200 max-w-xl leading-relaxed">
              Découvrez une nouvelle façon d'acheter votre véhicule. Notre technologie analyse en temps réel plus de 2 000 offres pour vous garantir jusqu'à 40% d'économies sur votre prochain achat.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn btn-secondary group">
                DÉMARRER L'ANALYSE
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                EN SAVOIR PLUS
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-accent-400 text-xl">✓</span>
                </div>
                <span className="text-neutral-200 font-medium">IA Avancée</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent-500/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-accent-400 text-xl">⚡</span>
                </div>
                <span className="text-neutral-200 font-medium">Analyse Rapide</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-[600px]">
              <Image
                src={image.Voiture_3d}
                alt="Voiture 3D"
                width={800}
                height={800}
                priority
                className="object-contain drop-shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 right-6 h-12 bg-gradient-to-t from-primary-900/50 to-transparent blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    );

    return () => setSection(null);
  }, [setSection]);

  return (
    <main className="w-full space-y-24">
      {/* Services Section */}
      <section className="max-w-screen-xl mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block text-secondary-600 font-semibold text-sm uppercase tracking-wider">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
            Des solutions pensées pour vous
          </h2>
          <p className="max-w-2xl mx-auto text-neutral-600 leading-relaxed">
            Découvrez comment notre technologie révolutionne l'achat automobile et vous fait économiser temps et argent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🔍",
              title: "Analyse IA",
              description: "Notre algorithme analyse en temps réel plus de 2 000 offres pour vous trouver les meilleures opportunités."
            },
            {
              icon: "📊",
              title: "Comparaison Détaillée",
              description: "Comparez facilement les prix, options et caractéristiques des véhicules qui vous intéressent."
            },
            {
              icon: "🛡️",
              title: "Garantie Sécurité",
              description: "Tous les véhicules sont inspectés et certifiés par nos experts pour votre tranquillité."
            }
          ].map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <span className="inline-block text-secondary-600 font-semibold text-sm uppercase tracking-wider">
              À Propos de Nous
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900">
              Notre Engagement
            </h2>
            <p className="max-w-2xl mx-auto text-neutral-600 leading-relaxed">
              Nous révolutionnons l'achat automobile en combinant expertise humaine et intelligence artificielle.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;