
function ProdusCard({ produs, schimbaDisponibilitate, stergeProdus }) {
  return (
    // Afiseaza un produs din lista
    // Etapa 7 - data-testid="item" identifica produsul la testare
    <li
      className={`item-card ${produs.indisponibil ? 'done' : ''}`}
      data-testid="item"
      data-id={produs.id}
    >
      {/* Zona cu disponibilitatea si informatiile produsului */}
      <label className="produs-main">

        {/* Checkbox pentru schimbarea disponibilitatii */}
        {/* Modificarea este salvata pe server prin App.jsx */}
        <input
          type="checkbox"
          checked={produs.indisponibil}
          onChange={() => schimbaDisponibilitate(produs.id)}
          data-testid="item-toggle"
        />

        <div>
          {/* Afiseaza numele produsului */}
          <h3 data-testid="item-title">
            {produs.nume}
          </h3>

          {/* Afiseaza categoria produsului */}
          <span className="badge badge-accesorii">
            {produs.tip}
          </span>
        </div>
      </label>

      {/* Zona cu butonul de stergere */}
      <div className="item-actions">
        {/* Sterge produsul de pe server */}
        <button
          type="button"
          className="delete-button"
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
