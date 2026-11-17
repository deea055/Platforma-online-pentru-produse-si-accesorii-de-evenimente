
# Etapa 7 – Formular si validare

## Instrument AI utilizat

ChatGPT

## Cum am folosit AI

Am folosit ChatGPT pentru a intelege cerintele Etapei 7 si pentru a modifica aplicatia Event Boutique.

Am cerut explicatii simple, pas cu pas, si comentarii in cod pentru a intelege ce face fiecare functie.

Am pastrat designul si functionalitatile realizate in etapele anterioare.

## Ce am realizat

- Am creat componenta ProdusForm.jsx.
- Am adaugat validarea numelui produsului.
- Am conectat adaugarea produselor la server prin POST.
- Am conectat modificarea disponibilitatii prin PATCH.
- Am conectat stergerea produselor prin DELETE.
- Am adaugat mesaje de eroare.
- Am dezactivat butonul in timpul salvarii.
- Am adaugat atribute data-testid.
- Am creat fisierul tw.json.

## Probleme intampinate

La inceput, formularul nou nu mai avea aspectul celui vechi.

Am observat ca noua componenta folosea o alta clasa CSS. Am modificat clasa formularului pentru a pastra stilurile originale.

La testarea formularului cu serverul oprit, am observat ca serverul API functiona in continuare.

Am verificat portul 3001, am identificat procesul si l-am oprit pentru a putea testa eroarea de conectare.

## Cum am verificat rezultatele

Am testat aplicatia in browser.

Am verificat ca produsele adaugate raman salvate dupa F5.

Am verificat modificarea disponibilitatii si stergerea produselor.

Am incercat sa adaug un produs fara nume si am verificat afisarea mesajului de eroare.

Am oprit serverul si am verificat ca formularul pastreaza datele introduse daca salvarea nu reuseste.

Am pornit serverul cu o intarziere de 3 secunde si am verificat mesajul "Se salveaza...".

## Concluzie

In aceasta etapa am invatat cum sa folosesc un formular controlat in React, cum sa validez datele si cum sa salvez modificarile pe server.

Am inteles mai bine folosirea functiilor async/await si tratarea erorilor.
