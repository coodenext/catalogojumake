// Função para salvar avaliação no localStorage
export async function saveRating(productId: number, rating: number): Promise<void> {
  try {
    // Obter avaliações existentes
    const ratingsStr = localStorage.getItem("product_ratings")
    const ratings = ratingsStr ? JSON.parse(ratingsStr) : {}

    // Atualizar avaliação
    ratings[productId] = rating

    // Salvar de volta no localStorage
    localStorage.setItem("product_ratings", JSON.stringify(ratings))

    // Simulando uma chamada de API para persistência futura
    console.log(`Avaliação salva: Produto ${productId}, Nota ${rating}`)

    return Promise.resolve()
  } catch (error) {
    console.error("Erro ao salvar avaliação:", error)
    return Promise.reject(error)
  }
}

// Função para obter avaliação do localStorage
export async function getRating(productId: number): Promise<number | null> {
  try {
    // Obter avaliações existentes
    const ratingsStr = localStorage.getItem("product_ratings")
    if (!ratingsStr) return null

    const ratings = JSON.parse(ratingsStr)
    return ratings[productId] || null
  } catch (error) {
    console.error("Erro ao obter avaliação:", error)
    return null
  }
}

// Função para obter todas as avaliações
export async function getAllRatings(): Promise<Record<number, number>> {
  try {
    const ratingsStr = localStorage.getItem("product_ratings")
    return ratingsStr ? JSON.parse(ratingsStr) : {}
  } catch (error) {
    console.error("Erro ao obter todas as avaliações:", error)
    return {}
  }
}
