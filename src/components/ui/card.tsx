import React from "react";

function Card() {
  return (
    <div className="max-w-sm mx-auto p-2 bg-gray-50 rounded-xl shadow">
      {/* Illustration */}
      <div className="h-[200px] bg-gray-200 rounded-2xl mb-4"></div>

      {/* Texte de service */}
      <div className="space-y-2 text-left">
        <h3 className="font-bold text-lg text-gray-600">
          Réservation en ligne
        </h3>
        <p className="text-sm text-gray-600">
          Réservez votre voiture facilement en ligne, sans vous déplacer.
          Profitez d’une expérience fluide, rapide et sécurisée.
        </p>
      </div>

      <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
        En savoir plus
      </button>
    </div>
  );
}

export default Card;
