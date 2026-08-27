let tajniBroj;
let pokusaji;

function novaIgra() {
    tajniBroj = Math.floor(Math.random() * 101);
    pokusaji = 10;

    document.getElementById("pokusaji").textContent = pokusaji;
    document.getElementById("unos").value = "";
    document.getElementById("poruka").textContent = "";
}

function provjeri() {
    if (pokusaji === 0) {
        document.getElementById("poruka").textContent =
            "Nema više pokušaja. Pokreni novu igru.";
        return;
    }

    let unos = document.getElementById("unos").value;

    if (unos === "") {
        document.getElementById("poruka").textContent =
            "Upiši broj od 0 do 100.";
        return;
    }

    let broj = Number(unos);

    if (broj < 0 || broj > 100) {
        document.getElementById("poruka").textContent =
            "Upiši broj od 0 do 100.";
        return;
    }

    pokusaji--;
    document.getElementById("pokusaji").textContent = pokusaji;

    if (broj === tajniBroj) {
        document.getElementById("poruka").textContent =
            "Bravo! Pogodio si broj!";
    } else if (pokusaji === 0) {
        document.getElementById("poruka").textContent =
            "Nema više pokušaja. Broj je bio " + tajniBroj + ".";
    } else if (broj > tajniBroj) {
        document.getElementById("poruka").textContent =
            "Prevelik broj!";
    } else {
        document.getElementById("poruka").textContent =
            "Premalen broj!";
    }
}

novaIgra();