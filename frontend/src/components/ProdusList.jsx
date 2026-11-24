
import ProdusCard from './ProdusCard.jsx'
import styles from './ProdusList.module.css'

// Etapa 8 - Lista produselor cu stiluri CSS Modules
// Primeste si functia pentru adaugarea produselor in cos.
export default function ProdusList({
  produse,
  schimbaDisponibilitate,
  stergeProdus,
  adaugaInCos
}) {
  // Verifica daca lista de produse este goala
  if (produse.length === 0) {
    // Pastreaza atributul necesar pentru testare
    return (
      <p data-testid="empty">
        Nu exista niciun produs.
      </p>
    )
  }

  // Afiseaza toate produsele existente
  return (
    <ul className={styles.list}>
      {/* Creeaza un card pentru fiecare produs */}
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

          // Trimite functia pentru adaugarea produsului in cos
          adaugaInCos={adaugaInCos}
        />
      ))}
    </ul>
  )
}
