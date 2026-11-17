
import { Link } from 'react-router-dom'

// Etapa 8 - Pagina afisata pentru adrese inexistente
function NotFoundPage() {
  return (
    <section className="panel" data-testid="not-found">

      {/* Mesaj pentru pagina care nu exista */}
      <h2>Eroare 404 - Pagina nu a fost gasita</h2>

      <p>
        Ne pare rau, pagina pe care o cauti nu exista.
      </p>

      {/* Link pentru revenirea la pagina principala */}
      <Link to="/">
        Inapoi la produse
      </Link>

    </section>
  )
}

export default NotFoundPage
