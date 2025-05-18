import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-pink-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col items-center">
        <Link href="/">
          <div className="relative w-[200px] h-[100px]">
            <Image src="/placeholder.svg?height=100&width=200" alt="JU MAKE" fill className="object-contain" priority />
          </div>
        </Link>
        <h1 className="text-2xl font-bold text-pink-600 mt-2">CATÁLOGO DE PRODUTOS</h1>
      </div>
    </header>
  )
}
