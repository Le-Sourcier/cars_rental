import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="group hover:scale-[1.02] transition-transform duration-300">
      <div className="h-full p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Icon */}
        <div className="w-12 h-12 mb-4 rounded-lg bg-primary-50 flex items-center justify-center text-2xl">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-bold text-xl text-neutral-900">
            {title}
          </h3>
          <p className="text-neutral-600">
            {description}
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-6">
          <button className="text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-300 flex items-center gap-2">
            En savoir plus
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;