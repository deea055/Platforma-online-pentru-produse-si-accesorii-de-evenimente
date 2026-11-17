
export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Functie comuna pentru cererile catre server
async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(`Eroare server: ${res.status}`);
  }

  return res.status === 204 ? null : res.json();
}

// Citirea produselor
export function fetchProduse() {
  return request("/produse");
}

// Adaugarea unui produs
export function createProdus(produs) {
  return request("/produse", {
    method: "POST",
    body: JSON.stringify(produs),
  });
}

// Modificarea unui produs
export function updateProdus(id, changes) {
  return request(`/produse/${id}`, {
    method: "PATCH",
    body: JSON.stringify(changes),
  });
}

// Stergerea unui produs
export function deleteProdus(id) {
  return request(`/produse/${id}`, {
    method: "DELETE",
  });
}

