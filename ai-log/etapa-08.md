
# Etapa 8 - Navigare si pagini multiple

## 1. Obiectivul etapei

In aceasta etapa am adaugat navigarea intre pagini in aplicatia Event Boutique, folosind React Router.

Am pastrat functionalitatile realizate in etapele anterioare si designul aplicatiei.

## 2. Instrument AI utilizat

Am folosit ChatGPT pentru explicarea cerintelor, organizarea fisierelor, exemple de cod si identificarea erorilor.

## 3. Activitati realizate

- Am instalat react-router-dom.
- Am configurat BrowserRouter in main.jsx.
- Am creat rutele pentru pagina principala, detaliile unui produs si pagina Despre.
- Am creat componenta Layout pentru antet, meniu si subsol.
- Am folosit NavLink pentru navigarea intre pagini.
- Am creat pagina ProdusDetaliuPage.jsx.
- Am folosit useParams pentru preluarea ID-ului produsului din adresa.
- Am adaugat functia fetchProdus(id) in api.js.
- Am creat pagina NotFoundPage.jsx pentru adrese inexistente.
- Am separat stilurile in fisiere CSS Modules.
- Am creat constants.js pentru valorile comune ale formularului.
- Am pastrat adaugarea, cautarea, modificarea disponibilitatii si stergerea produselor.

## 4. Exemple de utilizare AI

Am cerut explicatii pas cu pas pentru configurarea rutelor si pentru folosirea CSS Modules.

Am folosit sugestiile AI pentru organizarea componentelor, dar am verificat modificarile in Visual Studio Code si in browser.

La modificarea stilurilor CSS au aparut diferente fata de designul initial. Am revenit la stilurile dorite si am corectat separat avertismentul legat de importul fonturilor.

## 5. Testarea aplicatiei

Am verificat manual:

- Afisarea listei de produse pe pagina principala.
- Deschiderea paginii de detalii prin apasarea pe numele unui produs.
- Revenirea la lista produselor.
- Navigarea la pagina Despre.
- Revenirea de pe pagina Despre la produsele aplicatiei.
- Afisarea paginii 404 pentru o adresa inexistenta.
- Afisarea unui mesaj de eroare pentru un produs inexistent.

Am executat comanda:

```bash
npm run build
```

Rezultat: build realizat cu succes, 41 de module procesate, fara avertismente CSS.

## 6. Ce am invatat

Am invatat cum se configureaza React Router, cum se folosesc rutele dinamice si cum se organizeaza o aplicatie React cu mai multe pagini.

Am inteles si cum ajuta CSS Modules la separarea stilurilor componentelor.

## 7. Concluzie

Etapa 8 a adaugat navigarea intre pagini, pastrand functionalitatile si aspectul aplicatiei Event Boutique.
