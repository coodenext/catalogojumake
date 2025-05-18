import type { Product } from "@/types/types"

// Dados dos produtos (convertidos do seu script.js original)
const productsData: Product[] = [
  {
    id: 1,
    name: "KIT Primer Facial – Phállebeaut / Esponja Chanfrada / 4 Angels Corretivo Líquido",
    price: 41.9,
    images: ["/placeholder.svg?height=300&width=300"],
    stock: 4,
    category: "Kits",
  },
  {
    id: 2,
    name: "KIT On The Glow Blush – Fabella / Sérum Vitamina C – Phállebeauty / Iluminador Líquido - Febella",
    price: 59.9,
    images: ["/placeholder.svg?height=300&width=300"],
    stock: 1,
    category: "Kits",
  },
  {
    id: 3,
    name: "KIT Paleta de Blush Febella – 3 Tonalidades / Gel Creme Hidratante Facial – Phállebeauty / Gloss - Febella",
    price: 56.9,
    images: ["/placeholder.svg?height=300&width=300"],
    stock: 1,
    category: "Kits",
  },
  {
    id: 4,
    name: "4 Angels Corretivo Líquido",
    price: 15.0,
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    description:
      "4 Angels Corretivo Líquido – Alta cobertura, toque leve e acabamento natural. Disfarça olheiras e imperfeições sem craquelar!",
    stock: 5,
    category: "Rosto",
  },
  {
    id: 5,
    name: "4 Angels PÓ COMPACTO",
    price: 15.0,
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    description:
      "Acabamento aveludado, cobertura leve a média e controle da oleosidade. Ideal para selar a make e deixar a pele impecável o dia todo!",
    stock: 1,
    category: "Rosto",
  },
  {
    id: 6,
    name: "Pó Banana / Bem Me Quero",
    price: 11.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Pó Banana Bem Me Quero – Acabamento aveludado, controla a oleosidade e sela a maquiagem com leveza e perfeição!",
    stock: 3,
    category: "Rosto",
  },
  {
    id: 7,
    name: "Blindagem Febella",
    price: 20.0,
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    description:
      "Blindagem Febella – Proteção intensa, brilho duradouro e cabelos mais fortes desde a primeira aplicação!",
    stock: 3,
    category: "Skincare",
  },
  {
    id: 8,
    name: "On The Glow Blush – Fabella",
    price: 24.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "On The Glow Blush – Fabella – Blush cremoso com efeito natural e luminoso, perfeito para um toque de cor e viço na pele!",
    stock: 2,
    category: "Rosto",
  },
  {
    id: 9,
    name: "Iluminador Líquido - Febella",
    price: 23.0,
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    description:
      "Iluminador Líquido – Febella – Brilho radiante e acabamento suave para realçar os pontos altos do rosto com naturalidade!",
    stock: 2,
    category: "Rosto",
  },
  {
    id: 10,
    name: "Paleta de Sombras Glam 12 S / Vivai",
    price: 18.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Paleta de Sombras Glam 12 S – Vivai – Cores pigmentadas e versáteis, com acabamentos matte e cintilante para criar looks do dia à noite!",
    stock: 2,
    category: "Olhos",
  },
  {
    id: 11,
    name: "Máscara para Cílios Black ALL Day / Vivai",
    price: 14.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Máscara para Cílios Black ALL Day – Vivai – Volume, definição e longa duração para cílios intensamente pretos o dia todo!",
    stock: 2,
    category: "Olhos",
  },
  {
    id: 12,
    name: "Lápis Marrom com Apontador – VIVAI",
    price: 3.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Lápis Marrom com Apontador – VIVAI – Traço preciso, textura macia e praticidade com apontador acoplado! Ideal para olhos ou sobrancelhas.",
    stock: 2,
    category: "Olhos",
  },
  {
    id: 13,
    name: "Sabonete Líquido Moranguinho",
    price: 8.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Sabonete Líquido Moranguinho – Limpeza suave com cheirinho delicioso de morango e toque hidratante para a pele!",
    stock: 3,
    category: "Skincare",
  },
  {
    id: 14,
    name: "Kit 13 Pincéis Profissionais",
    price: 22.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Kit 13 Pincéis Profissionais – Conjunto completo para uma maquiagem impecável, com pincéis de alta qualidade para todos os detalhes!",
    stock: 0,
    category: "Acessórios",
  },
  {
    id: 15,
    name: "Esponja Chanfrada",
    price: 5.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Esponja Chanfrada – Aplicação precisa e uniforme, perfeita para contorno e áreas difíceis de alcançar. Deixa a maquiagem impecável!",
    stock: 4,
    category: "Acessórios",
  },
  {
    id: 16,
    name: "Primer Facial – Phállebeaut",
    price: 22.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Primer Facial – Phállebeaut – Preparação perfeita para a pele, controla a oleosidade e aumenta a durabilidade da maquiagem!",
    stock: 4,
    category: "Skincare",
  },
  {
    id: 17,
    name: "Bruma Matte – Phállebeaut",
    price: 17.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Bruma Matte – Phállebeaut – Fixação prolongada e acabamento matte, controlando a oleosidade e deixando a maquiagem intacta o dia todo!",
    stock: 2,
    category: "Skincare",
  },
  {
    id: 18,
    name: "Kit Mini Esponjinhas – Powder Puf",
    price: 7.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Kit Mini Esponjinhas – Powder Puf – Esponjinhas práticas e perfeitas para aplicação de pó, corretivo e retoques rápidos. Ideal para viagens!",
    stock: 2,
    category: "Acessórios",
  },
  {
    id: 19,
    name: "Sérum Vitamina C – Phállebeauty",
    price: 14.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Sérum Vitamina C – Phállebeauty – Revitalização intensa, uniformização do tom da pele e combate aos sinais de envelhecimento. Pele radiante e saudável!",
    stock: 1,
    category: "Skincare",
  },
  {
    id: 20,
    name: "Máscara Facial Gold – Phállebeauty",
    price: 17.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Máscara Facial Gold – Phállebeauty – Hidratação profunda e rejuvenescimento instantâneo, com efeito luminoso e revitalizante para a pele!",
    stock: 2,
    category: "Skincare",
  },
  {
    id: 21,
    name: "Gel Creme Hidratante Facial – Phállebeauty",
    price: 20.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Gel Creme Hidratante Facial – Phállebeauty – Hidratação intensa e rápida absorção, deixando a pele macia, fresca e revitalizada!",
    stock: 2,
    category: "Skincare",
  },
  {
    id: 22,
    name: "Espuma Facial Morango - Nelô",
    price: 17.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Espuma Facial Morango – Nelô – Limpeza suave com um toque doce de morango, removendo impurezas e deixando a pele macia e refrescante!",
    stock: 1,
    category: "Skincare",
  },
  {
    id: 23,
    name: "Gel Incolor Fix & Antifrizz – Mia Make",
    price: 15.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Gel Incolor Fix & Antifrizz – Mia Make – Controle de frizz e fixação sem pesar, deixando o cabelo suave, disciplinado e com brilho natural",
    stock: 3,
    category: "Skincare",
  },
  {
    id: 24,
    name: "Base Líquida Lua e Neve",
    price: 28.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Base Líquida Lua e Neve – Cobertura média e acabamento impecável, proporcionando uma pele uniforme e radiante o dia todo!",
    stock: 0,
    category: "Rosto",
  },
  {
    id: 25,
    name: "Paleta de Contorno Febella – 6 Cores",
    price: 23.0,
    images: ["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"],
    description:
      "Paleta de Contorno Febella – 6 Cores – Contorno perfeito com 6 tonalidades versáteis para modelar e iluminar o rosto de forma natural e sofisticada!",
    stock: 4,
    category: "Rosto",
  },
  {
    id: 26,
    name: "Paleta de Blush Febella – 3 Tonalidades",
    price: 19.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Paleta de Blush Febella – 3 Tonalidades – Cores vibrantes e naturais para dar vida e cor às suas bochechas com acabamento perfeito!",
    stock: 2,
    category: "Rosto",
  },
  {
    id: 27,
    name: "Gloss Gold Magic – Febella",
    price: 13.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Realce seus lábios com um acabamento luxuoso e radiante. Com partículas de brilho dourado, o Gold Magic oferece hidratação, volume e um visual glamouroso que transforma qualquer make. Ideal para quem ama se destacar!",
    stock: 0,
    category: "Lábios",
  },
  {
    id: 28,
    name: "Gloss - Febella",
    price: 19.0,
    images: ["/placeholder.svg?height=300&width=300"],
    description:
      "Brilho intenso, lábios irresistíveis! Textura leve, hidratação na medida e um acabamento que valoriza qualquer look.",
    stock: 1,
    category: "Lábios",
  },
]

// Função para obter todos os produtos
export async function getAllProducts(): Promise<Product[]> {
  // Simulando um atraso de rede para demonstrar carregamento
  await new Promise((resolve) => setTimeout(resolve, 500))
  return productsData
}

// Função para obter um produto pelo ID
export async function getProductById(id: number): Promise<Product | null> {
  // Simulando um atraso de rede para demonstrar carregamento
  await new Promise((resolve) => setTimeout(resolve, 300))
  const product = productsData.find((p) => p.id === id)
  return product || null
}

// Função para buscar produtos por termo
export async function searchProducts(term: string): Promise<Product[]> {
  if (!term) return productsData

  const normalizedTerm = term
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  return productsData.filter((product) => {
    const normalizedName = product.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    return normalizedName.includes(normalizedTerm)
  })
}

// Função para filtrar produtos por categoria
export async function getProductsByCategory(category: string): Promise<Product[]> {
  return productsData.filter((product) => product.category === category)
}
