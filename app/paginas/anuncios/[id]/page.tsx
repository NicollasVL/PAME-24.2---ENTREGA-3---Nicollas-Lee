"use client";

import { useRouter, useParams } from 'next/navigation';
import React from 'react';
import Header from '../../../components/Header';

const anuncios = [
    {
      id: 1,
      imagemCapa: '/icons/casa_acon_sp1.png',
      imagensSec: [
        '/icon/casa_acon_sp2.png',
        '/icons/casa_acon_sp3.png',
      
      ],
      titulo: 'Casa aconchegante no centro',
      localizacao: 'São Paulo, SP',
      preco: 2828,
      descricao: 'Esta casa aconchegante no centro de São Paulo oferece conforto e praticidade. Possui 3 quartos, 2 banheiros, cozinha equipada e área de lazer.',
      detalhes:
      {
        quartos: 3,
        banheiro: 2,
        area: '100m²',
      }
    },
    {
      id: 2,
      imagemCapa: '/icons/casa_montanha1.png',
      imagensSec: [
        '/icons/casa_montanha2.png',
        '/icons/casa_montanha3.png',
        
      ],
      titulo: 'Chalé aconchegante nas montanhas',
      localizacao: 'Gramado, RS',
      preco: 1000,
      descricao: 'Este chalé nas montanhas é perfeito para quem busca tranquilidade e contato com a natureza. Possui lareira, varanda com vista e 2 quartos.',
      detalhes:
      {
        quartos: 2,
        banheiro: 1,
        area: '50m²',
      }
    },

    {
      id: 3,
      imagemCapa: '/icons/nit_1.png',
      imagensSec: [
        '/icons/nit_2.png',
        '/icons/nit_3.png',
        
      ],
      titulo: 'Apartamento na praia',
      localizacao: 'Niterói, RJ',
      preco: 1500,
      descricao: 'Uma bela vista para a praia! Um trajeto de no máximo 5 minutos para chegar no calçadão. Vale super à pena trazer sua família ou amigos.',
      detalhes:
      {
        quartos: 3,
        banheiros: 2,
        area: '95m²'

      }
    },

    {
      id: 4,
      imagemCapa: '/icons/rio_1.png',
      imagensSec: [
        '/icons/rio_2.png',
        
      ],
      titulo: 'Apartamento na praia ',
      localizacao: 'Rio de janeiro, RJ',
      preco: 2700,
      descricao: '',
      detalhes:
      {
        quartos: 3,
        banheiros: 3,
        area:'114m²'
      }
    },
    {
        id: 5,
        imagemCapa: '/icons/quarto_beliche.jpeg',
        imagensSec: [
            '/icons/Area_externa.jpeg',
            '/icons/banheiro.jpeg',
            '/icons/cozinha.jpeg',
            '/icons/escritorio.jpeg',
          
        ],
        titulo: 'Casa',
        localizacao: 'Rio de janeiro, RJ',
        preco: 2000,
        descricao: "a casa tem dois quartos, um de casal e outro com beliche. ambos os quartos tem televisão, escrivaninha para trabalhar e ar condicionado",
        detalhes:
        {
          quartos: 2,
          banheiros: 1,
          area:'107,06m²'
        }
      },
    
    
    // Aqui adicionamos os anúncios
  ];

export default function InfoCasa() {
  const router = useRouter();
  const params = useParams();
  const anuncio = anuncios.find((a) => a.id === Number(params.id));

  if (!anuncio) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <div className="container mx-auto p-6">
          <p className="text-center text-gray-700 text-lg">Anúncio não encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-6">
        {/* Botão "Voltar" */}
        <button
          onClick={() => router.back()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 transition hover:bg-blue-700"
        >
          Voltar
        </button>

        {/* Card de Detalhes */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Imagem de Capa */}
          <img src={anuncio.imagemCapa} alt={anuncio.titulo} className="w-full h-64 object-cover" />

          {/* Imagens Secundárias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {anuncio.imagensSec.map((imagem, index) => (
              <img
                key={index}
                src={imagem}
                alt={`Imagem ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Detalhes do Anúncio */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-black">{anuncio.titulo}</h1>
            <p className="text-gray-500 text-lg">{anuncio.localizacao}</p>
            <p className="text-2xl font-semibold mt-4 text-blue-700">
              R$ {anuncio.preco.toLocaleString()}/mês
            </p>

            {/* Descrição */}
            <p className="mt-4 text-gray-600 leading-relaxed">{anuncio.descricao}</p>

            {/* Detalhes Adicionais */}
            <div className="mt-6 border-t pt-4">
              <h2 className="text-xl font-semibold text-blue-700">Detalhes</h2>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li>🛏 Quartos: {anuncio.detalhes.quartos}</li>
                <li>🚿 Banheiros: {anuncio.detalhes.banheiros}</li>
                <li>📏 Área: {anuncio.detalhes.area}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
