"use client";

import React, { useState } from 'react';
import Header from '../../components/Header';
import AnuncioCard from '../../components/Anuncio';
import BarraPesquisa from '../../components/BarraPesquisa';

const HomePage: React.FC = () => {

  // Dados simulados dos anúncios
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
  
    // Aqui adicionamos os anúncios, obs: adicionar tambem em anuncio/[id]
  ];
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Conteúdo da Página */}
      <div className="container mx-auto p-4">
        {/* Barra de Pesquisa */}
        <div className="container mx-auto p-4">
        <BarraPesquisa />
        </div>

        {/* Lista de Anúncios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {anuncios.map((anuncio) => (
            <AnuncioCard
              key={anuncio.id}
              id={anuncio.id}
              imagemCapa={anuncio.imagemCapa}
              titulo={anuncio.titulo}
              localizacao={anuncio.localizacao}
              preco={anuncio.preco}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default HomePage;