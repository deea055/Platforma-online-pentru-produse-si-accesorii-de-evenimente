const produse = [
    {
        id: 1,
        nume: "Wedding Invitation",
        indisponibil: false,
        tip: "invitatii"
    },
    {
        id: 2,
        nume: "Personalized Envelope",
        indisponibil: true,
        tip: "accesorii"
    },
    {
        id: 3,
        nume: "Wedding Ring Mirror",
        indisponibil: false,
        tip: "accesorii"
    }
];

const TIPURI = ["invitatii", "lumanari", "accesorii"];


/* LISTAREA NUMELOR */

function listeazaNume(lista) {
    return lista.map((p) => p.nume);
}


/* NUMARAREA PRODUSELOR DISPONIBILE */

function numaraDisponibile(lista) {
    return lista.filter((p) => !p.indisponibil).length;
}


/* CAUTAREA DUPA NUME */

function cautaDupaNume(lista, text) {
    const cautare = text.toLowerCase();

    return lista.filter((p) =>
        p.nume.toLowerCase().includes(cautare)
    );
}


/* CALCULAREA URMATORULUI ID */

function nextId(lista) {
    return lista.reduce(
        (max, p) => Math.max(max, p.id),
        0
    ) + 1;
}


/* ADAUGAREA UNUI PRODUS */

function adaugaProdus(lista, nume, tip = "accesorii") {
    const numeCurat = nume.trim();

    if (numeCurat === "") {
        console.log("Numele produsului nu poate fi gol.");
        return lista;
    }

    if (!TIPURI.includes(tip)) {
        console.log("Tipul produsului nu este valid.");
        return lista;
    }

    const produsNou = {
        id: nextId(lista),
        nume: numeCurat,
        indisponibil: false,
        tip: tip
    };

    return [...lista, produsNou];
}


/* SCHIMBAREA DISPONIBILITATII */

function comutaDisponibilitate(lista, id) {
    return lista.map((p) =>
        p.id === id
            ? { ...p, indisponibil: !p.indisponibil }
            : p
    );
}


/* STERGEREA UNUI PRODUS */

function stergeProdus(lista, id) {
    return lista.filter((p) => p.id !== id);
}


/* TESTE IN CONSOLA */

console.log("--- Citire ---");

console.log(
    "Produse:",
    listeazaNume(produse).join(", ")
);

console.log(
    "Disponibile:",
    numaraDisponibile(produse)
);

console.log(
    "Căutare 'wedding':",
    listeazaNume(
        cautaDupaNume(produse, "wedding")
    ).join(", ")
);


console.log("--- Adăugare ---");

let lista = adaugaProdus(
    produse,
    "Lumânare personalizată",
    "lumanari"
);

console.log(
    "Lista nouă:",
    lista.length,
    "produse"
);

console.log(
    "Originalul a rămas cu:",
    produse.length,
    "produse"
);


console.log("--- Modificare și ștergere ---");

lista = comutaDisponibilitate(lista, 1);

console.log(
    "După schimbarea id 1, disponibile:",
    numaraDisponibile(lista)
);

lista = stergeProdus(lista, 3);

console.log(
    "După ștergerea id 3:",
    listeazaNume(lista).join(", ")
);


console.log("--- Validare ---");

adaugaProdus(lista, " ");

adaugaProdus(
    lista,
    "Produs test",
    "tip-invalid"
);
