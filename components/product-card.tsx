"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import ProductRating from "./product-rating"
import type { Product } from "@/types/types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (product.images.length > 1) {
      setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
    }
  }

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    const message = `Olá, tenho interesse neste produto!\n\nNome: ${product.name}\nValor: R$ ${product.price.toFixed(2)}`
    const whatsappUrl = `https://wa.me/5587991065384?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Link href={`/produto/${product.id}`}>
      <Card
        className={`h-full transition-transform duration-300 hover:-translate-y-2 ${
          product.stock <= 0 ? "opacity-70" : ""
        }`}
      >
        <div className="relative aspect-square overflow-hidden">
          {product.stock <= 0 && (
            <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              ESGOTADO
            </div>
          )}

          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-300"
          />

          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-colors"
                aria-label="Imagem anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-1 rounded-full transition-colors"
                aria-label="Próxima imagem"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        <CardContent className="p-4">
          <h3 className="font-semibold text-sm line-clamp-2 h-10 mb-1">{product.name}</h3>

          <ProductRating productId={product.id} initialRating={0} />

          <div className="mt-2 font-bold text-pink-600">R$ {product.price.toFixed(2)}</div>

          <div className="text-xs text-gray-500 mb-3">
            {product.stock > 0 ? `${product.stock} em estoque` : "Indisponível"}
          </div>

          <Button
            className={`w-full mt-2 flex items-center justify-center gap-1 text-xs ${
              product.stock <= 0
                ? "bg-gray-400 hover:bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={product.stock <= 0}
            onClick={handleWhatsAppClick}
          >
            <ShoppingCart size={14} />
            {product.stock <= 0 ? "Indisponível" : "Comprar"}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
