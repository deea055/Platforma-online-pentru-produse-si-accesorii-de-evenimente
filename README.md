
# Platforma-online-pentru-produse-si-accesorii-de-evenimente

# Event Boutique

Event Boutique este o platformă online pentru produse și accesorii destinate evenimentelor speciale.

Aplicația permite gestionarea produselor pentru nunți, botezuri, aniversări și alte evenimente.

## Modelul de date

| Câmp | Tip | Descriere |
|---|---|---|
| id | număr | Identificator unic al produsului |
| nume | text | Numele produsului |
| indisponibil | boolean | Arată dacă produsul este indisponibil |
| tip | valori fixe | Invitații, Lumânări, Accesorii |
| categorie | relație | Nuntă, Botez, Aniversare |
| utilizator | relație | Utilizatorul asociat produsului |

Câmpurile folosite în prezent în aplicația React sunt `id`, `nume`, `tip` și `indisponibil`. Relațiile pentru categorie și utilizator fac parte din modelul inițial al proiectului.

Exemple de produse folosite în primele etape:

1. Wedding Invitation – disponibil, invitații
2. Personalized Envelope – indisponibil, accesorii
3. Wedding Ring Mirror – disponibil, accesorii

## Rularea aplicației

Începând cu Etapa 6, aplicația folosește React, Vite și json-server.

Se deschide un terminal în folderul `frontend` și se instalează dependențele:

```bash
cd frontend
npm install
```

Pentru pornirea aplicației se folosesc două terminale în folderul `frontend`.

Terminalul 1 – Pornirea API-ului:

```bash
npm run api
```

Terminalul 2 – Pornirea aplicației React:

```bash
npm run dev
```

Adresa aplicației: http://localhost:5173

Adresa API-ului: http://localhost:3001/produse

## Utilizarea AI

| Instrument | Utilizare |
|---|---|
| ChatGPT / Gemini | Alegerea temei, modelul de date și Etapa 1 |
| ChatGPT | Explicarea cerințelor și realizarea etapelor React |
| ChatGPT | Configurarea API-ului și testarea Etapei 6 |

Pentru fiecare etapă am completat un jurnal AI în folderul `ai-log`.

## Etapa 1 – Realizarea interfeței

În această etapă am realizat prima interfață pentru platforma Event Boutique, folosind HTML și CSS.

Am creat o pagină pentru prezentarea produselor și accesoriilor destinate evenimentelor speciale.

Am ales un design în nuanțe de roz, potrivit temei proiectului.

## Etapa 2 – Logica aplicației în JavaScript

În această etapă am realizat logica de gestionare a produselor folosind JavaScript, fără manipularea directă a paginii.

Fișierul `produse.js` conține lista produselor și funcțiile pentru gestionarea acestora.

### Funcționalități implementate

- Afișarea listei de produse.
- Numărarea produselor.
- Căutarea produselor după nume.
- Adăugarea unui produs nou.
- Schimbarea disponibilității.
- Ștergerea unui produs.
- Verificarea datelor introduse.

Rezultatele au fost verificate în consola browserului, folosind F12.

### Etapa 2 – Tabel de verificare

| ID | Cerință | Unde se verifică | Cum se verifică |
|---|---|---|---|
| S2-R1 | Fișierul JavaScript este conectat | `index.html` | Se deschide pagina și consola F12 |
| S2-R2 | Există cel puțin 3 produse | `produse.js` | Se verifică lista produselor |
| S2-R3 | Funcțiile pentru gestionarea produselor | `produse.js` | Se verifică rezultatele în consolă |
| S2-R4 | Validarea numelui și a tipului | `produse.js` | Se testează date invalide |
| S2-R5 | Lista inițială nu este modificată direct | `produse.js` | Se verifică rezultatele |
| S2-R6 | README și jurnal AI completate | `README.md`, `ai-log/etapa-02.md` | Se verifică documentația |
| S2-R7 | Etapa 2 publicată pe GitHub | Istoricul commiturilor | Se verifică commitul Etapei 2 |

Commit Etapa 2:
https://github.com/deea055/Platforma-online-pentru-produse-si-accesorii-de-evenimente/commit/0dbbb46b21cb1c677d9c43a021bb7bb717bbfa38

## Etapa 3 – Interfață React

În această etapă am realizat interfața aplicației Event Boutique folosind React și Vite.

### Funcționalități implementate

- Afișarea listei de produse.
- Adăugarea unui produs nou.
- Căutarea produselor după nume.
- Schimbarea disponibilității produselor.
- Ștergerea produselor.
- Salvarea datelor în localStorage.

Aplicația folosește componente React, inclusiv componenta separată `ProdusCard.jsx`.

### Rularea aplicației

```bash
cd frontend
npm install
npm run dev
```

### Verificarea aplicației

```bash
npm run build
```

Comanda de build a fost executată cu succes.

### Etapa 3 – Tabel de verificare

| ID | Cerință | Unde se verifică | Cum se verifică |
|---|---|---|---|
| S3-R1 | Aplicația React pornește fără erori | `frontend/package.json` | Se rulează `npm install` și `npm run dev` |
| S3-R2 | Aplicația afișează numele și contorul produselor | `frontend/src/App.jsx` | Se verifică numărul produselor |
| S3-R3 | Sunt folosite date specifice proiectului | `frontend/src/App.jsx` | Se verifică lista produselor |
| S3-R4 | Stilurile din Etapa 1 sunt reutilizate | `frontend/src/App.css` | Se compară aspectul aplicației |
| S3-R5 | Build-ul funcționează | `frontend/.gitignore` | Se rulează `npm run build` |
| S3-R6 | README și jurnal AI completate | `README.md`, `ai-log/etapa-03.md` | Se verifică documentația |
| S3-R7 | Etapa 3 publicată pe GitHub | Istoricul commiturilor | Se verifică commitul Etapei 3 |

