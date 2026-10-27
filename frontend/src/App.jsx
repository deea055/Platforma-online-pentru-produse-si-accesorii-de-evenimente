
import { useState, useEffect } from 'react'
import './App.css'
import ProdusList from './components/ProdusList'

const produseInitiale = [
  {
    id: 1,
    nume: 'Wedding Invitation',
    tip: 'Invitații',
    indisponibil: false,
  },
  {
    id: 2,
    nume: 'Personalized Envelope',
    tip: 'Accesorii',
    indisponibil: true,
  },
  {
    id: 3,
    nume: 'Wedding Ring Mirror',
    tip: 'Accesorii',
    indisponibil: false,
  },
]

function App() {
  // Citirea produselor salvate in localStorage
  const [produse, setProduse] = useState(() => {
    const salvate = localStorage.getItem('produse')
    return salvate ? JSON.parse(salvate) : produseInitiale
  })

  // Salvarea automata a produselor
  useEffect(() => {
    localStorage.setItem('produse', JSON.stringify(produse))
  }, [produse])

  const [nume, setNume] = useState('')
  const [tip, setTip] = useState('Invitații')
  const [cautare, setCautare] = useState('')

  // Etapa 5 - Starea pentru modul luminos/intunecat
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // Adaugarea unui produs
  function adaugaProdus(e) {
    e.preventDefault()

    if (!nume.trim()) return

    const produsNou = {
      id: Date.now(),
      nume: nume.trim(),
      tip: tip,
      indisponibil: false,
    }

    setProduse((listaVeche) => [...listaVeche, produsNou])
    setNume('')
  }

  // Schimbarea disponibilitatii
  function schimbaDisponibilitate(id) {
    setProduse((listaVeche) =>
      listaVeche.map((produs) =>
        produs.id === id
          ? {
              ...produs,
              indisponibil: !produs.indisponibil,
            }
          : produs
      )
    )
  }

  // Stergerea unui produs
  function stergeProdus(id) {
    setProduse((listaVeche) =>
      listaVeche.filter((produs) => produs.id !== id)
    )
  }

  // Filtrarea produselor dupa nume
  const produseFiltrate = produse.filter((produs) =>
    produs.nume.toLowerCase().includes(cautare.toLowerCase())
  )

  // Numarul produselor disponibile
  const disponibile = produse.filter(
    (produs) => !produs.indisponibil
  ).length

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>

      {/* Banner principal Event Boutique */}
      <header className="app-header">
        <div className="header-content">

          {/* Buton pentru schimbarea temei */}
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((modAnterior) => !modAnterior)}
            aria-pressed={darkMode}
          >
            {darkMode ? '☀️ Mod luminos' : '🌙 Mod întunecat'}
          </button>

          <div className="header-symbol">♡♡</div>

          <h1>Event Boutique</h1>

          <p>
            PRODUSE ȘI ACCESORII PENTRU MOMENTE SPECIALE
          </p>

        </div>
      </header>

      {/* Continutul aplicatiei */}
      <main className="container">

        {/* Formular pentru adaugarea produselor */}
        <section className="panel">
          <h2>Adaugă produs</h2>

          <form
            className="item-form"
            onSubmit={adaugaProdus}
          >
            <label>
              Nume produs
              <input
                type="text"
                placeholder="Ex: Invitație de nuntă"
                value={nume}
                onChange={(e) => setNume(e.target.value)}
              />
            </label>

            <label>
              Tip produs
              <select
                value={tip}
                onChange={(e) => setTip(e.target.value)}
              >
                <option>Invitații</option>
                <option>Lumânări</option>
                <option>Accesorii</option>
              </select>
            </label>

            <button type="submit">
              Adaugă
            </button>
          </form>
        </section>

        {/* Lista produselor */}
        <section className="panel">
          <h2>Produsele noastre</h2>

          {/* Bara de cautare */}
          <input
            className="search-input"
            type="text"
            placeholder="Caută un produs..."
            value={cautare}
            onChange={(e) => setCautare(e.target.value)}
          />

          {/* Contor produse */}
          <p className="app-count">
            {produse.length}{' '}
            {produse.length === 1 ? 'produs' : 'produse'},
            dintre care {disponibile}{' '}
            {disponibile === 1
              ? 'disponibil'
              : 'disponibile'}
          </p>

          <ProdusList
            produse={produseFiltrate}
            schimbaDisponibilitate={schimbaDisponibilitate}
            stergeProdus={stergeProdus}
          />
        </section>

      </main>

      <footer className="app-footer">
        Proiect Tehnologii Web - Event Boutique
      </footer>

    </div>
  )
}

export default App
