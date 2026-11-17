
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProdus } from '../api.js'

// Etapa 8 - Stilurile locale pentru pagina de detalii
import styles from './ProdusDetaliuPage.module.css'

// Etapa 8 - Pagina cu detaliile unui produs
function ProdusDetaliuPage() {
  // Preia ID-ul produsului din adresa paginii
  const { id } = useParams()

  // Pastreaza produsul incarcat si ID-ul pentru care a fost citit
  const [dateProdus, setDateProdus] = useState({
    id: null,
    produs: null,
    error: null,
  })

  // Verifica daca datele apartin produsului din adresa curenta
  const loading = dateProdus.id !== id
  const produs = loading ? null : dateProdus.produs
  const error = loading ? null : dateProdus.error

  // Incarca produsul selectat de pe server
  useEffect(() => {
    let ignore = false

    async function incarcaProdus() {
      try {
        // Foloseste functia comuna din api.js
        const date = await fetchProdus(id)

        if (!ignore) {
          setDateProdus({
            id,
            produs: date,
            error: null,
          })
        }
      } catch (err) {
        // Afiseaza eroarea daca produsul nu exista
        if (!ignore) {
          setDateProdus({
            id,
            produs: null,
            error: err.message,
          })
        }
      }
    }

    incarcaProdus()

    // Ignora raspunsurile vechi daca se schimba produsul
    return () => {
      ignore = true
    }
  }, [id])

  return (
    <section className={styles.panel}>

      {/* Mesaj afisat in timpul incarcarii */}
      {loading && (
        <p className="info" data-testid="loading">
          Se incarca detaliile produsului...
        </p>
      )}

      {/* Mesaj afisat daca produsul nu exista */}
      {error && (
        <p className="error" data-testid="error">
          Eroare: {error}
        </p>
      )}

      {/* Detaliile produsului incarcat */}
      {!loading && !error && produs && (
        <div data-testid="detail">
          <h2 data-testid="detail-title">
            {produs.nume}
          </h2>

          <p>
            <strong>Tip produs:</strong> {produs.tip}
          </p>

          <p>
            <strong>Disponibilitate:</strong>{' '}
            {produs.indisponibil
              ? 'Indisponibil'
              : 'Disponibil'}
          </p>

          <p>
            <strong>ID produs:</strong> {produs.id}
          </p>
        </div>
      )}

      {/* Link pentru revenirea la lista produselor */}
      <Link to="/" className={styles.backLink}>
        Inapoi la produse
      </Link>

    </section>
  )
}

export default ProdusDetaliuPage
