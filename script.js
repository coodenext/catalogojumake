// Dados dos produtos
const produtos = [
  {
    id: 1,
    nome: "KIT Primer Facial – Phállebeaut / Esponja Chanfrada / 4 Angels Corretivo Líquido",
    preco: 41.90,
    imagens: ["imagens/2 (1).jpg"],
    estoque: 4,
    categoria: "Kits"
  },
  {
    id: 2,
    nome: "KIT On The Glow Blush – Fabella / Sérum Vitamina C – Phállebeauty / Iluminador Líquido - Febella",
    preco: 59.90,
    imagens: ["imagens/2 (2).jpg"],
    estoque: 1,
    categoria: "Kits"
  },
  {
    id: 3,
    nome: "KIT Paleta de Blush Febella – 3 Tonalidades / Gel Creme Hidratante Facial – Phállebeauty / Gloss - Febella",
    preco: 56.90,
    imagens: ["imagens/2 (3).jpg"],
    estoque: 1,
    categoria: "Kits"
  },
  {
    id: 4,
    nome: "4 Angels Corretivo Líquido",
    preco: 15.00,
    imagens: ["imagens/1 (1).jpg", "imagens/1 (1)b.jpeg"],
    descricao: "4 Angels Corretivo Líquido – Alta cobertura, toque leve e acabamento natural. Disfarça olheiras e imperfeições sem craquelar!",
    estoque: 5,
    categoria: "Rosto"
  },
  {
    id: 5,
    nome: "4 Angels PÓ COMPACTO",
    preco: 15.00,
    imagens: ["imagens/1 (2).jpg", "imagens/1 (2).jpeg"],
    descricao: "Acabamento aveludado, cobertura leve a média e controle da oleosidade. Ideal para selar a make e deixar a pele impecável o dia todo!",
    estoque: 1,
    categoria: "Rosto"
  },
  {
    id: 6,
    nome: "Pó Banana / Bem Me Quero",
    preco: 11.00,
    imagens: ["imagens/1 (3).jpg"],
    descricao: "Pó Banana Bem Me Quero – Acabamento aveludado, controla a oleosidade e sela a maquiagem com leveza e perfeição!",
    estoque: 3,
    categoria: "Rosto"
  },
  {
    id: 7,
    nome: "Blindagem Febella",
    preco: 20.00,
    imagens: ["imagens/1 (4).jpg", "imagens/1 (4).jpeg"],
    descricao: "Blindagem Febella – Proteção intensa, brilho duradouro e cabelos mais fortes desde a primeira aplicação!",
    estoque: 3,
    categoria: "Skincare"
  },
  {
    id: 8,
    nome: "On The Glow Blush – Fabella",
    preco: 24.00,
    imagens: ["imagens/1 (5).jpg"],
    descricao: "On The Glow Blush – Fabella – Blush cremoso com efeito natural e luminoso, perfeito para um toque de cor e viço na pele!",
    estoque: 2,
    categoria: "Rosto"
  },
  {
    id: 9,
    nome: "Iluminador Líquido - Febella",
    preco: 23.00,
    imagens: ["imagens/1 (6).jpg", "imagens/1 (27).jpg"],
    descricao: "Iluminador Líquido – Febella – Brilho radiante e acabamento suave para realçar os pontos altos do rosto com naturalidade!",
    estoque: 2,
    categoria: "Rosto"
  },
  {
    id: 10,
    nome: "Paleta de Sombras Glam 12 S / Vivai",
    preco: 18.00,
    imagens: ["imagens/1 (25).jpg"],
    descricao: "Paleta de Sombras Glam 12 S – Vivai – Cores pigmentadas e versáteis, com acabamentos matte e cintilante para criar looks do dia à noite!",
    estoque: 2,
    categoria: "Olhos"
  },
  {
    id: 11,
    nome: "Máscara para Cílios Black ALL Day / Vivai",
    preco: 14.00,
    imagens: ["imagens/1 (24).jpg"],
    descricao: "Máscara para Cílios Black ALL Day – Vivai – Volume, definição e longa duração para cílios intensamente pretos o dia todo!",
    estoque: 2,
    categoria: "Olhos"
  },
  {
    id: 12,
    nome: "Lápis Marrom com Apontador – VIVAI",
    preco: 3.00,
    imagens: ["imagens/1 (23).jpg"],
    descricao: "Lápis Marrom com Apontador – VIVAI – Traço preciso, textura macia e praticidade com apontador acoplado! Ideal para olhos ou sobrancelhas.",
    estoque: 2,
    categoria: "Olhos"
  },
  {
    id: 13,
    nome: "Sabonete Líquido Moranguinho",
    preco: 8.00,
    imagens: ["imagens/1 (22).jpg"],
    descricao: "Sabonete Líquido Moranguinho – Limpeza suave com cheirinho delicioso de morango e toque hidratante para a pele!",
    estoque: 3,
    categoria: "Skincare"
  },
  {
    id: 14,
    nome: "Kit 13 Pincéis Profissionais",
    preco: 22.00,
    imagens: ["imagens/1 (20).jpg"],
    descricao: "Kit 13 Pincéis Profissionais – Conjunto completo para uma maquiagem impecável, com pincéis de alta qualidade para todos os detalhes!",
    estoque: 0,
    categoria: "Acessórios"
  },
  {
    id: 15,
    nome: "Esponja Chanfrada",
    preco: 5.00,
    imagens: ["imagens/1 (19).jpg"],
    descricao: "Esponja Chanfrada – Aplicação precisa e uniforme, perfeita para contorno e áreas difíceis de alcançar. Deixa a maquiagem impecável!",
    estoque: 4,
    categoria: "Acessórios"
  },
  {
    id: 16,
    nome: "Primer Facial – Phállebeaut",
    preco: 22.00,
    imagens: ["imagens/1 (18).jpg"],
    descricao: "Primer Facial – Phállebeaut – Preparação perfeita para a pele, controla a oleosidade e aumenta a durabilidade da maquiagem!",
    estoque: 3,
    categoria: "Skincare"
  },
  {
    id: 17,
    nome: "Bruma Matte – Phállebeaut",
    preco: 17.00,
    imagens: ["imagens/1 (17).jpg"],
    descricao: "Bruma Matte – Phállebeaut – Fixação prolongada e acabamento matte, controlando a oleosidade e deixando a maquiagem intacta o dia todo!",
    estoque: 2,
    categoria: "Skincare"
  },
  {
    id: 18,
    nome: "Kit Mini Esponjinhas – Powder Puf",
    preco: 7.00,
    imagens: ["imagens/1 (21).jpg"],
    descricao: "Kit Mini Esponjinhas – Powder Puf – Esponjinhas práticas e perfeitas para aplicação de pó, corretivo e retoques rápidos. Ideal para viagens!",
    estoque: 2,
    categoria: "Acessórios"
  },
  {
    id: 19,
    nome: "Sérum Vitamina C – Phállebeauty",
    preco: 14.00,
    imagens: ["imagens/1 (31).jpeg"],
    descricao: "Sérum Vitamina C – Phállebeauty – Revitalização intensa, uniformização do tom da pele e combate aos sinais de envelhecimento. Pele radiante e saudável!",
    estoque: 1,
    categoria: "Skincare"
  },
  {
    id: 20,
    nome: "Máscara Facial Gold – Phállebeauty",
    preco: 17.00,
    imagens: ["imagens/1 (15).jpg"],
    descricao: "Máscara Facial Gold – Phállebeauty – Hidratação profunda e rejuvenescimento instantâneo, com efeito luminoso e revitalizante para a pele!",
    estoque: 2,
    categoria: "Skincare"
  },
  {
    id: 21,
    nome: "Gel Creme Hidratante Facial – Phállebeauty",
    preco: 20.00,
    imagens: ["imagens/1 (14).jpg"],
    descricao: "Gel Creme Hidratante Facial – Phállebeauty – Hidratação intensa e rápida absorção, deixando a pele macia, fresca e revitalizada!",
    estoque: 1,
    categoria: "Skincare"
  },
  {
    id: 22,
    nome: "Espuma Facial Morango - Nelô",
    preco: 17.00,
    imagens: ["imagens/1 (13).jpg"],
    descricao: "Espuma Facial Morango – Nelô – Limpeza suave com um toque doce de morango, removendo impurezas e deixando a pele macia e refrescante!",
    estoque: 1,
    categoria: "Skincare"
  },
  {
    id: 23,
    nome: "Gel Incolor Fix & Antifrizz – Mia Make",
    preco: 15.00,
    imagens: ["imagens/1 (12).jpg"],
    descricao: "Gel Incolor Fix & Antifrizz – Mia Make – Controle de frizz e fixação sem pesar, deixando o cabelo suave, disciplinado e com brilho natural",
    estoque: 2,
    categoria: "Skincare"
  },
  {
    id: 24,
    nome: "Base Líquida Lua e Neve",
    preco: 28.00,
    imagens: ["imagens/1 (11).jpg"],
    descricao: "Base Líquida Lua e Neve – Cobertura média e acabamento impecável, proporcionando uma pele uniforme e radiante o dia todo!",
    estoque: 0,
    categoria: "Rosto"
  },
  {
    id: 25,
    nome: "Paleta de Contorno Febella – 6 Cores",
    preco: 23.00,
    imagens: ["imagens/1 (32).jpeg", "imagens/1 (33).jpeg"],
    descricao: "Paleta de Contorno Febella – 6 Cores – Contorno perfeito com 6 tonalidades versáteis para modelar e iluminar o rosto de forma natural e sofisticada!",
    estoque: 4,
    categoria: "Rosto"
  },
  {
    id: 26,
    nome: "Paleta de Blush Febella – 3 Tonalidades",
    preco: 19.00,
    imagens: ["imagens/1 (9).jpg"],
    descricao: "Paleta de Blush Febella – 3 Tonalidades – Cores vibrantes e naturais para dar vida e cor às suas bochechas com acabamento perfeito!",
    estoque: 2,
    categoria: "Rosto"
  },
  {
    id: 27,
    nome: "Gloss Gold Magic – Febella",
    preco: 13.00,
    imagens: ["imagens/1 (8).jpg"],
    descricao: "Realce seus lábios com um acabamento luxuoso e radiante. Com partículas de brilho dourado, o Gold Magic oferece hidratação, volume e um visual glamouroso que transforma qualquer make. Ideal para quem ama se destacar!",
    estoque: 0,
    categoria: "Lábios"
  },
  {
    id: 28,
    nome: "Gloss - Febella",
    preco: 19.00,
    imagens: ["imagens/1 (7).jpg"],
    descricao: "Brilho intenso, lábios irresistíveis! Textura leve, hidratação na medida e um acabamento que valoriza qualquer look.",
    estoque: 1,
    categoria: "Lábios"
  },
];

