'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('loginuser');
    const password = formData.get('password');

    // Validação básica (exemplo)
    if (username === 'admin' && password === 'admin123') {
      setError('');
      const token = 'meu-token-fake';
      const cookieOptions = { path: '/' };
      if (remember) {
        cookieOptions.expires = 7; // 7 dias
      }
      Cookies.set('authToken', token, cookieOptions);
      router.push('/default');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          name="loginuser"
          placeholder="Usuário"
          className="border p-2 rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          className="border p-2 rounded"
        />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
          Lembrar-me
        </label>
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Entrar
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
