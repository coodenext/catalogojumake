"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductRating from "@/components/product-rating"
import ImageGallery from "@/components/image-gallery"
import type { Product } from "@/types/types"
import { getProductById } from "@/lib/products"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(Number.parseInt(params.id))
        setProduct(productData)
      } catch (error) {
        console.error("Erro ao carregar produto:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [params.id])

  const handleWhatsAppClick = () => {
    if (!product) return

    const message = `Olá, tenho interesse neste produto!\n\nNome: ${product.name}\nValor: R$ ${product.price.toFixed(2)}`
    const whatsappUrl = `https://wa.me/5587991065384?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
        <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
        <Button onClick={() => router.push("/")} variant="outline">
          Voltar para o catálogo
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="mb-6 flex items-center gap-2" onClick={() => router.push("/")}>
          <ArrowLeft size={16} />
          Voltar ao catálogo
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          <Card className="p-6">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <ProductRating productId={product.id} initialRating={0} size="lg" />

            <div className="mt-4 text-xl font-bold text-pink-600">R$ {product.price.toFixed(2)}</div>

            <div className="mt-2 text-sm">
              Estoque:{" "}
              <span className={product.stock <= 0 ? "text-red-500" : "text-green-600"}>
                {product.stock <= 0 ? "Indisponível" : `${product.stock} unidades`}
              </span>
            </div>

            {product.description && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Descrição</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}

            <div className="mt-8">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                disabled={product.stock <= 0}
                onClick={handleWhatsAppClick}
              >
                <ShoppingCart size={18} />
                {product.stock <= 0 ? "Indisponível" : "Comprar pelo WhatsApp"}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