// Variáveis globais
const catalogo = document.getElementById("catalogo");
let slideIndex = 0;
let produtosFiltrados = [...produtos];
let categoriaAtual = "todos";
let termoBusca = "";
let lightboxProdutoAtual = null;
let lightboxImagemAtual = 0;

// Funções para o banner rotativo
function changeSlide(n) {
  mostrarSlide(slideIndex += n);
}

function goToSlide(n) {
  mostrarSlide(slideIndex = n);
}

function mostrarSlide(n) {
  const slides = document.querySelectorAll(".banner-slide");
  const dots = document.querySelectorAll(".dot");
  
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;
  
  // Esconder todos os slides
  slides.forEach(slide => {
    slide.classList.remove("active");
  });
  
  // Desativar todos os dots
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
  
  // Mostrar o slide atual
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}

// Rotação automática do banner
function iniciarRotacaoAutomatica() {
  setInterval(() => {
    changeSlide(1);
  }, 5000);
}

// Funções para gerenciar avaliações
function carregarAvaliacoes() {
  try {
    const avaliacoes = localStorage.getItem("avaliacoes");
    return avaliacoes ? JSON.parse(avaliacoes) : {};
  } catch (error) {
    console.error("Erro ao carregar avaliações:", error);
    return {};
  }
}

