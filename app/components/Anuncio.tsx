"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface AnuncioCardProps {
  id: number;
  imagemCapa: string;
  titulo: string;
  localizacao: string;
  preco: number;
}

const AnuncioCard: React.FC<AnuncioCardProps> = ({ id, imagemCapa, titulo, localizacao, preco }) => {
  const [isFavorito, setIsFavorito] = useState(false); // Estado para controlar o favorito

  const toggleFavorito = (e: React.MouseEvent) => {
    e.preventDefault(); // Evita que o link do card seja acionado
    setIsFavorito(!isFavorito); // Alterna entre favorito e não favorito
  };

  return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 relative">
        {/* Estrela de favorito */}
        <button
          onClick={toggleFavorito}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
        >
          <img
            src={isFavorito ? '/icons/star-filled.png' : '/icons/star.png'} // Alterna entre as imagens
            alt="Favorito"
            className="h-6 w-6" // Tamanho da estrela
          />
        </button>

        {/* Imagem de capa */}
        <img src={imagemCapa} alt={titulo} className="w-full h-48 object-cover" />

        {/* Detalhes do anúncio */}
        <div className="p-4">
          <h2 className="text-xl font-semibold text-black">{titulo}</h2>
          <p className="text-zinc-950 text-black flex items-center">
            {/* Ícone de localização */}
            <img
              src="/icons/gps.png"
              alt="pin-local"
              className="h-4 w-4 mr-2"
            />
            {localizacao}
          </p>
          <p className="text-lg font-bold mt-2 text-black">R$ {preco.toLocaleString()}/mês</p>

          {/* Botão "Alugue aí" e link "Ver mais" */}
          <div className="mt-4 flex justify-between items-center">
            {/* Botão "Alugue aí" */}
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={(e) => {
                e.preventDefault(); // Evita que o link do card seja acionado
                alert(`Alugando: ${titulo}`); // Ação temporária (substitua pela lógica de aluguel)
              }}
            >
              Alugue aí
            </button>

            {/* Link "Ver mais" */}
            <Link
              href={`/paginas/anuncios/${id}`} // Caminho de rota dinamica
              className="text-blue-600 hover:underline"
              onClick={(e) => e.stopPropagation()} // Evita que o link do card seja acionado
            >
              Ver mais
            </Link>
          </div>
        </div>
      </div>
    
  );
};

export default AnuncioCard;