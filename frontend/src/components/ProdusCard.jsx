
import { Link } from 'react-router-dom'
import styles from './ProdusCard.module.css'

// Etapa 8 - Cardul unui produs cu stiluri CSS Modules
function ProdusCard({ produs, schimbaDisponibilitate, stergeProdus }) {
  return (
    <li
      className={`${styles.card} ${produs.indisponibil ? styles.done : ''}`}
      data-testid="item"
      data-id={produs.id}
    >
      {/* Zona cu disponibilitatea si informatiile produsului */}
      <div className={styles.main}>

        {/* Checkbox pentru schimbarea disponibilitatii */}
        <input
          type="checkbox"
          checked={produs.indisponibil}
          onChange={() => schimbaDisponibilitate(produs.id)}
          aria-label={`Schimba disponibilitatea pentru ${produs.nume}`}
          data-testid="item-toggle"
        />

        <div>
          {/* Numele produsului deschide pagina de detalii */}
          <h3>
            <Link
              to={`/produse/${produs.id}`}
              className={styles.link}
              data-testid="item-link"
            >
              {produs.nume}
            </Link>
          </h3>

          {/* Categoria produsului */}
          <span className={styles.badge}>
            {produs.tip}
          </span>
        </div>
      </div>

      {/* Butonul pentru stergerea produsului */}
      <div className="item-actions">
        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => stergeProdus(produs.id)}
          aria-label={`Sterge ${produs.nume}`}
          data-testid="item-delete"
        >
          Sterge
        </button>
      </div>
    </li>
  )
}

export default ProdusCard
