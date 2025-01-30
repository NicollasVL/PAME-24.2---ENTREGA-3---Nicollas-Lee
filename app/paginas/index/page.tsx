"use client";

import React, { useState } from 'react';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/CadastroModal';

const HomePage: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">Aluga aí</div>
          <div className="flex space-x-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => setIsRegisterModalOpen(true)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Cadastro
            </button>
          </div>
        </div>
      </header>

      {/* Conteúdo da Página */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-8">Bem-vindo à Página Inicial</h1>
        <p className="text-center text-gray-600 mt-4">
          Esta é a página inicial do seu site.
        </p>
      </div>

      {/* Modal de Login */}
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}

      {/* Modal de Cadastro */}
      {isRegisterModalOpen && (
        <RegisterModal onClose={() => setIsRegisterModalOpen(false)} />
      )}
    </div>
  );
};

export default HomePage;