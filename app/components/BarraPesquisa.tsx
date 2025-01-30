"use client";

import React, { useState } from 'react';

const BarraPesquisa: React.FC = () => {
  const [localizacao, setLocalizacao] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [hospedes, setHospedes] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg flex flex-col sm:flex-row gap-4 items-end w-full max-w-4xl mx-auto"
    >
      {/* Campo de Localização */}
      <div className="w-full sm:w-1/3">
        <label htmlFor="localizacao" className="block text-sm font-medium text-neutral-700">
          Localização
        </label>
        <input
          type="text"
          id="localizacao"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
          placeholder="Para onde você vai?"
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholer:text-neutral-500"
        />
      </div>

      {/* Campo de Check-in */}
      <div className="w-full sm:w-1/4">
        <label htmlFor="checkIn" className="block text-sm font-medium text-neutral-700">
          Check-in
        </label>
        <input
          type="date"
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-500"
        />
      </div>

      {/* Campo de Check-out */}
      <div className="w-full sm:w-1/4">
        <label htmlFor="checkOut" className="block text-sm font-medium text-neutral-700">
          Check-out
        </label>
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-500"
        />
      </div>

      {/* Campo de Número de Hóspedes */}
      <div className="w-full sm:w-1/6">
        <label htmlFor="hospedes" className="block text-sm font-medium text-neutral-700">
          Hóspedes
        </label>
        <input
          type="number"
          id="hospedes"
          value={hospedes}
          onChange={(e) => setHospedes(Number(e.target.value))}
          min="1"
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-neutral-500"
        />
      </div>

      {/* Botão de Pesquisa */}
      <button
        type="submit"
        className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Pesquisar
      </button>
    </form>
  );
};

export default BarraPesquisa;