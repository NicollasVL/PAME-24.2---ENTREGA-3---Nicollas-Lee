"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import SideBar from './SideBar';

const Header: React.FC = () => {
  const router = useRouter();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false); // Estado para controlar a SideBar

  return (
    <>
      {/* SideBar */}
      <SideBar isOpen={isSideBarOpen} onClose={() => setIsSideBarOpen(false)} />

      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Ícone da SideBar e Logo */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setIsSideBarOpen(true)} // Abre a SideBar
              className="text-2xl hover:text-gray-200 transition duration-300"
            >
              ☰
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
              onClick={() => router.push('/paginas/login')}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Login
            </button>
            <button
              onClick={() => router.push('/paginas/cadastro')}
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