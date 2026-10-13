
function ProdusCard({ produs, schimbaDisponibilitate, stergeProdus }) {
  return (
    <li
      className={`item-card ${produs.indisponibil ? 'done' : ''}`}
    >
      <div>
        <h3>{produs.nume}</h3>

        <span className="badge badge-accesorii">
          {produs.tip}
        </span>
      </div>

      <div className="item-actions">
        <button
          type="button"
          className="status-button"
          onClick={() => schimbaDisponibilitate(produs.id)}
        >
          {produs.indisponibil ? 'Indisponibil' : 'Disponibil'}
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => stergeProdus(produs.id)}
        >
          Șterge
        </button>
      </div>
    </li>
  )
}

export default ProdusCard
