
import { useState, useEffect } from 'react'

// Componentele existente din Etapa 7
import ProdusList from '../components/ProdusList'
import ProdusForm from '../components/ProdusForm'

// Functiile pentru comunicarea cu serverul
import {
  fetchProduse,
  createProdus,
  updateProdus,
  deleteProdus,
} from '../api.js'

// Etapa 8 - Stilurile locale ale paginii Produse
import styles from './ProdusePage.module.css'

// Pagina principala cu formularul si lista produselor
function ProdusePage() {
  // Produsele sunt incarcate de pe server
  const [produse, setProduse] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Textul introdus in bara de cautare
  const [cautare, setCautare] = useState('')

  // Incarca produsele din API la deschiderea paginii
  useEffect(() => {
    let ignore = false

    async function incarcaProduse() {
      try {
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

  // Adauga produsul doar dupa salvarea pe server
  async function adaugaProdus(produsNou) {
    const produsSalvat = await createProdus(produsNou)

    setProduse((listaVeche) => [
      ...listaVeche,
      produsSalvat,
    ])

    setError(null)
  }

  // Schimba disponibilitatea si salveaza modificarea
  async function schimbaDisponibilitate(id) {
    const produs = produse.find((p) => p.id === id)

    if (!produs) return

    try {
      const produsActualizat = await updateProdus(id, {
        indisponibil: !produs.indisponibil,
      })

      setProduse((listaVeche) =>
        listaVeche.map((p) =>
          p.id === id ? produsActualizat : p
        )
      )

      setError(null)
    } catch (err) {
      // Pastreaza produsul nemodificat daca apare o eroare
      setError(err.message)
    }
  }

  // Sterge produsul doar dupa confirmarea serverului
  async function stergeProdus(id) {
    try {
      await deleteProdus(id)

      setProduse((listaVeche) =>
        listaVeche.filter((produs) => produs.id !== id)
      )

      setError(null)
    } catch (err) {
      // Afiseaza eroarea daca stergerea nu reuseste
      setError(err.message)
    }
  }

  // Filtreaza produsele dupa textul cautat
  const produseFiltrate = produse.filter((produs) =>
    produs.nume.toLowerCase().includes(cautare.toLowerCase())
  )

  // Calculeaza numarul produselor disponibile
  const disponibile = produse.filter(
    (produs) => !produs.indisponibil
  ).length

  // Adauga produsul selectat in cosul de cumparaturi.
  // Cosul este salvat separat de produsele din API.
  function adaugaInCos(produs) {
    // Nu permite adaugarea produselor indisponibile.
    if (produs.indisponibil) {
      return
    }

    // Citeste cosul salvat anterior in browser.
    // Daca nu exista un cos, foloseste o lista goala.
    let cosSalvat = []

    try {
      const dateSalvate = JSON.parse(
        localStorage.getItem('eventBoutiqueCos') || '[]'
      )

      // Verifica daca datele salvate reprezinta o lista.
      if (Array.isArray(dateSalvate)) {
        cosSalvat = dateSalvate
      }
    } catch {
      // Daca datele salvate nu sunt valide,
      // porneste de la un cos gol.
      cosSalvat = []
    }

    // Cauta produsul dupa ID in cosul existent.
    const produsExistent = cosSalvat.find(
      (element) => String(element.id) === String(produs.id)
    )

    let cosActualizat

    if (produsExistent) {
      // Daca produsul exista deja in cos,
      // creste cantitatea acestuia cu o bucata.
      cosActualizat = cosSalvat.map((element) =>
        String(element.id) === String(produs.id)
          ? {
              ...element,
              cantitate: (Number(element.cantitate) || 0) + 1,
            }
          : element
      )
    } else {
      // Daca produsul nu exista in cos,
      // il adauga pentru prima data cu cantitatea 1.
      cosActualizat = [
        ...cosSalvat,
        {
          ...produs,
          cantitate: 1,
        },
      ]
    }

    // Salveaza cosul actualizat in localStorage.
    // Produsele raman salvate si dupa reincarcarea paginii.
    try {
      localStorage.setItem(
        'eventBoutiqueCos',
        JSON.stringify(cosActualizat)
      )

      // Confirma utilizatorului ca produsul a fost adaugat.
      alert(`${produs.nume} a fost adaugat in cos!`)
    } catch {
      // Afiseaza un mesaj daca browserul nu permite salvarea.
      alert('Cosul nu a putut fi salvat. Incearca din nou.')
    }
  }

  return (
    <>
      {/* Formularul pentru adaugarea produselor */}
      <section className={styles.panel}>
        <h2>Adauga produs</h2>
        <ProdusForm onAdd={adaugaProdus} />
      </section>

      {/* Lista produselor */}
      <section className={styles.panel}>
        <h2>Produsele noastre</h2>

        {/* Bara de cautare din Etapa 4 */}
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Cauta un produs..."
          value={cautare}
          onChange={(e) => setCautare(e.target.value)}
        />

        {/* Mesaj afisat in timpul incarcarii */}
        {loading && (
          <p className={styles.info} data-testid="loading">
            Se incarca produsele...
          </p>
        )}

        {/* Mesaj afisat daca apare o eroare */}
        {error && (
          <p className={styles.error} data-testid="error">
            Eroare: {error}.
            Verifica daca ai pornit npm run api.
          </p>
        )}

        {/* Afiseaza produsele dupa incarcare */}
        {!loading && (
          <>
            {/* Contorul produselor */}
            <p className={styles.count}>
              {produse.length}{' '}
              {produse.length === 1 ? 'produs' : 'produse'},
              dintre care {disponibile}{' '}
              {disponibile === 1
                ? 'disponibil'
                : 'disponibile'}
            </p>

            {/* Lista produselor cu functiile existente.
                Transmite si functia pentru adaugarea in cos. */}
            <ProdusList
              produse={produseFiltrate}
              schimbaDisponibilitate={schimbaDisponibilitate}
              stergeProdus={stergeProdus}
              adaugaInCos={adaugaInCos}
            />
          </>
        )}
      </section>
    </>
  )
}

export default ProdusePage