## Etapa 4 – Componente React

În această etapă am organizat afișarea produselor folosind componente React separate.

### Componente utilizate

- `ProdusCard.jsx` – afișează informațiile unui produs și butoanele pentru disponibilitate și ștergere.
- `ProdusList.jsx` – primește lista produselor prin props și o afișează folosind `map()` și `key={produs.id}`.
- `App.jsx` – gestionează datele produselor și transmite informațiile și funcțiile către componente.

### Testare

Am verificat afișarea produselor, adăugarea unui produs nou, lista goală și actualizarea contorului.

Designul Event Boutique a fost păstrat.

## Etapa 5 – State local și evenimente

În această etapă am îmbunătățit aplicația Event Boutique folosind React Hooks și evenimente.

### Funcționalități implementate

- Marcarea produselor folosind checkbox-uri.
- Schimbarea disponibilității produselor.
- Ștergerea produselor din listă.
- Actualizarea automată a numărului de produse disponibile.
- Salvarea produselor în localStorage.
- Schimbarea între modul luminos și modul întunecat.
- Folosirea atributului `data-theme` pentru identificarea temei.

### Tehnologii utilizate

- React
- useState
- useEffect
- JavaScript
- CSS
- localStorage

### Testare

Am verificat funcționalitățile în browser.

Produsele rămâneau salvate după reîncărcarea paginii, iar schimbarea temei funcționa în ambele sensuri.

## Etapa 6 – Date de la un API (useEffect)

În această etapă am conectat aplicația Event Boutique la un API REST de test, folosind json-server.

Am creat fișierul `db.json`, în care am introdus 5 produse, și fișierul `api.js`, pentru citirea produselor de pe server.

Am modificat `App.jsx` astfel încât produsele să fie încărcate automat folosind `useEffect`.

Datele nu mai sunt preluate din localStorage, ci din API.

### Funcționalități implementate

- Încărcarea produselor de pe server folosind `fetch()`.
- Folosirea `useEffect` pentru încărcarea automată.
- Gestionarea datelor folosind `useState`.
- Afișarea mesajului „Se încarcă produsele...”.
- Afișarea unui mesaj de eroare când serverul nu funcționează.
- Afișarea celor 5 produse după primirea datelor.
- Păstrarea căutării și a contorului produselor.
- Păstrarea modului luminos și întunecat.

Adăugarea, modificarea disponibilității și ștergerea produselor se realizează momentan local. Aceste modificări nu sunt salvate pe server și se pierd la reîncărcarea paginii.

### Fișiere utilizate

- `frontend/db.json` – conține lista produselor.
- `frontend/src/api.js` – conține funcția `fetchProduse()`.
- `frontend/src/App.jsx` – încarcă produsele și gestionează stările aplicației.
- `frontend/src/App.css` – conține stilurile pentru mesaje.
- `frontend/.env.example` – conține adresa API-ului.
- `frontend/package.json` – conține comanda pentru pornirea serverului.

### Tehnologii utilizate

- React
- useState
- useEffect
- JavaScript
- fetch API
- json-server
- CSS

### Rularea aplicației

Se deschid două terminale în folderul `frontend`.

Terminalul 1 – Pornirea API-ului:

```bash
npm run api
```

Terminalul 2 – Pornirea aplicației:

```bash
npm run dev
```

Adresa API-ului: http://localhost:3001/produse

Adresa aplicației: http://localhost:5173

### Testare

Am verificat funcționarea aplicației cu serverul pornit. Cele 5 produse din `db.json` au fost afișate corect.

Am oprit serverul și am reîncărcat pagina. Aplicația a afișat mesajul de eroare „Failed to fetch”.

Am pornit serverul cu o întârziere de 4 secunde, folosind comanda:

```bash
npx json-server --watch db.json --port 3001 --delay 4000
```

Am verificat afișarea mesajului „Se încarcă produsele...”.

După repornirea normală a serverului, produsele au fost afișate din nou.

### Etapa 6 – Tabel de verificare

| ID | Cerință | Unde se verifică | Cum se verifică |
|---|---|---|---|
| S6-R1 | API-ul pornește și afișează produsele | `frontend/package.json`, `frontend/db.json` | Se rulează `npm run api` și se accesează `localhost:3001/produse` |
| S6-R2 | Datele nu mai sunt definite direct în React | `frontend/src/App.jsx` | Se verifică încărcarea produselor din API |
| S6-R3 | Apare mesajul de încărcare | `frontend/src/App.jsx` | Se pornește serverul cu întârziere de 4 secunde |
| S6-R4 | Apare mesajul de eroare când serverul este oprit | `frontend/src/App.jsx` | Se oprește API-ul și se reîncarcă pagina |
| S6-R5 | Cererile API sunt separate de componente | `frontend/src/api.js`, `frontend/.env.example` | Se verifică funcția `fetchProduse()` și adresa API-ului |
| S6-R6 | README și jurnalul AI sunt completate | `README.md`, `ai-log/etapa-06.md` | Se verifică documentația |
| S6-R7 | Etapa 6 este publicată pe GitHub | Istoricul commiturilor | Se verifică commitul „Stage 6: data from a mock API” |

### Stadiul proiectului

- [x] Etapa 1 – Interfață statică
- [x] Etapa 2 – Logica aplicației în JavaScript
- [x] Etapa 3 – React și Vite
- [x] Etapa 4 – Componente React
- [x] Etapa 5 – State local și evenimente
- [x] Etapa 6 – Date de la un API
