
import { Link } from 'react-router-dom'

// Etapa 8 - Pagina de prezentare Event Boutique
function DesprePage() {
  return (
    <section className="panel despre-panel">

      <div className="despre-symbol">♡</div>

      <h2>Bine ai venit la Event Boutique!</h2>

      <p className="despre-intro">
        Aici, fiecare detaliu spune o poveste,
        iar momentele speciale devin amintiri de neuitat.
      </p>

      <p>
        Event Boutique este locul unde eleganta,
        creativitatea si atentia la detalii se
        imbina pentru a aduce un plus de farmec
        celor mai frumoase evenimente din viata ta.
      </p>

      <p>
        De la invitatii delicate si accesorii
        personalizate, pana la mici detalii care
        fac diferenta, ne dorim ca fiecare produs
        sa aduca bucurie si emotie.
      </p>

      <p className="despre-final">
        Pentru ca cele mai frumoase momente
        merita detalii pe masura. ♡
      </p>

      {/* Link pentru revenirea la pagina cu produse */}
      <Link to="/" className="despre-button">
        Descopera produsele noastre
      </Link>

    </section>
  )
}

export default DesprePage
