"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchBar({ products, onSearch }) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef(null)

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([])
    } else {
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filteredProducts.slice(0, 5))
    }
  }, [query, products])

  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = () => {
    onSearch(query)
    setShowSuggestions(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.name)
    onSearch(suggestion.name)
    setShowSuggestions(false)
  }

  return (
    <div className="relative w-full max-w-2xl"> {/* Increased max-width */}
      <div className="flex items-center border-2 border-amber-400 rounded-lg overflow-hidden bg-white">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setShowSuggestions(true)
          }}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search bike, car, boat, etc..."
          className="w-full px-6 py-3 text-lg outline-none text-gray-800 placeholder-gray-500" 
        />
        <button 
          onClick={handleSearch} 
          className="bg-amber-400 px-5 py-3 text-white hover:bg-amber-500 transition-colors"
          aria-label="Search"
        >
          <FaSearch className="h-6 w-6" /> 
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl" 
        >
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-6 py-3 hover:bg-amber-50 cursor-pointer border-b border-gray-100 last:border-b-0" // Increased padding
            >
              <div className="font-medium text-lg text-gray-800">{suggestion.name}</div> 
              <div className="text-base text-gray-600">{suggestion.category}</div> 
            </div>
          ))}
        </div>
      )}
    </div>
  )
}