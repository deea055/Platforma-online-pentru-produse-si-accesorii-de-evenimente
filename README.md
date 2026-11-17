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

## Etapa 7 – Formular si validare

In aceasta etapa am imbunatatit formularul pentru adaugarea produselor si am conectat operatiile de adaugare, modificare si stergere la API-ul REST.

Am pastrat designul Event Boutique si functionalitatile realizate in etapele anterioare.

### Functionalitati implementate

- Am creat componenta `ProdusForm.jsx` pentru adaugarea produselor.

- Am folosit `useState` pentru gestionarea campurilor formularului.

- Am adaugat validarea numelui produsului.

- Formularul afiseaza un mesaj de eroare daca numele este gol.

- Am folosit `preventDefault()` pentru a evita reincarcarea paginii.

- Am conectat adaugarea produselor la server prin POST.

- Am conectat modificarea disponibilitatii la server prin PATCH.

- Am conectat stergerea produselor la server prin DELETE.

- Modificarile raman salvate dupa reincarcarea paginii.

- Butonul de adaugare este dezactivat in timpul salvarii.

- Formularul se goleste doar dupa salvarea reusita.

- Daca serverul nu raspunde, formularul pastreaza datele introduse.

- Am adaugat atribute `data-testid` pentru testarea automata.

- Am creat fisierul `tw.json` pentru configurarea testelor.

### Fisiere utilizate

- `frontend/src/components/ProdusForm.jsx` - formularul si validarea.

- `frontend/src/components/ProdusCard.jsx` - afisarea produsului si actiunile acestuia.

- `frontend/src/components/ProdusList.jsx` - afisarea listei de produse.

- `frontend/src/App.jsx` - gestionarea produselor si conectarea componentelor.

- `frontend/src/api.js` - functiile GET, POST, PATCH si DELETE.

- `frontend/src/App.css` - stilurile formularului si ale aplicatiei.

- `frontend/db.json` - baza de date folosita de json-server.

- `tw.json` - configurarea pentru testarea automata.

### Testare

Am verificat functionalitatile direct in browser.

1. Am adaugat un produs si am verificat ca ramane in lista dupa F5.

2. Am modificat disponibilitatea unui produs si am verificat ca modificarea se pastreaza dupa F5.

3. Am sters un produs si am verificat ca nu mai apare dupa F5.

4. Am incercat sa adaug un produs fara nume si a aparut mesajul de validare.

5. Am oprit serverul API si am verificat ca formularul afiseaza eroarea `Failed to fetch` si pastreaza textul introdus.

6. Am pornit serverul cu intarziere de 3 secunde si am verificat afisarea mesajului `Se salveaza...` pe buton.

Pentru testarea intarzierii am folosit:

```bash

npx json-server --watch db.json --port 3001 --delay 3000

```

Dupa testare am revenit la pornirea normala a serverului cu `npm run api`.

### Etapa 7 – Tabel de verificare

| ID | Cerinta | Unde se verifica | Cum se verifica |

|---|---|---|---|

| S7-R1 | Formular controlat | `ProdusForm.jsx` | Se verifica `value` si `onChange` |

| S7-R2 | Validarea numelui | `ProdusForm.jsx` | Se incearca adaugarea fara nume |

| S7-R3 | Adaugarea pe server | `api.js`, `App.jsx` | Se adauga un produs si se apasa F5 |

| S7-R4 | Modificarea si stergerea pe server | `api.js`, `App.jsx` | Se modifica sau sterge un produs si se apasa F5 |

| S7-R5 | Gestionarea salvarii si a erorilor | `ProdusForm.jsx` | Se testeaza serverul oprit si serverul cu intarziere |

| S7-R6 | Configurarea testelor automate | `tw.json`, componentele React | Se verifica atributele `data-testid` |

| S7-R7 | README si jurnal AI | `README.md`, `ai-log/etapa-07.md` | Se verifica documentatia |

| S7-R8 | Etapa 7 publicata pe GitHub | Istoricul commiturilor | Se verifica commiturile Etapei 7 |

### Stadiul proiectului

- [x] Etapa 7 – Formular si validare (implementare si teste manuale)

