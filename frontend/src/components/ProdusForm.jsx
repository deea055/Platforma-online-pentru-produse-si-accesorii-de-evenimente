
import { useState } from "react";

// Tipurile de produse care pot fi selectate
const TIPURI = ["Invitatii", "Lumanari", "Accesorii"];

// Numarul maxim de caractere pentru numele produsului
const NUME_MAX = 100;

export default function ProdusForm({ onAdd }) {
  // Retine numele introdus in formular
  const [nume, setNume] = useState("");

  // Retine tipul de produs selectat
  const [tip, setTip] = useState("Invitatii");

  // Retine mesajul de eroare
  const [eroare, setEroare] = useState("");

  // Verifica daca produsul este in curs de salvare
  const [trimite, setTrimite] = useState(false);

  // Verifica daca datele introduse sunt corecte
  function valideaza() {
    const numeCurat = nume.trim();

    // Nu permite adaugarea unui produs fara nume
    if (numeCurat === "") {
      return "Numele produsului este obligatoriu.";
    }

    // Verifica lungimea numelui
    if (numeCurat.length > NUME_MAX) {
      return `Numele poate avea maximum ${NUME_MAX} de caractere.`;
    }

    // Verifica daca tipul selectat este valid
    if (!TIPURI.includes(tip)) {
      return "Selecteaza un tip valid.";
    }

    // Daca datele sunt corecte, nu exista eroare
    return "";
  }

  // Se executa atunci cand apasam butonul Adauga produs
  async function handleSubmit(e) {
    // Impiedica reincarcarea paginii
    e.preventDefault();

    // Impiedica trimiterea de doua ori
    if (trimite) return;

    // Verifica datele introduse
    const mesaj = valideaza();

    // Afiseaza eroarea daca datele nu sunt corecte
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    // Sterge eroarea veche si incepe salvarea
    setEroare("");
    setTrimite(true);

    try {
      // Trimite produsul catre App.jsx pentru salvare
      await onAdd({
        nume: nume.trim(),
        tip,
        indisponibil: false,
      });

      // Goleste formularul doar daca salvarea a reusit
      setNume("");
      setTip("Invitatii");
    } catch (err) {
      // Afiseaza eroarea daca salvarea nu a reusit
      setEroare(err.message);
    } finally {
      // Activeaza din nou butonul
      setTrimite(false);
    }
  }

  // Afiseaza formularul pentru adaugarea produselor
  return (
    <form
      className="item-form"
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      {/* Campul pentru numele produsului */}
      <label>
        Nume produs
        <input
          type="text"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          placeholder="Ex: Invitatie de nunta"
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      {/* Lista pentru selectarea tipului de produs */}
      <label>
        Tip produs
        <select
          value={tip}
          onChange={(e) => setTip(e.target.value)}
          data-testid="form-tip"
        >
          {TIPURI.map((valoare) => (
            <option key={valoare} value={valoare}>
              {valoare}
            </option>
          ))}
        </select>
      </label>

      {/* Afiseaza mesajul daca exista o eroare */}
      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      {/* Butonul este dezactivat in timpul salvarii */}
      <button
        type="submit"
        disabled={trimite}
        data-testid="form-submit"
      >
        {trimite ? "Se salveaza..." : "Adauga produs"}
      </button>
    </form>
  );
}
