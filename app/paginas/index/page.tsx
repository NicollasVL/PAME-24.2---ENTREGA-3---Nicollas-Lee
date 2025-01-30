"use client";

import React, { useState } from 'react';
import Header from '../../components/Header'
import AnuncioCard from '../../components/Anuncio';
import BarraPesquisa from '../../components/BarraPesquisa';

const HomePage: React.FC = () => {

  // Dados simulados dos anúncios
  const anuncios = [
    {
      id: 1,
      imagemCapa: 'icons/casa_acon_sp1.png',
      imagensSec: [
        'icon/casa_acon_sp2.png',
        'icons/casa_acon_sp3.png',
      
      ],
      titulo: 'Casa aconchegante no centro',
      localizacao: 'São Paulo, SP',
      preco: 2828,
    },
    {
      id: 2,
      imagemCapa: 'icons/casa_montanha1.png',
      imagensSec: [
        'icons/casa_montanha2.png',
        'icons/casa_montanha3.png',
        
      ],
      titulo: 'Chalé aconchegante nas montanhas',
      localizacao: 'Gramado, RS',
      preco: 1000,
    },

    {
      id: 3,
      imagemCapa: 'icons/nit_1.png',
      imagensSec: [
        'icons/nit_2.png',
        'icons/nit_3.png',
        
      ],
      titulo: 'Apartamento na praia',
      localizacao: 'Niterói, RJ',
      preco: 1500,
    },

    {
      id: 4,
      imagemCapa: 'icons/rio_1.png',
      imagensSec: [
        'icons/rio_2.png',
        
      ],
      titulo: 'Apartamento na praia ',
      localizacao: 'Rio de janeiro, RJ',
      preco: 2000,
    },
    // Aqui adicionamos os anúncios
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