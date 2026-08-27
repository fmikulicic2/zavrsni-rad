let blago;
let bomba;
let pokusaji;
let igraGotova;

function novaIgra() {
    blago = Math.floor(Math.random() * 9) + 1;
    bomba = Math.floor(Math.random() * 9) + 1;

    while (bomba === blago) {
        bomba = Math.floor(Math.random() * 9) + 1;
    }

    pokusaji = 3;
    igraGotova = false;

    document.getElementById("pokusaji").textContent = pokusaji;
    document.getElementById("poruka").textContent = "";

    for (let i = 1; i <= 9; i++) {
        document.getElementById("p" + i).textContent = "?";
        document.getElementById("p" + i).className = "";
    }
}

function otvori(broj) {
    if (igraGotova) {
        return;
    }

    let kutija = document.getElementById("p" + broj);

    if (kutija.className === "otvoreno") {
        return;
    }

    if (broj === blago) {
        kutija.textContent = "💰";

        document.getElementById("poruka").textContent =
            "Pronašao si blago!";

        igraGotova = true;
    } else if (broj === bomba) {
        kutija.textContent = "💣";

        document.getElementById("poruka").textContent =
            "BOMBA! Izgubio si!";

        igraGotova = true;
    } else {
        kutija.textContent = "X";
        kutija.className = "otvoreno";

        pokusaji--;

        document.getElementById("pokusaji").textContent =
            pokusaji;

        if (pokusaji === 0) {
            document.getElementById("poruka").textContent =
                "Nema više pokušaja!";

            igraGotova = true;
        } else {
            document.getElementById("poruka").textContent =
                "Prazno! Pokušaj ponovno.";
        }
    }
}

novaIgra();