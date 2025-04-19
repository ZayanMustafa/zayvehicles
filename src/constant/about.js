import { FaCar, FaMotorcycle, FaShip, FaShieldAlt, FaGlobe, FaHeadset, FaMedal } from 'react-icons/fa';
import { GiSteeringWheel } from 'react-icons/gi';

export const aboutData = {
  title: "ABOUT ZAYVEHICLES",
  subtitle: "The Premier Luxury Vehicle Marketplace",
  description: "Founded in 2022, ZayVehicles has established itself as the most trusted platform for luxury vehicle transactions worldwide. We specialize in connecting discerning buyers with exceptional cars, bikes, and watercraft through our curated marketplace.",

  features: [
    {
      title: "Luxury Automobiles",
      description: "From rare vintage classics to cutting-edge hypercars, our automotive collection is unparalleled. Each vehicle undergoes a 200-point inspection process.",
      icon: <FaCar className="text-3xl" />,
      bgImage: "/car.jpg"
    },
    {
      title: "Premium Motorcycles",
      description: "Discover the world's finest motorcycles, including limited edition models and custom builds from renowned manufacturers and independent builders.",
      icon: <FaMotorcycle className="text-3xl" />,
      bgImage: "/bike.jpg"

    },
    {
      title: "Yachts & Watercraft",
      description: "Our marine division offers everything from sport boats to mega yachts, with full brokerage services and sea trial coordination.",
      icon: <FaShip className="text-3xl" />,
      bgImage: "/craft.jpg"

    }
  ],

  stats: [
    { value: "750+", label: "Premium Listings", icon: <FaMedal className="text-amber-500" /> },
    { value: "15K+", label: "Satisfied Clients", icon: <FaHeadset className="text-amber-500" /> },
    { value: "60+", label: "Global Brands", icon: <FaGlobe className="text-amber-500" /> },
    
  ],

  history: {
    title: "OUR HISTORY",
    content: [
      "Founded in Geneva by automotive enthusiasts, ZayVehicles began as a boutique consultancy before evolving into the global platform it is today.",
      "Our first major milestone was the 2023 Monaco Grand Prix auction where we facilitated $28M in sales.",
      "In 2024, we expanded into marine vehicles with the acquisition of BlueWater Yachts."
    ]
  },

  values: [
    {
      title: "Integrity",
      description: "Every transaction is conducted with complete transparency and honesty.",
      icon: <FaShieldAlt />
    },
    {
      title: "Expertise",
      description: "Our team includes certified master technicians and marine surveyors.",
      icon: <GiSteeringWheel />
    },
    {
      title: "Discretion",
      description: "We maintain strict confidentiality for all our clients.",
      icon: <FaShieldAlt />
    }
  ],

  team: {
    title: "MEET OUR SPECIALISTS",
    description: "Our team combines decades of experience in luxury automotive and marine industries."
  }
};