function salvarAvaliacao(produtoId, nota) {
  try {
    const avaliacoes = carregarAvaliacoes();
    avaliacoes[produtoId] = nota;
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacoes));
  } catch (error) {
    console.error("Erro ao salvar avaliação:", error);
  }
}

function criarEstrelas(produtoId, container) {
  const avaliacoes = carregarAvaliacoes();
  const notaAtual = avaliacoes[produtoId] || 0;
  
  container.innerHTML = "";
  
  for (let i = 1; i <= 5; i++) {
    const estrela = document.createElement("span");
    estrela.className = `estrela ${i <= notaAtual ? "ativa" : ""}`;
    estrela.innerHTML = "★";
    estrela.dataset.valor = i;
    estrela.dataset.produtoId = produtoId;
    
    estrela.addEventListener("click", (e) => {
      e.stopPropagation();
      const valor = parseInt(e.target.dataset.valor);
      const id = parseInt(e.target.dataset.produtoId);
      salvarAvaliacao(id, valor);
      
      // Atualizar visualmente
      const estrelas = container.querySelectorAll(".estrela");
      estrelas.forEach((estrela, index) => {
        if (index < valor) {
          estrela.classList.add("ativa");
        } else {
          estrela.classList.remove("ativa");
        }
      });
    });
    
    container.appendChild(estrela);
  }
  
  return container;
}

