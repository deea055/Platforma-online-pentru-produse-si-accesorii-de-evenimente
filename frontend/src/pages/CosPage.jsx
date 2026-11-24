
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Importa stilurile pentru pagina cosului.
import styles from './CosPage.module.css'

// Pagina cosului de cumparaturi Event Boutique.
function CosPage() {

  // Citeste produsele salvate in localStorage.
  // Daca nu exista produse, foloseste o lista goala.
  const [cos, setCos] = useState(() => {
    try {
      const dateSalvate = JSON.parse(
        localStorage.getItem('eventBoutiqueCos') || '[]'
      )

      return Array.isArray(dateSalvate) ? dateSalvate : []
    } catch {
      // Evita erorile daca datele salvate sunt invalide.
      return []
    }
  })

  // Salveaza lista actualizata in browser.
  // Actualizeaza si produsele afisate pe pagina.
  function actualizeazaCos(cosNou) {
    try {
      localStorage.setItem(
        'eventBoutiqueCos',
        JSON.stringify(cosNou)
      )

      setCos(cosNou)
    } catch {
      alert('Cosul nu a putut fi actualizat.')
    }
  }

  // Mareste cantitatea unui produs cu o bucata.
  function maresteCantitate(id) {
    const cosNou = cos.map((produs) =>
      String(produs.id) === String(id)
        ? {
            ...produs,
            cantitate: Number(produs.cantitate) + 1,
          }
        : produs
    )

    actualizeazaCos(cosNou)
  }

  // Micsoreaza cantitatea, dar nu sub o bucata.
  function micsoreazaCantitate(id) {
    const cosNou = cos.map((produs) =>
      String(produs.id) === String(id)
        ? {
            ...produs,
            cantitate: Math.max(
              1,
              Number(produs.cantitate) - 1
            ),
          }
        : produs
    )

    actualizeazaCos(cosNou)
  }

  // Elimina un produs din cos.
  function eliminaProdus(id) {
    const cosNou = cos.filter(
      (produs) => String(produs.id) !== String(id)
    )

    actualizeazaCos(cosNou)
  }

  // Calculeaza numarul total de bucati din cos.
  const totalProduse = cos.reduce(
    (total, produs) =>
      total + (Number(produs.cantitate) || 0),
    0
  )

  return (
    <section
      style={{
        // Pastreaza pagina lata si produsele pe orizontala.
        width: 'min(95vw, 1100px)',
        maxWidth: '1100px',
        flex: '0 0 auto',
        alignSelf: 'center',

        // Centreaza pagina fata de fereastra browserului.
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',

        // Pastreaza aspectul roz elegant.
        margin: '40px 0',
        padding: '35px',
        background: '#fff9fa',
        border: '1px solid #efd7dd',
        borderRadius: '16px',
        boxSizing: 'border-box',
      }}
    >

      {/* Titlul paginii cu font caligrafic */}
      <h2
        className={styles.titlu}
        style={{
          textAlign: 'center',
          marginBottom: '15px',
        }}
      >
        Cosul meu
      </h2>

      {/* Numarul total de produse din cos */}
      <p
        className={styles.subtitlu}
        style={{
          textAlign: 'center',
          marginBottom: '30px',
        }}
      >
        Ai {totalProduse} produse in cos.
      </p>

      {/* Mesajul pentru cosul gol */}
      {cos.length === 0 ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          <p className={styles.subtitlu}>
            Cosul tau este momentan gol.
          </p>

          <Link to="/" className={styles.continua}>
            Continua cumparaturile
          </Link>
        </div>
      ) : (

        // Afiseaza produsele salvate in cos.
        <div style={{ width: '100%' }}>

          {cos.map((produs) => (
            <div
              key={produs.id}
              style={{
                // Fiecare produs ocupa un rand orizontal.
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',

                // Pastreaza cardurile late si elegante.
                width: '100%',
                padding: '22px 25px',
                marginBottom: '15px',
                background: '#ffffff',
                border: '1px solid #efd7dd',
                borderRadius: '12px',
                boxSizing: 'border-box',
              }}
            >

              {/* Informatiile produsului sunt in stanga */}
              <div
                style={{
                  flex: '1 1 220px',
                  minWidth: '0',
                }}
              >
                {/* Numele produsului cu font elegant */}
                <h3
                  className={styles.numeProdus}
                  style={{
                    margin: '0 0 8px',
                  }}
                >
                  {produs.nume}
                </h3>

                {/* Categoria produsului */}
                <p
                  className={styles.categorie}
                  style={{
                    margin: 0,
                  }}
                >
                  Categoria: {produs.tip}
                </p>
              </div>

              {/* Zona pentru modificarea cantitatii */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                }}
              >

                {/* Butonul pentru scaderea cantitatii */}
                <button
                  type="button"
                  className={styles.butonCantitate}
                  onClick={() =>
                    micsoreazaCantitate(produs.id)
                  }
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#fff1f5',
                    color: '#743d50',
                    border: '1px solid #d992a9',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>

                {/* Cantitatea actuala */}
                <span
                  className={styles.cantitate}
                  style={{
                    minWidth: '25px',
                    textAlign: 'center',
                  }}
                >
                  {produs.cantitate}
                </span>

                {/* Butonul pentru cresterea cantitatii */}
                <button
                  type="button"
                  className={styles.butonCantitate}
                  onClick={() =>
                    maresteCantitate(produs.id)
                  }
                  style={{
                    width: '40px',
                    height: '40px',
                    background: '#fff1f5',
                    color: '#743d50',
                    border: '1px solid #d992a9',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>

              {/* Butonul pentru eliminarea produsului */}
              <button
                type="button"
                className={styles.butonElimina}
                onClick={() => eliminaProdus(produs.id)}
                style={{
                  padding: '12px 24px',
                  background: '#c18094',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '25px',
                  cursor: 'pointer',
                }}
              >
                Elimina
              </button>

            </div>
          ))}

          {/* Totalul produselor din cos */}
          <div
            className={styles.total}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 10px',
              borderTop: '1px solid #efd7dd',
            }}
          >
            <span>Total produse</span>
            <span>{totalProduse}</span>
          </div>

          {/* Link pentru intoarcerea la pagina principala */}
          <div
            style={{
              textAlign: 'center',
              marginTop: '25px',
            }}
          >
            <Link
              to="/"
              className={styles.continua}
            >
              Continua cumparaturile
            </Link>
          </div>

        </div>
      )}

    </section>
  )
}

export default CosPage
