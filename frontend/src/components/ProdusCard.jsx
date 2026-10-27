function ProdusCard({ produs, schimbaDisponibilitate, stergeProdus }) {
  return (
    <li className={`item-card ${produs.indisponibil ? 'done' : ''}`}>
      <label className="produs-main">
        <input
          type="checkbox"
          checked={produs.indisponibil}
          onChange={() => schimbaDisponibilitate(produs.id)}
        />

        <div>
          <h3>{produs.nume}</h3>
          <span className="badge badge-accesorii">{produs.tip}</span>
        </div>
      </label>

      <div className="item-actions">
        <button
          type="button"
          className="delete-button"
          onClick={() => stergeProdus(produs.id)}
          aria-label={`Șterge ${produs.nume}`}
        >
          Șterge
        </button>
      </div>
    </li>
  )
}

export default ProdusCard