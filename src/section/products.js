"use client"

import { useState, useEffect } from "react"
import CategoryFilter from "@/components/Products/category"
import ProductCard from "@/components/Products/productscard"
import SearchBar from "@/components/UI/searchbar"
import { products } from "@/constant/products"
import { FiSearch } from "react-icons/fi"
import { useRouter } from "next/navigation"

export default function Product() {
  const router = useRouter()
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [showAll, setShowAll] = useState(false)

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

  const handleShowAll = () => {
    router.push("/shop")
  }

  // Determine which products to display
  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8)

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 mt-5 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-amber-600">Premium Products</h1>

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
              We couldn't find any matches for your search. Try adjusting your filters or search terms.
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
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Show "View All" button if there are more than 8 products and we're not showing all */}
            {filteredProducts.length > 8 && !showAll && (
              <div className="flex justify-center mt-8">
                <button
                  onClick={handleShowAll}
                  className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
                >
                  View All Products
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}