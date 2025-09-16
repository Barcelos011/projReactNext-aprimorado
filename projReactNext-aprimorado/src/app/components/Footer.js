'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700 mt-8">
      <div className="container mx-auto p-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Meu App — Feito por você
      </div>
    </footer>
  );
}
