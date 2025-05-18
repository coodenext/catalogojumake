"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"
import { saveRating, getRating } from "@/lib/ratings"

interface ProductRatingProps {
  productId: number
  initialRating?: number
  size?: "sm" | "md" | "lg"
}

export default function ProductRating({ productId, initialRating = 0, size = "sm" }: ProductRatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoveredRating, setHoveredRating] = useState(0)

  useEffect(() => {
    const loadRating = async () => {
      const savedRating = await getRating(productId)
      if (savedRating) {
        setRating(savedRating)
      }
    }

    loadRating()
  }, [productId])

  const handleRatingClick = async (value: number) => {
    setRating(value)
    await saveRating(productId, value)
  }

  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const starSize = sizeClasses[size]

  return (
    <div className="flex items-center gap-1" onMouseLeave={() => setHoveredRating(0)}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          className={`cursor-pointer ${starSize} ${
            value <= (hoveredRating || rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            handleRatingClick(value)
          }}
          onMouseEnter={() => setHoveredRating(value)}
        />
      ))}
    </div>
  )
}
