"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter(); // Instância do useRouter

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);

    router.push('/paginas/index');
  };

  const handleGoogleLogin = () => {
    console.log('Logando com Google...');

    router.push('/paginas/index');
  };

  const handleFacebookLogin = () => {
    console.log('Logando com Facebook...');

    router.push('/pagina/index');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
        <input
          type="email"
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleLogin} // Função de login
        >
          Entrar
        </button>

        {/* Div com "------ ou conecte com -------" */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">ou conecte com</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Botões do Google e Facebook com imagens da pasta public */}
        <div className="flex justify-center gap-4">
          <button
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
            aria-label="Conectar com Google"
            onClick={handleGoogleLogin} // Função de login com Google
          >
            <img
              src="/icons/google.png" // Caminho da imagem na pasta public
              alt="Google"
              className="w-6 h-6"
            />
          </button>
          <button
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300"
            aria-label="Conectar com Facebook"
            onClick={handleFacebookLogin} // Função de login com Facebook
          >
            <img
              src="/icons/facebook.png" // Caminho da imagem na pasta public
              alt="Facebook"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Link para cadastro */}
        <p className="mt-6 text-center text-gray-600">
          Não tem uma conta?{' '}
          <Link href="/paginas/cadastro" className="text-blue-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;