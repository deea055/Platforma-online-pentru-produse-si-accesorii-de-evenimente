
import { useState } from 'react'
import styles from './EditorInvitatie.module.css'

// Componenta principala a editorului de invitatii.
// Formularul este in stanga, iar previzualizarea este in dreapta.
function EditorInvitatie() {

  // Pastreaza informatiile invitatiei in memoria componentei.
  // Orice modificare a unui camp actualizeaza automat previzualizarea.
  const [invitatie, setInvitatie] = useState({
    mireasa: 'Maria',
    mire: 'Bogdan',
    data: '17 August 2027',
    ora: '17:00',
    locatie: 'Restaurant Royal Garden',
    adresa: '',
    mesaj: 'Cu bucurie in suflet, va invitam sa sarbatoriti alaturi de noi cea mai frumoasa zi din viata noastra.',
  })

  // Modifica doar campul selectat si pastreaza restul informatiilor.
  function modificaCamp(camp, valoare) {
    setInvitatie((dateVechi) => ({
      ...dateVechi,
      [camp]: valoare,
    }))
  }

  // Construieste textul folosit pentru cautarea pe Google Maps.
  // Combina numele restaurantului cu adresa, daca exista.
  const cautareLocatie = [
    invitatie.locatie.trim(),
    invitatie.adresa.trim(),
  ].filter(Boolean).join(', ')

  // Genereaza linkul Google Maps doar daca exista o locatie.
  // encodeURIComponent transforma textul intr-un format sigur pentru URL.
  const linkMaps = cautareLocatie
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cautareLocatie)}`
    : null

  return (
    <section className={styles.editor}>

      {/* Titlul editorului */}
      <h3>Personalizeaza invitatia ta</h3>

      {/* Imparte editorul in formular si previzualizare */}
      <div className={styles.layout}>

        {/* Formularul din partea stanga */}
        <div className={styles.formular}>
          <h4>Completeaza informatiile</h4>

          {/* Numele miresei */}
          <label htmlFor="mireasa">Numele miresei</label>
          <input
            id="mireasa"
            type="text"
            value={invitatie.mireasa}
            onChange={(event) =>
              modificaCamp('mireasa', event.target.value)
            }
          />

          {/* Numele mirelui */}
          <label htmlFor="mire">Numele mirelui</label>
          <input
            id="mire"
            type="text"
            value={invitatie.mire}
            onChange={(event) =>
              modificaCamp('mire', event.target.value)
            }
          />

          {/* Data evenimentului */}
          <label htmlFor="data">Data nuntii</label>
          <input
            id="data"
            type="text"
            value={invitatie.data}
            onChange={(event) =>
              modificaCamp('data', event.target.value)
            }
          />

          {/* Ora evenimentului */}
          <label htmlFor="ora">Ora evenimentului</label>
          <input
            id="ora"
            type="text"
            value={invitatie.ora}
            onChange={(event) =>
              modificaCamp('ora', event.target.value)
            }
          />

          {/* Numele restaurantului */}
          <label htmlFor="locatie">Numele restaurantului</label>
          <input
            id="locatie"
            type="text"
            value={invitatie.locatie}
            onChange={(event) =>
              modificaCamp('locatie', event.target.value)
            }
          />

          {/* Adresa restaurantului ajuta la cautarea corecta pe Maps */}
          <label htmlFor="adresa">Adresa restaurantului</label>
          <input
            id="adresa"
            type="text"
            placeholder="Strada, numar, oras"
            value={invitatie.adresa}
            onChange={(event) =>
              modificaCamp('adresa', event.target.value)
            }
          />

          {/* Mesajul personalizat al invitatiei */}
          <label htmlFor="mesaj">Mesajul invitatiei</label>
          <textarea
            id="mesaj"
            rows="5"
            value={invitatie.mesaj}
            onChange={(event) =>
              modificaCamp('mesaj', event.target.value)
            }
          />
        </div>

        {/* Previzualizarea din partea dreapta */}
        <div className={styles.previzualizare}>
          <h4>Previzualizare in timp real</h4>

          {/* Invitatia foloseste imaginea de fundal definita in CSS */}
          <div className={styles.invitatie}>

            

            {/* Titlul invitatiei */}
            <p className={styles.subtitlu}>
              Invitatie la Nunta
            </p>

           

            {/* Numele mirilor se actualizeaza in timp real */}
            <h2 className={styles.nume}>
              <span className={styles.numePersoana}>
                {invitatie.mireasa || 'Numele miresei'}
              </span>

              <span className={styles.ampersand}>&amp;</span>

              <span className={styles.numePersoana}>
                {invitatie.mire || 'Numele mirelui'}
              </span>
            </h2>

            

            {/* Mesajul invitatiei */}
            <p className={styles.mesaj}>
              {invitatie.mesaj || 'Mesajul invitatiei'}
            </p>

            {/* Data nuntii, incadrata de doua simboluri aurii */}
            <div className={styles.detaliuData}>
              <span aria-hidden="true">✦</span>

              <p className={styles.data}>
                {invitatie.data || 'Data nuntii'}
              </p>

              <span aria-hidden="true">✦</span>
            </div>

            {/* Ora evenimentului */}
            <p className={styles.ora}>
              <span aria-hidden="true">◷ </span>
              Ora {invitatie.ora || '--:--'}
            </p>

            {/* Afiseaza restaurantul ca link catre Google Maps.
                Daca locatia este goala, afiseaza un text obisnuit. */}
            {linkMaps ? (
              <a
                href={linkMaps}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.locatie}
                title="Deschide locatia in Google Maps"
              >
                <span aria-hidden="true">⌖ </span>
                {invitatie.locatie || invitatie.adresa}
              </a>
            ) : (
              <p className={styles.locatie}>
                Locatia evenimentului
              </p>
            )}

            {/* Indica faptul ca restaurantul poate fi accesat.
                Mesajul apare doar daca exista un link Maps. */}
            {linkMaps && (
              <span className={styles.indiciuMaps}>
                Apasa pe restaurant pentru Google Maps
              </span>
            )}

          </div>
        </div>

      </div>
    </section>
  )
}

export default EditorInvitatie
