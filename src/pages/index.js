import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { findSolution } from '@/logic/search';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [search, setSearch] = useState('');
  const [solution, setSolution] = useState('');

  useEffect(() => {setSolution(findSolution(search));}, [search]);
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 class="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">Sei fottuto?</h1>
        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">Può essere difficoltoso studiare tipo 200 domande in 2 giorni. Tranquillo cerca la domanda qui</p>
        <input
        type="text"
        class="mt-6 w-full pl-10 pr-4 py-2 rounded-lg justify-between bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5  focus:outline-none"
        placeholder="Inserisci il testo della domanda (in inglese)..."
        value={search}
        onChange={(text) => setSearch(text.target.value)}
      />

      </div>

      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        
      {solution}
      </div>
    </main>
  )
}
