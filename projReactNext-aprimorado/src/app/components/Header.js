'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from '../../context/ThemeContext';

export default function Header() {
  const router = useRouter();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">Meu App</h1>
          <nav className="hidden md:flex gap-3">
            <button onClick={() => router.push('/')} className="hover:underline text-sm text-gray-700 dark:text-gray-200">Home</button>
            <Link href="/default" className="text-sm text-gray-700 dark:text-gray-200 hover:underline">Default</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-100"
          >
            {isDark ? 'Claro' : 'Escuro'}
          </button>
        </div>
      </div>
    </header>
  );
}
