import { MdOutlineCancel } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";

export default function CartDrawer({ isOpen, onClose }) {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-30 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 p-6 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-red-500 transition-colors"
                    >
                        <MdOutlineCancel size={24} /> 
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center h-[60vh] text-center">
                    <FiShoppingBag size={60} className="text-gray-300 mb-6" />
                    <h3 className="text-3xl font-bold text-gray-700 mb-2">So Empty...</h3>
                    <p className="text-lg text-gray-500 mb-6">
                        Your cart is feeling lonely!
                    </p>
                    <div className="animate-bounce mt-4">
                        <span className="text-5xl">🛒</span>
                    </div>
                    <p className="text-gray-400 mt-8 italic">
                        *sad shopping cart noises*
                    </p>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                    <button 
                        onClick={onClose}
                        className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium rounded-lg transition-colors"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </>
    );
}