- [x] Etapa 7 – Verificare finala si publicare pe GitHub
Etapa 8 – Navigare si pagini multiple
In aceasta etapa am adaugat navigarea intre pagini folosind React Router si am organizat aplicatia in componente si pagini separate. Am pastrat designul Event Boutique si functionalitatile din etapele anterioare.
Functionalitati implementate
- Am instalat react-router-dom si am configurat BrowserRouter in main.jsx.
- Am definit rutele in App.jsx: /, /produse/:id, /despre si *.
- Am creat un Layout comun pentru antet, navigare, continut si subsol.
- Am folosit NavLink pentru meniul Produse si Despre.
- Am mutat lista, cautarea, formularul si operatiile CRUD in ProdusePage.jsx.
- Am creat pagina de detalii a produsului, care preia ID-ul din URL prin useParams si incarca datele din API.
- Am creat pagina Despre si pagina 404 pentru adrese inexistente.
- Am transformat numele fiecarui produs intr-un link catre pagina sa de detalii.
- Am organizat stilurile componentelor in fisiere CSS Modules, pastrand aspectul existent.
- Am creat constants.js pentru tipurile de produse si regulile comune ale formularului.
- Am pastrat atributele data-testid necesare testarii.
Fisiere utilizate
- frontend/src/main.jsx - configurarea BrowserRouter.
- frontend/src/App.jsx - definirea rutelor.
- frontend/src/components/Layout.jsx - structura comuna a paginilor.
- frontend/src/pages/ProdusePage.jsx - lista produselor, formularul, cautarea si operatiile CRUD.
- frontend/src/pages/ProdusDetaliuPage.jsx - detaliile produsului selectat.
- frontend/src/pages/DesprePage.jsx - prezentarea platformei.
- frontend/src/pages/NotFoundPage.jsx - pagina pentru rute inexistente.
- frontend/src/components/ProdusCard.jsx - linkul catre detaliile produsului.
- frontend/src/api.js - functia fetchProdus(id) pentru citirea unui produs.
- frontend/src/constants.js - constante comune ale formularului.
- Fisierele *.module.css - stiluri locale pentru componente si pagini.
Testare
Am verificat manual in browser:
1. Pagina principala afiseaza produsele si formularul.
2. Apasarea numelui unui produs deschide pagina /produse/:id.
3. Linkul Inapoi la produse revine la pagina principala.
4. Meniul Despre deschide pagina de prezentare, iar butonul de intoarcere functioneaza.
5. O adresa inexistenta afiseaza pagina 404 si permite revenirea la produse.
6. Pentru un ID de produs inexistent, API-ul afiseaza mesajul de eroare 404.
7. Comanda npm run build s-a executat cu succes: 41 de module transformate, fara avertismente CSS.
Etapa 8 – Tabel de verificare
ID	Cerinta	Unde se verifica	Cum se verifica
S8-R1	React Router configurat	main.jsx, App.jsx	Se verifica BrowserRouter si rutele
S8-R2	Layout si meniu comun	Layout.jsx	Se navigheaza intre Produse si Despre
S8-R3	Pagina principala pastreaza functionalitatile	ProdusePage.jsx	Se verifica lista, formularul si cautarea
S8-R4	Pagina de detalii pentru fiecare produs	ProdusDetaliuPage.jsx, api.js	Se acceseaza /produse/1
S8-R5	Gestionarea rutelor si produselor inexistente	NotFoundPage.jsx, ProdusDetaliuPage.jsx	Se acceseaza o ruta inexistenta si /produse/999
S8-R6	CSS Modules si constante comune	*.module.css, constants.js	Se verifica importurile si aspectul aplicatiei
S8-R7	Build fara erori	Terminalul din frontend	Se ruleaza npm run build
S8-R8	README si jurnal AI	README.md, ai-log/etapa-08.md	Se verifica documentatia dupa completarea jurnalului
S8-R9	Etapa 8 publicata pe GitHub	Istoricul commiturilor	Se verifica dupa realizarea commiturilor


Stadiul proiectului
- [x] Etapa 8 – Implementare, verificare manuala si build
- [ ] Etapa 8 – Jurnal AI si public