// Funções para exibir produtos
function criarElementoProduto(produto) {
  const div = document.createElement("div");
  div.className = `produto ${produto.estoque <= 0 ? "esgotado" : ""}`;
  div.dataset.id = produto.id;
  
  // Imagem do produto com controles
  const divImagem = document.createElement("div");
  divImagem.className = "produto-imagem";
  
  // Tag "ESGOTADO" se aplicável
  if (produto.estoque <= 0) {
    const tagEsgotado = document.createElement("span");
    tagEsgotado.className = "tag-esgotado";
    tagEsgotado.textContent = "ESGOTADO";
    divImagem.appendChild(tagEsgotado);
  }
  
  const img = document.createElement("img");
  img.src = produto.imagens[0] || "https://via.placeholder.com/300x300?text=Sem+Imagem";
  img.alt = produto.nome;
  img.onerror = function() {
    this.src = "https://via.placeholder.com/300x300?text=Sem+Imagem";
  };
  divImagem.appendChild(img);
  
  // Controles de imagem (se houver mais de uma)
  if (produto.imagens.length > 1) {
    const divControles = document.createElement("div");
    divControles.className = "controles-imagem";
    
    const btnAnterior = document.createElement("button");
    btnAnterior.className = "controle-btn";
    btnAnterior.innerHTML = "&#10094;";
    btnAnterior.addEventListener("click", (e) => {
      e.stopPropagation();
      navegarImagens(produto, img, -1);
    });
    
    const btnProximo = document.createElement("button");
    btnProximo.className = "controle-btn";
    btnProximo.innerHTML = "&#10095;";
    btnProximo.addEventListener("click", (e) => {
      e.stopPropagation();
      navegarImagens(produto, img, 1);
    });
    
    divControles.appendChild(btnAnterior);
    divControles.appendChild(btnProximo);
    divImagem.appendChild(divControles);
  }
  
  div.appendChild(divImagem);
  
  // Informações do produto
  const divInfo = document.createElement("div");
  divInfo.className = "produto-info";
  
  const nome = document.createElement("h3");
  nome.className = "produto-nome";
  nome.textContent = produto.nome;
  nome.title = produto.nome; // Adiciona tooltip para nomes longos
  divInfo.appendChild(nome);
  
  // Estrelas de avaliação
  const divEstrelas = document.createElement("div");
  divEstrelas.className = "estrelas";
  criarEstrelas(produto.id, divEstrelas);
  divInfo.appendChild(divEstrelas);
  
  const preco = document.createElement("div");
  preco.className = "produto-preco";
  preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
  divInfo.appendChild(preco);
  
  // Estoque
  const estoque = document.createElement("div");
  estoque.className = "produto-estoque";
  estoque.textContent = produto.estoque > 0 ? `${produto.estoque} em estoque` : "Indisponível";
  divInfo.appendChild(estoque);
  
  // Botão de compra
  const botao = document.createElement("a");
  botao.className = `comprar-btn ${produto.estoque <= 0 ? "botao-desativado" : ""}`;
  botao.textContent = produto.estoque <= 0 ? "Indisponível" : "Comprar";
  
  if (produto.estoque <= 0) {
    botao.onclick = (e) => {
      e.stopPropagation();
      e.preventDefault();
    };
  } else {
    botao.href = `https://wa.me/5587991065384?text=${encodeURIComponent(`Olá, tenho interesse neste produto!\n\nNome: ${produto.nome}\nValor: R$ ${produto.preco.toFixed(2)}`)}`;
    botao.target = "_blank";
    botao.onclick = (e) => {
      e.stopPropagation();
    };
  }
  
  divInfo.appendChild(botao);
  div.appendChild(divInfo);
  
  // Evento de clique para abrir detalhes
  div.addEventListener("click", () => {
    abrirDetalhesProduto(produto);
  });
  
  return div;
}

