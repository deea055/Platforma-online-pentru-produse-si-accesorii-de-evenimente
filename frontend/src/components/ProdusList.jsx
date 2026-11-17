
import ProdusCard from './ProdusCard.jsx'

// Componenta care afiseaza lista produselor
export default function ProdusList({
  produse,
  schimbaDisponibilitate,
  stergeProdus
}) {
  // Verifica daca lista de produse este goala
  if (produse.length === 0) {
    // Etapa 7 - Atribut folosit pentru testarea listei goale
    return (
      <p data-testid="empty">
        Nu exista niciun produs.
      </p>
    )
  }

  // Afiseaza toate produsele existente
  return (
    <ul className="item-list">
      {/* Parcurge lista si creeaza un card pentru fiecare produs */}
      {produse.map((produs) => (
        <ProdusCard
          // ID-ul ajuta React sa identifice fiecare produs
          key={produs.id}
          // Trimite informatiile produsului catre card
          produs={produs}
          // Trimite functia pentru modificarea disponibilitatii
          schimbaDisponibilitate={schimbaDisponibilitate}
          // Trimite functia pentru stergerea produsului
          stergeProdus={stergeProdus}
        />
      ))}
    </ul>
  )
}
