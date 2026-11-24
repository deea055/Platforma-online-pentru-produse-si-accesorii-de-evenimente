
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProdus } from '../api.js'

// Importa formularul pentru personalizarea cadourilor de Craciun.
import PersonalizareCadou from '../components/PersonalizareCadou.jsx'

// Importa editorul pentru personalizarea invitatiei de nunta.
// Editorul contine formularul si previzualizarea in timp real.
import EditorInvitatie from '../components/EditorInvitatie.jsx'

// Etapa 8 - Stilurile locale pentru pagina de detalii.
import styles from './ProdusDetaliuPage.module.css'

// Alege fotografia potrivita pentru pagina de detalii.
// Fotografiile sunt salvate in folderul public/images.
function obtineImagineProdus(produs) {
  // Transformam categoria in litere mici pentru comparare.
  const tip = String(produs.tip || '').toLowerCase()

  // Fotografia pentru cutiile cadou personalizate.
  if (tip.includes('accesor')) {
    return '/images/cutie-cadou.png'
  }

  // Fotografia pentru lumanarile personalizate.
  if (tip.includes('lum')) {
    return '/images/lumanare-produs.png'
  }

  // Pentru celelalte categorii nu afisam fotografie.
  return null
}

// Etapa 8 - Pagina cu detaliile unui produs.
function ProdusDetaliuPage() {
  // Preia ID-ul produsului din adresa paginii.
  const { id } = useParams()

  // Pastreaza produsul incarcat si ID-ul pentru care a fost citit.
  const [dateProdus, setDateProdus] = useState({
    id: null,
    produs: null,
    error: null,
  })

  // Verifica daca datele apartin produsului din adresa curenta.
  const loading = dateProdus.id !== id
  const produs = loading ? null : dateProdus.produs
  const error = loading ? null : dateProdus.error

  // Verifica daca produsul este invitatia de nunta.
  const esteInvitatie =
    produs?.nume?.trim().toLowerCase() === 'invitație de nuntă'

  // Verifica daca produsul este cutia cadou personalizata.
  const esteCadou =
    produs?.nume?.trim().toLowerCase() ===
    'cutie cadou personalizată'

  // Obtine fotografia pentru cadouri sau lumanari.
  const imagineProdus =
    produs && !esteInvitatie
      ? obtineImagineProdus(produs)
      : null

  // Incarca produsul selectat de pe server.
  useEffect(() => {
    let ignore = false

    async function incarcaProdus() {
      try {
        // Foloseste functia comuna din api.js.
        const date = await fetchProdus(id)

        if (!ignore) {
          setDateProdus({
            id,
            produs: date,
            error: null,
          })
        }
      } catch (err) {
        // Afiseaza eroarea daca produsul nu exista.
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

    // Ignora raspunsurile vechi daca se schimba produsul.
    return () => {
      ignore = true
    }
  }, [id])

  return (
    <section
      className={`${styles.panel} ${esteCadou ? styles.panelCadou : ''}`}
    >

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

          {/* Numele produsului */}
          <h2 data-testid="detail-title">
            {produs.nume}
          </h2>

          {/* Categoria produsului */}
          <p>
            <strong>Tip produs:</strong> {produs.tip}
          </p>

          {/* Disponibilitatea produsului */}
          <p>
            <strong>Disponibilitate:</strong>{' '}
            {produs.indisponibil
              ? 'Indisponibil'
              : 'Disponibil'}
          </p>

          {/* ID-ul produsului */}
          <p>
            <strong>ID produs:</strong> {produs.id}
          </p>

          {/* Pentru cadouri afisam fotografia si formularul
              unul langa celalalt. */}
          {esteCadou ? (
            <div className={styles.cadouLayout}>

              {/* Coloana din stanga - Fotografia cadourilor */}
              <div className={styles.cadouImagine}>
                <img
                  src={imagineProdus}
                  alt={produs.nume}
                  className={styles.imagineProdus}
                />
              </div>

              {/* Coloana din dreapta - Formularul */}
              <div className={styles.cadouFormular}>
                <PersonalizareCadou produs={produs} />
              </div>

            </div>
          ) : (
            /* Pentru lumanari pastram fotografia centrata. */
            imagineProdus && (
              <div className={styles.imagineContainer}>
                <img
                  src={imagineProdus}
                  alt={produs.nume}
                  className={styles.imagineProdus}
                />
              </div>
            )
          )}

          {/* Editorul original pentru invitatia de nunta.
              Nu modificam formularul sau previzualizarea. */}
          {esteInvitatie && (
            <EditorInvitatie />
          )}

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
