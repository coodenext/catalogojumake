"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Banner from "@/components/banner"
import ProductGrid from "@/components/product-grid"
import SearchBar from "@/components/search-bar"
import CategoryFilter from "@/components/category-filter"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import type { Product } from "@/types/product"
import { getAllProducts } from "@/lib/products"

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    const loadProducts = async () => {
      const allProducts = await getAllProducts()
      setProducts(allProducts)
      setFilteredProducts(allProducts)
    }

    loadProducts()
  }, [])

  useEffect(() => {
    let result = products

    // Filtrar por termo de busca
    if (searchTerm) {
      const normalizedTerm = searchTerm
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")

      result = result.filter((product) => {
        const normalizedName = product.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
        return normalizedName.includes(normalizedTerm)
      })
    }

    // Filtrar por categoria
    if (selectedCategory) {
      result = result.filter((product) => product.category === selectedCategory)
    }

    setFilteredProducts(result)
  }, [searchTerm, selectedCategory, products])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
  }

  const categories = ["Rosto", "Olhos", "Lábios", "Skincare", "Acessórios", "Kits"]

  return (
    <main className="min-h-screen bg-pink-50">
      <Header />
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <SearchBar onSearch={handleSearch} />
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />
        </div>
        <ProductGrid products={filteredProducts} />
      </div>
      <Footer />
      <BackToTop />
    </main>
  )
}