function navegarImagens(produto, imgElement, direcao) {
  // Encontrar o índice atual da imagem
  const imagemAtual = imgElement.src;
  let indiceAtual = 0;
  
  for (let i = 0; i < produto.imagens.length; i++) {
    if (imagemAtual.includes(produto.imagens[i])) {
      indiceAtual = i;
      break;
    }
  }
  
  // Calcular o próximo índice
  let novoIndice = indiceAtual + direcao;
  if (novoIndice < 0) novoIndice = produto.imagens.length - 1;
  if (novoIndice >= produto.imagens.length) novoIndice = 0;
  
  // Atualizar a imagem
  imgElement.src = produto.imagens[novoIndice] || "https://via.placeholder.com/300x300?text=Sem+Imagem";
}

function carregarProdutos() {
  catalogo.innerHTML = "";
  
  if (produtosFiltrados.length === 0) {
    const mensagem = document.createElement("div");
    mensagem.className = "mensagem-sem-produtos";
    mensagem.innerHTML = `
      <h3>Nenhum produto encontrado</h3>
      <p>Tente ajustar os filtros ou termos de busca.</p>
    `;
    catalogo.appendChild(mensagem);
    return;
  }
  
  produtosFiltrados.forEach(produto => {
    const elementoProduto = criarElementoProduto(produto);
    catalogo.appendChild(elementoProduto);
  });
}

// Funções de filtro
function filtrarProdutos() {
  const termo = document.getElementById("buscarProduto").value.toLowerCase();
  termoBusca = termo;
  
  aplicarFiltros();
}

