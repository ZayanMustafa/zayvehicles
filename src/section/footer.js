import { FOOTER_LINKS } from "@/constant/footer";
import Link from "next/link";
import { FaCar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative bg-white-900 text-white pt-16 pb-12 overflow-hidden">
            {/* Optional Car Background - Right Side */}
            <div className="absolute right-0 top-0 h-full w-1/3 hidden lg:block">
                <div
                    className="h-full bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/car.png')" }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <FaCar className="text-amber-400 mr-2" />
                            <span className="">
                                ZayVehicles
                            </span>
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Your premier destination for luxury and performance vehicles.
                            We connect car enthusiasts with their dream machines.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" target="blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" target="blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" target="blank" className="text-gray-400 hover:text-amber-400 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-amber-400">Quick Links</h4>
                        <ul className="space-y-3">
                            {FOOTER_LINKS.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-amber-400">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-400">
                                    Korangi<br />
                                    Karachi , Pakistan
                                </span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-amber-400 mr-3" />
                                <span className="text-gray-400">(92) 311 2512821</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-amber-400 mr-3" />
                                <span className="text-gray-400">info@zayvehicles.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="mt-16 border-t border-gray-800 pt-10">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-xl font-semibold mb-4">Get the Latest Drops</h4>
                        <p className="text-gray-400 mb-6">
                            Subscribe to our newsletter for exclusive vehicle releases and special offers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-amber-400 focus:outline-none"
                            />
                            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:opacity-90 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} ZayVehicles. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}