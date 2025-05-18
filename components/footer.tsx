import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-pink-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-[90px] h-[90px] mb-2">
            <Image src="/placeholder.svg?height=90&width=90" alt="JU MAKE" fill className="object-contain" />
          </div>

          <h2 className="text-xl font-bold text-gray-700">JU MAKE</h2>

          <div className="flex items-center gap-2 mt-4">
            <Link
              href="https://www.instagram.com/studio.frame.pro/"
              target="_blank"
              className="text-pink-600 hover:text-pink-700 transition-colors"
            >
              <Instagram size={24} />
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-600">2025 JU MAKE - Todos os direitos reservados.</p>

          <Link
            href="https://www.instagram.com/studio.frame.pro/"
            target="_blank"
            className="mt-1 text-sm text-pink-600 hover:text-pink-700 transition-colors"
          >
            Segurança e privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
