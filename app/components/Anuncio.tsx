"use client";

import React from 'react';
import Link from 'next/link';

interface AnuncioCardProps {
  id: number;
  imagemCapa: string;
  titulo: string;
  localizacao: string;
  preco: number;
}

const AnuncioCard: React.FC<AnuncioCardProps> = ({ id, imagemCapa, titulo, localizacao, preco }) => {
  return (
    <Link href={`/anuncios/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
        <img src={imagemCapa} alt={titulo} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{titulo}</h2>
          <p className="text-zinc-950">{localizacao}</p>
          <p className="text-lg font-bold mt-2">R$ {preco.toLocaleString()}/mês</p>
        </div>
      </div>
    </Link>
  );
};

export default AnuncioCard;