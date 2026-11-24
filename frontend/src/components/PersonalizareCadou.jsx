
import { useState } from 'react'
import styles from './PersonalizareCadou.module.css'

// Numarul de WhatsApp in format international, fara + sau spatii.
const NUMAR_WHATSAPP = '40770648819'

// Optiunile pentru continutul cutiei.
// Acestea pot fi modificate ulterior.
const optiuniContinut = [
  'Felicitare personalizata',
  'Dulciuri',
  'Cana personalizata',
  'Decoratiune de Craciun',
  'Lumanare decorativa',
  'Fotografie personalizata',
  'Alte produse',
]

// Formularul pentru personalizarea cadourilor de Craciun.
function PersonalizareCadou({ produs, adaugaInCos }) {
  // Pastreaza alegerile clientului.
  const [destinatar, setDestinatar] = useState('Nasi')
  const [nume, setNume] = useState('')
  const [model, setModel] = useState('Cutie rosie de Craciun')
  const [continut, setContinut] = useState([])
  const [alteProduse, setAlteProduse] = useState('')
  const [mesaj, setMesaj] = useState('')

  // Adauga sau elimina un produs din continutul cutiei.
  function schimbaContinut(optiune) {
    setContinut((listaActuala) =>
      listaActuala.includes(optiune)
        ? listaActuala.filter((element) => element !== optiune)
        : [...listaActuala, optiune]
    )
  }

  // Construieste rezumatul personalizarii.
  function obtineRezumat() {
    return [
      'Cadou personalizat de Craciun',
      `Pentru: ${destinatar}`,
      `Nume destinatar: ${nume || 'Nespecificat'}`,
      `Model: ${model}`,
      `Continut: ${continut.join(', ') || 'Neselectat'}`,
      `Alte produse: ${alteProduse || 'Nu'}`,
      `Mesaj: ${mesaj || 'Nespecificat'}`,
    ].join('\n')
  }

  // Deschide WhatsApp cu mesajul pregatit pentru client.
  function deschideWhatsApp() {
    const text = [
      'Buna ziua!',
      'Am vazut cadourile personalizate de Craciun pe Event Boutique.',
      'As dori ajutor pentru alegerea sau personalizarea unui cadou.',
      '',
      obtineRezumat(),
      '',
      'Multumesc!',
    ].join('\n')

    const link = `https://wa.me/${NUMAR_WHATSAPP}?text=${encodeURIComponent(text)}`

    window.open(link, '_blank', 'noopener,noreferrer')
  }

  // Trimite personalizarea catre functia cosului, daca exista.
  function adaugaCadoulInCos() {
    if (typeof adaugaInCos !== 'function') return

    adaugaInCos({
      ...produs,
      personalizare: {
        destinatar,
        nume,
        model,
        continut: [...continut],
        alteProduse,
        mesaj,
      },
    })
  }

  return (
    <section className={styles.container}>
      <h3>🎁 Creeaza cadoul perfect de Craciun</h3>

      <p className={styles.intro}>
        Personalizeaza fiecare detaliu pentru un cadou unic,
        pregatit cu drag pentru cei dragi!
      </p>

      {/* Sectiunea 1 - Destinatarul cadoului */}
      <div className={styles.sectiune}>
        <h4>1. Pentru cine pregatim cadoul?</h4>

        <select
          value={destinatar}
          onChange={(event) => setDestinatar(event.target.value)}
        >
          <option value="Nasi">Nasi</option>
          <option value="Fini">Fini</option>
          <option value="Cumetri">Cumetri</option>
          <option value="Parinti">Parinti</option>
          <option value="Frati / surori">Frati / surori</option>
          <option value="Alte persoane">Alte persoane</option>
        </select>

        <label htmlFor="nume-destinatar">
          Numele destinatarului (optional)
        </label>

        <input
          id="nume-destinatar"
          type="text"
          value={nume}
          onChange={(event) => setNume(event.target.value)}
          placeholder="Ex.: Maria si Ion"
        />
      </div>

      {/* Sectiunea 2 - Modelul cutiei */}
      <div className={styles.sectiune}>
        <h4>2. Alege modelul cutiei</h4>

        <select
          value={model}
          onChange={(event) => setModel(event.target.value)}
        >
          <option value="Cutie rosie de Craciun">
            Cutie rosie de Craciun
          </option>
          <option value="Alt model, la cerere">
            Alt model, la cerere
          </option>
        </select>
      </div>

      {/* Sectiunea 3 - Continutul cutiei */}
      <div className={styles.sectiune}>
        <h4>3. Ce doresti sa contina cutia?</h4>

        <p>Poti selecta mai multe variante:</p>

        <div className={styles.optiuni}>
          {optiuniContinut.map((optiune) => (
            <label key={optiune} className={styles.optiune}>
              <input
                type="checkbox"
                checked={continut.includes(optiune)}
                onChange={() => schimbaContinut(optiune)}
              />
              <span>{optiune}</span>
            </label>
          ))}
        </div>

        {continut.includes('Alte produse') && (
          <textarea
            value={alteProduse}
            onChange={(event) => setAlteProduse(event.target.value)}
            placeholder="Scrie ce alte produse doresti..."
            rows={3}
          />
        )}
      </div>

      {/* Sectiunea 4 - Mesajul personalizat */}
      <div className={styles.sectiune}>
        <h4>4. Scrie mesajul personalizat</h4>

        <textarea
          value={mesaj}
          onChange={(event) => setMesaj(event.target.value)}
          placeholder="Ex.: Craciun fericit, dragii nostri nasi!"
          rows={4}
        />
      </div>

      {/* Previzualizarea alegerilor clientului */}
      <div className={styles.rezumat}>
        <h4>❤️ Cadoul tau personalizat</h4>

        <p><strong>Pentru:</strong> {destinatar}</p>

        {nume && (
          <p><strong>Nume:</strong> {nume}</p>
        )}

        <p><strong>Model:</strong> {model}</p>

        <p>
          <strong>Continut:</strong>{' '}
          {continut.length > 0
            ? continut.join(', ')
            : 'Nu ai selectat inca produse'}
        </p>

        {alteProduse && (
          <p><strong>Alte produse:</strong> {alteProduse}</p>
        )}

        {mesaj && (
          <p><strong>Mesaj:</strong> {mesaj}</p>
        )}
      </div>

      {/* Butonul cosului apare dupa conectarea functiei existente. */}
      {typeof adaugaInCos === 'function' && (
        <button
          type="button"
          className={styles.butonCos}
          onClick={adaugaCadoulInCos}
          disabled={produs?.indisponibil}
        >
          {produs?.indisponibil
            ? 'Produs indisponibil'
            : 'Adauga cadoul personalizat in cos'}
        </button>
      )}

      {/* Sectiunea de asistenta prin WhatsApp */}
      <div className={styles.ajutor}>
        <h4>💬 Ai nevoie de ajutor?</h4>

        <p>
          Nu stii ce model sa alegi sau ce sa contina cutia?
          Scrie-ne direct pe WhatsApp si te ajutam sa
          pregatesti cadoul perfect!
        </p>

        <button
          type="button"
          className={styles.butonWhatsApp}
          onClick={deschideWhatsApp}
        >
          Scrie-ne pe WhatsApp
        </button>
      </div>
    </section>
  )
}

export default PersonalizareCadou
