"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
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
    // Aqui você pode adicionar a lógica de registro

    // Redireciona para a página Home após o registro
    router.push('/paginas/index');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
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

export default Register;