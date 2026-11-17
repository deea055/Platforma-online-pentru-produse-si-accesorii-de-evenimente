
import { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './Layout.module.css'

// Layout-ul comun pentru toate paginile Event Boutique
function Layout() {
  // Etapa 5 - Pastreaza schimbarea temei
  const [darkMode, setDarkMode] = useState(false)

  // Aplica tema luminoasa sau intunecata
  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>

      {/* Bannerul original Event Boutique */}
      <header className={styles.header}>
        <div className={styles.headerContent}>

          {/* Butonul pentru schimbarea temei */}
          <button
            type="button"
            className={styles.themeToggle}
            onClick={() => setDarkMode((modAnterior) => !modAnterior)}
            aria-pressed={darkMode}
          >
            {darkMode ? '☀️ Mod luminos' : '🌙 Mod intunecat'}
          </button>

          {/* Simbolul original */}
          <div className={styles.headerSymbol}>♡♡</div>

          <h1>Event Boutique</h1>

          <p>
            PRODUSE SI ACCESORII PENTRU MOMENTE SPECIALE
          </p>

          {/* Etapa 8 - Navigare fara reincarcarea paginii */}
          <nav className={styles.nav} data-testid="nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navActive}`
                  : styles.navLink
              }
            >
              Produse
            </NavLink>

            <NavLink
              to="/despre"
              className={({ isActive }) =>
                isActive
                  ? `${styles.navLink} ${styles.navActive}`
                  : styles.navLink
              }
            >
              Despre
            </NavLink>
          </nav>

        </div>
      </header>

      {/* React Router afiseaza pagina selectata */}
      <main className={styles.container}>
        <Outlet />
      </main>

      {/* Subsolul original al aplicatiei */}
      <footer className={styles.footer}>
        Proiect Tehnologii Web - Event Boutique
      </footer>

    </div>
  )
}

export default Layout
