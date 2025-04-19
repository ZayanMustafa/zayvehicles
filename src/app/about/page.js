"use client";

import { aboutData } from '@/constant/about';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Car.jpg"
            alt="Luxury vehicles collage"
            fill
            className="object-cover opacity-150"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50/80 to-white/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-amber-600 mb-6">
            {aboutData.title}
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl text-amber-800 font-medium max-w-3xl">
            {aboutData.subtitle}
          </p>
          <p className="mt-8 text-gray-800 text-xl md:text-2xl max-w-4xl leading-relaxed">
            {aboutData.description}
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aboutData.features.map((feature, index) => (
            <div 
              key={index}
              className="relative h-[500px] rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0">
                <Image
                  src={feature.bgImage}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">
                <div className="mb-6 text-4xl text-amber-300">{feature.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                <p className="text-xl md:text-2xl mb-6">{feature.description}</p>
                <button className="flex items-center text-amber-300 hover:text-amber-200 font-medium text-xl">
                  Learn more <FaChevronRight className="ml-3" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-8">
                <div className="flex justify-center mb-6">
                  <div className="text-4xl">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-5xl md:text-6xl font-bold text-amber-600 mb-4">
                  {stat.value}
                </p>
                <p className="text-xl md:text-2xl text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* History Section */}
<section className="py-20 container mx-auto px-6">
  <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-12 text-center">
    {aboutData.history.title}
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
    {aboutData.history.content.map((paragraph, index) => (
      <div 
        key={index} 
        className="bg-white p-8 rounded-xl shadow-lg border border-amber-200 hover:shadow-xl transition-shadow duration-300"
      >
        <p className="text-xl md:text-2xl leading-relaxed text-gray-800">
          {paragraph}
        </p>
      </div>
    ))}
  </div>
</section>

      {/* Values Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-600 mb-16 text-center">
            OUR CORE VALUES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutData.values.map((value, index) => (
              <div key={index} className="bg-white p-10 rounded-2xl shadow-lg text-center">
                <div className="text-5xl text-amber-500 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{value.title}</h3>
                <p className="text-xl md:text-2xl text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Begin Your Journey?</h2>
          <p className="text-2xl md:text-3xl mb-10 max-w-3xl mx-auto">
            Connect with one of our specialists to find your perfect vehicle.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-amber-600 px-10 py-4 rounded-xl font-bold hover:bg-amber-50 transition-colors flex items-center justify-center text-xl">
              Browse Inventory <FaChevronRight className="ml-3" size={20} />
            </button>
            <button className="border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors text-xl">
              Contact Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;