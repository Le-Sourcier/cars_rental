import React from "react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

function Card({ icon, title, description }: CardProps) {
  return (
    <div className="group hover:scale-[1.02] transition-all duration-300">
      <div className="h-full p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 rounded-xl bg-primary-50 flex items-center justify-center text-2xl shadow-sm">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="font-bold text-xl text-primary-900">
            {title}
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Call to action */}
        <div className="mt-6">
          <button className="text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 flex items-center gap-2">
            En savoir plus
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;