function filtrarPorCategoria(categoria) {
  categoriaAtual = categoria;
  
  // Atualizar botões de categoria
  document.querySelectorAll(".category-btn").forEach(btn => {
    if (btn.dataset.category === categoria) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  aplicarFiltros();
}

function aplicarFiltros() {
  // Normalizar termo de busca (remover acentos)
  const termoNormalizado = termoBusca.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  produtosFiltrados = produtos.filter(produto => {
    // Filtrar por categoria
    if (categoriaAtual !== "todos" && produto.categoria !== categoriaAtual) {
      return false;
    }
    
    // Filtrar por termo de busca
    if (termoBusca) {
      const nomeNormalizado = produto.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return nomeNormalizado.includes(termoNormalizado);
    }
    
    return true;
  });
  
  carregarProdutos();
}

// Funções para o lightbox
function abrirLightbox(produto, indiceImagem = 0) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCounter = document.getElementById("lightbox-counter");
  
  lightboxProdutoAtual = produto;
  lightboxImagemAtual = indiceImagem;
  
  lightboxImg.src = produto.imagens[indiceImagem] || "https://via.placeholder.com/800x800?text=Sem+Imagem";
  lightboxImg.alt = produto.nome;
  lightboxImg.onerror = function() {
    this.src = "https://via.placeholder.com/800x800?text=Sem+Imagem";
  };
  
  lightboxCounter.textContent = `${indiceImagem + 1}/${produto.imagens.length}`;
  
  lightbox.style.display = "flex";
  
  // Configurar eventos
  document.querySelector(".close-lightbox").onclick = fecharLightbox;
  document.getElementById("lightbox-prev").onclick = () => mudarImagemLightbox(-1);
  document.getElementById("lightbox-next").onclick = () => mudarImagemLightbox(1);
}

function fecharLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function mudarImagemLightbox(direcao) {
  if (!lightboxProdutoAtual) return;
  
  lightboxImagemAtual += direcao;
  
  if (lightboxImagemAtual < 0) {
    lightboxImagemAtual = lightboxProdutoAtual.imagens.length - 1;
  } else if (lightboxImagemAtual >= lightboxProdutoAtual.imagens.length) {
    lightboxImagemAtual = 0;
  }
  
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCounter = document.getElementById("lightbox-counter");
  
  lightboxImg.src = lightboxProdutoAtual.imagens[lightboxImagemAtual] || "https://via.placeholder.com/800x800?text=Sem+Imagem";
  lightboxCounter.textContent = `${lightboxImagemAtual + 1}/${lightboxProdutoAtual.imagens.length}`;
}

// Funções para detalhes do produto
function abrirDetalhesProduto(produto) {
  const detalheNome = document.getElementById("detalhe-nome");
  const detalheImgPrincipal = document.getElementById("detalhe-img-principal");
  const detalheMiniaturas = document.getElementById("detalhe-miniaturas");
  const detalheEstrelas = document.getElementById("detalhe-estrelas");
  const detalhePreco = document.getElementById("detalhe-preco");
  const detalheEstoque = document.getElementById("detalhe-estoque");
  const detalheDescricao = document.getElementById("detalhe-descricao");
  const detalheComprar = document.getElementById("detalhe-comprar");
  
  // Preencher informações
  detalheNome.textContent = produto.nome;
  detalheImgPrincipal.src = produto.imagens[0] || "https://via.placeholder.com/500x500?text=Sem+Imagem";
  detalheImgPrincipal.alt = produto.nome;
  detalheImgPrincipal.onerror = function() {
    this.src = "https://via.placeholder.com/500x500?text=Sem+Imagem";
  };
  
  // Limpar e criar miniaturas
  detalheMiniaturas.innerHTML = "";
  if (produto.imagens.length > 1) {
    produto.imagens.forEach((src, index) => {
      const miniatura = document.createElement("div");
      miniatura.className = `detalhe-miniatura ${index === 0 ? "ativa" : ""}`;
      
      const img = document.createElement("img");
      img.src = src || "https://via.placeholder.com/60x60?text=Sem+Imagem";
      img.alt = `${produto.nome} - Imagem ${index + 1}`;
      img.onerror = function() {
        this.src = "https://via.placeholder.com/60x60?text=Sem+Imagem";
      };
      
      miniatura.appendChild(img);
      miniatura.addEventListener("click", () => {
        // Atualizar imagem principal
        detalheImgPrincipal.src = src || "https://via.placeholder.com/500x500?text=Sem+Imagem";
        
        // Atualizar classe ativa
        document.querySelectorAll(".detalhe-miniatura").forEach(m => m.classList.remove("ativa"));
        miniatura.classList.add("ativa");
      });
      
      detalheMiniaturas.appendChild(miniatura);
    });
  }
  
  // Criar estrelas
  criarEstrelas(produto.id, detalheEstrelas);
  
  // Preço e estoque
  detalhePreco.textContent = `R$ ${produto.preco.toFixed(2)}`;
  
  if (produto.estoque <= 0) {
    detalheEstoque.textContent = "Indisponível";
    detalheEstoque.className = "detalhe-estoque sem-estoque";
  } else {
    detalheEstoque.textContent = `${produto.estoque} em estoque`;
    detalheEstoque.className = produto.estoque <= 2 ? "detalhe-estoque estoque-baixo" : "detalhe-estoque";
  }
  
  // Descrição
  detalheDescricao.textContent = produto.descricao || "Sem descrição disponível.";
  
  // Botão de compra
  if (produto.estoque <= 0) {
    detalheComprar.textContent = "Indisponível";
    detalheComprar.className = "botao-whatsapp botao-desativado";
    detalheComprar.removeAttribute("href");
    detalheComprar.onclick = (e) => e.preventDefault();
  } else {
    detalheComprar.innerHTML = '<i class="fab fa-whatsapp"></i> Comprar pelo WhatsApp';
    detalheComprar.className = "botao-whatsapp";
    detalheComprar.href = `https://wa.me/5587991065384?text=${encodeURIComponent(`Olá, tenho interesse neste produto!\n\nNome: ${produto.nome}\nValor: R$ ${produto.preco.toFixed(2)}`)}`;
    detalheComprar.target = "_blank";
  }
  
  // Configurar eventos
  document.querySelector(".fechar-detalhe").onclick = fecharDetalhe;
  document.querySelector(".detalhe-overlay").onclick = fecharDetalhe;
  
  // Exibir modal
  document.getElementById("produto-detalhe").style.display = "block";
}

function fecharDetalhe() {
  document.getElementById("produto-detalhe").style.display = "none";
}

// Função para voltar ao topo
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar banner
  mostrarSlide(slideIndex);
  iniciarRotacaoAutomatica();
  
  // Carregar produtos
  carregarProdutos();
  
  // Configurar filtros de categoria
  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      filtrarPorCategoria(btn.dataset.category);
    });
  });
  
  // Configurar botão de voltar ao topo
  window.addEventListener("scroll", () => {
    const btnTopo = document.getElementById("btnTopo");
    if (window.scrollY > 300) {
      btnTopo.classList.add("visivel");
    } else {
      btnTopo.classList.remove("visivel");
    }
  });
  
  // Fechar lightbox e detalhes ao pressionar ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      fecharLightbox();
      fecharDetalhe();
    }
  });
});