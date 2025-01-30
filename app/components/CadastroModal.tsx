"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface RegisterModalProps {
  onClose: () => void; // Função para fechar o modal
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const router = useRouter();

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);

    router.push('/paginas/index');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Botão para fechar o modal */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center text-black">Cadastrar-se</h1>

        {/* Campo Nome */}
        <input
          type="text"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Cadastrar nome de usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Campo Email */}
        <input
          type="email"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Campo Senha */}
        <input
          type="password"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Campo Confirmar Senha */}
        <input
          type="password"
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Confirmar senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Botão de Registro */}
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleRegister}
        >
          Registrar
        </button>

        {/* Link para Login */}
        <p className="mt-6 text-center text-gray-600">
          Já tem uma conta?{' '}
          <Link href="/paginas/login" className="text-blue-600 hover:underline">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterModal;