  // Content for the three changing sections
import{  FiDollarSign, FiAward ,FiCheckCircle } from "react-icons/fi";
  export const sections = [
    {
      title: "Premium Quality",
      icon: <FiAward className="text-4xl mb-4 text-amber-400" />,
      content:
        "At ZayVehicles, we pride ourselves on offering only the highest quality vehicles on the market. Each car undergoes rigorous testing and inspection before joining our fleet.",
    },
    {
      title: "Affordable Pricing",
      icon: <FiDollarSign className="text-4xl mb-4 text-green-400" />,
      content:
        "We believe luxury shouldn&apos;t break the bank. Our competitive pricing ensures you get the best value without compromising on quality or features.",
    },
    {
      title: "Exceptional Service",
      icon: <FiCheckCircle className="text-4xl mb-4 text-blue-400" />,
      content:
        "Our dedicated team of professionals is committed to providing you with a seamless experience from browsing to purchase and beyond.",
    },
  ];