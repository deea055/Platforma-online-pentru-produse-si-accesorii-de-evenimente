# Etapa 6 – Date de la un API

## Ce am realizat

În această etapă am conectat aplicația Event Boutique la un API de test, folosind json-server.

Am creat fișierul `db.json`, în care am introdus 5 produse, și fișierul `api.js`, pentru a prelua produsele de pe server.

Am modificat `App.jsx` și am folosit `useEffect` pentru încărcarea automată a produselor.

Am adăugat un mesaj pentru încărcarea datelor și un mesaj de eroare pentru situațiile în care serverul nu funcționează.

## Cum am folosit AI

Am folosit ChatGPT pentru a înțelege cerințele etapei și pentru a adapta codul la proiectul meu.

AI m-a ajutat să configurez json-server, să creez funcția pentru preluarea produselor și să modific componenta `App.jsx`.

Am verificat fiecare modificare în Visual Studio Code și în browser.

## Probleme întâlnite și rezolvări

Am testat aplicația cu serverul pornit și am verificat că sunt afișate cele 5 produse.

Am oprit serverul și am reîncărcat pagina pentru a verifica mesajul de eroare.

Am pornit serverul cu o întârziere de 4 secunde și am verificat afișarea mesajului „Se încarcă produsele...”.

După repornirea serverului, produsele au fost afișate corect.

## Concluzie

Am reușit să conectez aplicația la un API de test și să încarc produsele de pe server.

În Etapa 7 voi implementa salvarea pe server a produselor adăugate, modificate sau șterse.