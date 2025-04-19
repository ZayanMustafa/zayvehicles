"use client"

import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"

export default function CategoryFilter({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { value: "all", label: "ALL" },
    { value: "boat", label: "Boats" },
    { value: "bike", label: "Bikes" },
    { value: "car", label: "Cars" },
    { value: "airplane", label: "Airplanes" },
  ]

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    onFilterChange(category)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-40 px-4 py-2 bg-white border-2 border-amber-400 rounded-md text-gray-800"
      >
        <span>{categories.find((cat) => cat.value === selectedCategory)?.label}</span>
        <FaAngleDown className="h-4 w-4 text-amber-600" />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg text-gray-800">
          {categories.map((category) => (
            <div
              key={category.value}
              onClick={() => handleCategoryChange(category.value)}
              className={`px-4 py-2 cursor-pointer hover:bg-amber-50 text-gray-800 ${
                selectedCategory === category.value ? "bg-amber-100" : ""
              }`}
            >
              {category.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

