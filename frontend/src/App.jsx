
import { useState, useEffect } from 'react'
import './App.css'
import ProdusCard from './components/ProdusCard'

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
  const [produse, setProduse] = useState(() => {
  const salvate = localStorage.getItem('produse')
  return salvate ? JSON.parse(salvate) : produseInitiale
})
useEffect(() => {
  localStorage.setItem('produse', JSON.stringify(produse))
}, [produse])
  const [nume, setNume] = useState('')
  const [tip, setTip] = useState('Invitații')
  const [cautare, setCautare] = useState('')

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
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="header-symbol">♡♡</div>
          <h1>Event Boutique</h1>
          <p>
            PRODUSE ȘI ACCESORII PENTRU MOMENTE SPECIALE
          </p>
        </div>
      </header>

      <main className="container">
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

          {/* Lista produselor */}
          {produse.length === 0 ? (
            <p>Nu există produse.</p>
          ) : produseFiltrate.length === 0 ? (
            <p>Nu s-au găsit produse.</p>
          ) : (
            <ul className="item-list">
              {produseFiltrate.map((produs) => (
                <ProdusCard
                  key={produs.id}
                  produs={produs}
                  schimbaDisponibilitate={schimbaDisponibilitate}
                  stergeProdus={stergeProdus}
                />
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="app-footer">
        Proiect Tehnologii Web - Event Boutique
      </footer>
    </>
  )
}

export default App
