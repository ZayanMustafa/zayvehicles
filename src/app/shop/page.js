"use client"

import { useState, useEffect } from "react"
import CategoryFilter from "@/components/Products/category"
import ProductCard from "@/components/Products/productscard"
import SearchBar from "@/components/UI/searchbar"
import { products } from "@/constant/products"
import { FiSearch } from "react-icons/fi"

export default function Shop() {
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [visibleProducts, setVisibleProducts] = useState(8) // Start with 8 visible products

  // Apply filters whenever search query or category changes
  useEffect(() => {
    let result = products

    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter((product) => product.category === categoryFilter)
    }

    // Apply search filter
    if (searchQuery) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredProducts(result)
    setVisibleProducts(8) // Reset to 8 visible products when filters change
  }, [searchQuery, categoryFilter])

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (category) => {
    setCategoryFilter(category)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setCategoryFilter("all")
  }

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 8) // Load 8 more products
  }

  // Get currently visible products
  const currentProducts = filteredProducts.slice(0, visibleProducts)
  const hasMoreProducts = visibleProducts < filteredProducts.length

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 mt-20 py-8">
        <h1 className="text-6xl font-bold text-center mb-8 text-amber-600">Premium Products</h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <SearchBar 
            products={products} 
            onSearch={handleSearch} 
            searchQuery={searchQuery}
          />
          <CategoryFilter 
            onFilterChange={handleCategoryChange} 
            currentCategory={categoryFilter}
          />
        </div>

        {/* Show clear filters button only when filters are active */}
        {(searchQuery || categoryFilter !== "all") && (
          <div className="flex justify-end mb-4">
            <button 
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-amber-600 hover:text-amber-700 underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <FiSearch className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500 max-w-md">
              We couldn&apos;t find any matches for your search. Try adjusting your filters or search terms.
            </p>
            <button 
              onClick={clearFilters}
              className="mt-6 px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Load More button */}
            {hasMoreProducts && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={loadMoreProducts}
                  className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}