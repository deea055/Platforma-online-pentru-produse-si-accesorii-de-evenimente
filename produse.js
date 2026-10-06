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
