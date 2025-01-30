"use client";

import Link from 'next/link';

const SideBar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-screen bg-blue-600 text-white transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
    >
      {/* Botão para fechar a SideBar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-2xl hover:text-gray-200"
      >
        ✕
      </button>

      {/* Conteúdo da SideBar */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <nav className="space-y-2">
          <Link href="/paginas/index" className="block hover:text-gray-200 transition duration-300">
            Início
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;