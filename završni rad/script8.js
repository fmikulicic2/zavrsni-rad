let polje1;
let polje2;
let polje3;
let pogodaka;
let mozeOdabrati;

function novaIgra() {
    pogodaka = 0;
    mozeOdabrati = false;

    polje1 = Math.floor(Math.random() * 9) + 1;
    polje2 = Math.floor(Math.random() * 9) + 1;
    polje3 = Math.floor(Math.random() * 9) + 1;

    while (polje2 === polje1) {
        polje2 = Math.floor(Math.random() * 9) + 1;
    }

    while (polje3 === polje1 || polje3 === polje2) {
        polje3 = Math.floor(Math.random() * 9) + 1;
    }

    for (let i = 1; i <= 9; i++) {
        document.getElementById("p" + i).className = "";
    }

    document.getElementById("p" + polje1).className = "aktivno";
    document.getElementById("p" + polje2).className = "aktivno";
    document.getElementById("p" + polje3).className = "aktivno";

    document.getElementById("poruka").textContent =
        "Zapamti polja!";

    setTimeout(sakrijPolja, 2000);
}

function sakrijPolja() {
    document.getElementById("p" + polje1).className = "";
    document.getElementById("p" + polje2).className = "";
    document.getElementById("p" + polje3).className = "";

    document.getElementById("poruka").textContent =
        "Sada odaberi zapamćena polja.";

    mozeOdabrati = true;
}

function odaberi(broj) {
    if (!mozeOdabrati) {
        return;
    }

    let polje = document.getElementById("p" + broj);

    if (polje.className === "pogodeno") {
        return;
    }

    if (
        broj === polje1 ||
        broj === polje2 ||
        broj === polje3
    ) {
        polje.className = "pogodeno";
        pogodaka++;

        if (pogodaka === 3) {
            document.getElementById("poruka").textContent =
                "Bravo! Zapamtio si sva polja!";

            mozeOdabrati = false;
        }
    } else {
        document.getElementById("poruka").textContent =
            "Pogrešno polje!";
    }
}