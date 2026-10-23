
import ProdusCard from './ProdusCard.jsx'

export default function ProdusList({
  produse,
  schimbaDisponibilitate,
  stergeProdus
}) {
  if (produse.length === 0) {
    return <p>Nu există niciun produs.</p>
  }

  return (
    <ul className="item-list">
      {produse.map((produs) => (
        <ProdusCard
          key={produs.id}
          produs={produs}
          schimbaDisponibilitate={schimbaDisponibilitate}
          stergeProdus={stergeProdus}
        />
      ))}
    </ul>
  )
}
