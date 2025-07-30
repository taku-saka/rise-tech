import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";
import Link from "next/link";

interface ServicesSectionProps {
  servicesRef: (node: Element | null) => void;
  servicesVisible: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  servicesRef,
  servicesVisible,
}) => {
  return (
    <section
      ref={servicesRef}
      className="py-20 px-4 bg-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 ${
            servicesVisible
              ? "animate-on-scroll-enhanced visible"
              : "animate-on-scroll-enhanced"
          }`}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 gradient-text animate-text-shimmer text-shadow-2xs">
            事業内容
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-words">
            多様な技術領域で、お客様のビジネス成長をサポートします
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link href={`/services/${service.id}`} key={service.id}>
                <div
                  key={service.id}
                  className={`glass-card-enhanced p-8 rounded-2xl hover-lift-enhanced cursor-pointer group ${
                    servicesVisible ? "animate-card-appear" : "opacity-0"
                  } stagger-delay-${index + 1}`}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white transform transition-transform duration-300 group-hover:scale-110">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                    詳細を見る{" "}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/services">
            <button className="btn-primary-enhanced text-white px-8 py-3 rounded-full font-semibold hover-lift-enhanced cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
