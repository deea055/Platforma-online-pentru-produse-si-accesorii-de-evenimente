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
function listeazaNume(lista) {
    return lista.map((p) => p.nume);
}

console.log("Nume produse:", listeazaNume(produse).join(", "));
function listeazaNume(lista) {
    return lista.map((p) => p.nume);
}

console.log("Nume produse:", listeazaNume(produse).join(", "));
function cautaDupaNume(lista, text) {
    const cautare = text.toLowerCase();

    return lista.filter((p) =>
        p.nume.toLowerCase().includes(cautare)
    );
}

console.log(
    "Căutare 'wedding':",
    listeazaNume(cautaDupaNume(produse, "wedding")).join(", ")
);
function nextId(lista) {
    return lista.reduce((max, p) => Math.max(max, p.id), 0) + 1;
}

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
function comutaDisponibilitate(lista, id) {
    return lista.map((p) =>
        p.id === id
            ? { ...p, indisponibil: !p.indisponibil }
            : p
    );
}

function stergeProdus(lista, id) {
    return lista.filter((p) => p.id !== id);
}
