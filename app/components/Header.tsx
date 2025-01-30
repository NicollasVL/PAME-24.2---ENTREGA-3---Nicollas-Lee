"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SideBar from './SideBar';
import LoginModal from './LoginModal';
import RegisterModal from './CadastroModal';

const Header: React.FC = () => {
  const router = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <>
      {/* SideBar */}
      <SideBar isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} />

      {/* Modais */}
      {isLoginModalOpen && <LoginModal onClose={() => setIsLoginModalOpen(false)} />}
      {isRegisterModalOpen && <RegisterModal onClose={() => setIsRegisterModalOpen(false)} />}

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Ícone da SideBar e Logo */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setIsSideBarOpen(true)}
              className="p-2 rounded-md"
            >
              <img 
                src="/icons/menu.png"
                alt="Menu"
                className="w-6 h-6 filter invert"
              />
            </button>
            <div className="text-xl font-bold">
              <Link href="/paginas/index" className="hover:text-gray-200 transition duration-300">
                Aluga aí
              </Link>
            </div>
          </div>

          {/* Botões de Login e Cadastro */}
          <div className="flex space-x-4">
            <button
              onClick={() => setIsLoginModalOpen(true)}  // 🔹 Abre o modal de login
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => setIsRegisterModalOpen(true)}  // 🔹 Abre o modal de cadastro
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Cadastro
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
