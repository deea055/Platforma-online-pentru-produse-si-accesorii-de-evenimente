
import { useState, useEffect } from 'react'
import './App.css'

// Componentele existente pentru afisarea produselor
import ProdusList from './components/ProdusList'

// Etapa 7 - Componenta noua pentru formular
import ProdusForm from './components/ProdusForm'

// Etapa 7 - Functiile pentru comunicarea cu serverul
import {
  fetchProduse,
  createProdus,
  updateProdus,
  deleteProdus,
} from './api.js'

function App() {
  // Etapa 6 - Produsele sunt incarcate de pe server
  const [produse, setProduse] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Etapa 4 - State pentru cautarea produselor
  const [cautare, setCautare] = useState('')

  // Etapa 5 - Modul luminos/intunecat
  const [darkMode, setDarkMode] = useState(false)

  // Etapa 6 - Incarcarea produselor din API
  useEffect(() => {
    let ignore = false

    async function incarcaProduse() {
      try {
        // Cere produsele salvate pe server
        const date = await fetchProduse()

        if (!ignore) {
          setProduse(date)
          setError(null)
        }
      } catch (err) {
        // Afiseaza eroarea daca serverul nu raspunde
        if (!ignore) {
          setError(err.message)
        }
      } finally {
        // Opreste mesajul de incarcare
        if (!ignore) {
          setLoading(false)
        }
      }
    }

    incarcaProduse()

    return () => {
      ignore = true
    }
  }, [])

  // Etapa 5 - Schimbarea temei aplicatiei
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  // Etapa 7 - Adaugarea unui produs pe server
  async function adaugaProdus(produsNou) {
    // Trimite produsul catre API
    const produsSalvat = await createProdus(produsNou)

    // Adauga produsul in lista doar dupa salvare
    // ID-ul produsului este primit de la server
    setProduse((listaVeche) => [
      ...listaVeche,
      produsSalvat,
    ])

    // Sterge o eventuala eroare anterioara
    setError(null)
  }

  // Etapa 7 - Schimbarea disponibilitatii pe server
  async function schimbaDisponibilitate(id) {
    // Cauta produsul selectat
    const produs = produse.find((p) => p.id === id)

    if (!produs) return

    try {
      // Trimite noua disponibilitate catre server
      const produsActualizat = await updateProdus(id, {
        indisponibil: !produs.indisponibil,
      })

      // Modifica lista doar dupa raspunsul serverului
      setProduse((listaVeche) =>
        listaVeche.map((p) =>
          p.id === id ? produsActualizat : p
        )
      )

      setError(null)
    } catch (err) {
      // Daca apare o eroare, produsul ramane nemodificat
      setError(err.message)
    }
  }

  // Etapa 7 - Stergerea unui produs de pe server
  async function stergeProdus(id) {
    try {
      // Cere serverului sa stearga produsul
      await deleteProdus(id)

      // Elimina produsul din lista dupa confirmare
      setProduse((listaVeche) =>
        listaVeche.filter((produs) => produs.id !== id)
      )

      setError(null)
    } catch (err) {
      // Afiseaza eroarea daca stergerea nu reuseste
      setError(err.message)
    }
  }

  // Etapa 4 - Filtrarea produselor dupa nume
  const produseFiltrate = produse.filter((produs) =>
    produs.nume.toLowerCase().includes(cautare.toLowerCase())
  )

  // Etapa 4 - Numarul produselor disponibile
  const disponibile = produse.filter(
    (produs) => !produs.indisponibil
  ).length

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>

      {/* Banner principal Event Boutique */}
      <header className="app-header">
        <div className="header-content">

          {/* Etapa 5 - Buton pentru schimbarea temei */}
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setDarkMode((modAnterior) => !modAnterior)}
            aria-pressed={darkMode}
          >
            {darkMode ? '☀️ Mod luminos' : '🌙 Mod intunecat'}
          </button>

          <div className="header-symbol">♡♡</div>

          <h1>Event Boutique</h1>

          <p>
            PRODUSE SI ACCESORII PENTRU MOMENTE SPECIALE
          </p>

        </div>
      </header>

      {/* Continutul aplicatiei */}
      <main className="container">

        {/* Etapa 7 - Formular pentru adaugarea produselor */}
        <section className="panel">
          <h2>Adauga produs</h2>

          {/* Formularul nou cu validare si salvare pe server */}
          <ProdusForm onAdd={adaugaProdus} />
        </section>

        {/* Lista produselor - pastrata din etapele anterioare */}
        <section className="panel">
          <h2>Produsele noastre</h2>

          {/* Etapa 4 - Bara de cautare */}
          <input
            className="search-input"
            type="text"
            placeholder="Cauta un produs..."
            value={cautare}
            onChange={(e) => setCautare(e.target.value)}
          />

          {/* Etapa 6 - Mesaj de incarcare */}
          {loading && (
            <p className="info" data-testid="loading">
              Se incarca produsele...
            </p>
          )}

          {/* Etapa 6 - Mesaj de eroare */}
          {error && (
            <p className="error" data-testid="error">
              Eroare: {error}.
              Verifica daca ai pornit npm run api.
            </p>
          )}

          {/* Afisarea produselor dupa incarcare */}
          {!loading && (
            <>
              {/* Etapa 4 - Contor produse */}
              <p className="app-count">
                {produse.length}{' '}
                {produse.length === 1 ? 'produs' : 'produse'},
                dintre care {disponibile}{' '}
                {disponibile === 1
                  ? 'disponibil'
                  : 'disponibile'}
              </p>

              {/* Lista produselor cu functiile CRUD */}
              <ProdusList
                produse={produseFiltrate}
                schimbaDisponibilitate={schimbaDisponibilitate}
                stergeProdus={stergeProdus}
              />
            </>
          )}
        </section>

      </main>

      {/* Subsolul aplicatiei */}
      <footer className="app-footer">
        Proiect Tehnologii Web - Event Boutique
      </footer>

    </div>
  )
}

export default App
