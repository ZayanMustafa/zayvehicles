"use client";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="flex items-center">
      <button className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
        <FaChevronLeft className="w-3 h-3" />
      </button>
      <button className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100">
        1
      </button>
      <button className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
        2
      </button>
      <button className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
        3
      </button>
      <button className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
        4
      </button>
      <button className="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
        <FaChevronRight className="w-3 h-3" />
      </button>
    </div>
  );
}

