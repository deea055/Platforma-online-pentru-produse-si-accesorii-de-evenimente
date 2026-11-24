
import { Link } from 'react-router-dom'
import styles from './ProdusCard.module.css'

// Alege fotografia potrivita in functie de categoria produsului.
// Fotografiile sunt salvate in folderul public/images.
// Nu este necesara modificarea API-ului sau a bazei de date.
function obtineImagineProdus(produs) {
  // Transformam categoria in litere mici pentru comparare.
  const tip = String(produs.tip || '').toLowerCase()

  // Fotografia pentru invitatiile de nunta.
  if (tip.includes('invit')) {
    return '/images/invitatie-produs.png'
  }

  // Fotografia pentru cutiile cadou personalizate.
  if (tip.includes('accesor')) {
    return '/images/cutie-cadou.png'
  }

  // Fotografia pentru lumanarile personalizate.
  if (tip.includes('lum')) {
    return '/images/lumanare-produs.png'
  }

  // Pentru alte categorii nu afisam o fotografie.
  return null
}

// Etapa 8 - Cardul unui produs cu stiluri CSS Modules.
// Functia adaugaInCos este optionala pentru compatibilitate.
function ProdusCard({
  produs,
  schimbaDisponibilitate,
  stergeProdus,
  adaugaInCos,
}) {
  // Obtine fotografia asociata categoriei produsului.
  const imagineProdus = obtineImagineProdus(produs)

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

        {/* Fotografia produsului.
            Este afisata doar daca exista o imagine asociata. */}
        {imagineProdus && (
          <img
            src={imagineProdus}
            alt={produs.nume}
            className={styles.productImage}
            loading="lazy"
          />
        )}

        {/* Numele si categoria produsului */}
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

      {/* Actiunile disponibile pentru fiecare produs */}
      <div className="item-actions">

        {/* Adauga produsul in cos doar daca este disponibil.
            Butonul este dezactivat pentru produsele indisponibile. */}
        {typeof adaugaInCos === 'function' && (
          <button
            type="button"
            className={styles.cartButton}
            onClick={() => adaugaInCos(produs)}
            disabled={produs.indisponibil}
          >
            {produs.indisponibil
              ? 'Indisponibil'
              : 'Adauga in cos'}
          </button>
        )}

        {/* Butonul original pentru stergerea produsului */}
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
