'use client';

import { useState } from 'react';

export function ParamCard({ title, description, extra }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-4 rounded shadow bg-white dark:bg-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>

      {open && extra && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {extra}
        </div>
      )}

      <button
        onClick={() => setOpen(o => !o)}
        className="mt-3 text-sm px-3 py-1 border rounded"
      >
        {open ? 'Mostrar menos' : 'Mostrar mais'}
      </button>
    </div>
  );
}

export function ParamList({ items = [] }) {
  const [query, setQuery] = useState('');
  const filtered = items.filter(i => i.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filtrar..."
        className="w-full border p-2 rounded mb-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
      />
      <ul className="space-y-2">
        {filtered.map((it, idx) => (
          <li key={idx} className="p-2 border rounded text-sm text-gray-700 dark:text-gray-300">
            {it}
          </li>
        ))}
        {filtered.length === 0 && <li className="text-gray-500 dark:text-gray-400">Nenhum item.</li>}
      </ul>
    </div>
  );
}
