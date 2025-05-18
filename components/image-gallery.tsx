"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageGalleryProps {
  images: string[]
  productName: string
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setShowLightbox(true)
  }

  const closeLightbox = () => {
    setShowLightbox(false)
  }

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${productName} - Imagem ${currentIndex + 1}`}
          fill
          className="object-contain cursor-pointer"
          onClick={() => openLightbox(currentIndex)}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 ${
                index === currentIndex ? "border-pink-500" : "border-transparent"
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`${productName} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={closeLightbox}>
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={images[lightboxIndex] || "/placeholder.svg"}
              alt={`${productName} - Imagem ampliada ${lightboxIndex + 1}`}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={prevLightboxImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={30} />
            </button>

            <button
              onClick={nextLightboxImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={30} />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
