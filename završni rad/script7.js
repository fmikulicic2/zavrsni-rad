let stapici;
let igraGotova;

function novaIgra() {
    stapici = 15;
    igraGotova = false;

    document.getElementById("brojStapica").textContent = stapici;
    document.getElementById("poruka").textContent = "";
}

function uzmi(broj) {
    if (igraGotova) {
        return;
    }

    if (broj > stapici) {
        return;
    }

    stapici = stapici - broj;
    document.getElementById("brojStapica").textContent = stapici;

    if (stapici === 0) {
        document.getElementById("poruka").textContent =
            "Uzeo si zadnji štapić. Izgubio si!";

        igraGotova = true;
        return;
    }

    let racunalo = Math.floor(Math.random() * 3) + 1;

    if (racunalo > stapici) {
        racunalo = stapici;
    }

    stapici = stapici - racunalo;
    document.getElementById("brojStapica").textContent = stapici;

    if (stapici === 0) {
        document.getElementById("poruka").textContent =
            "Računalo je uzelo zadnji štapić. Pobijedio si!";

        igraGotova = true;
    } else {
        document.getElementById("poruka").textContent =
            "Računalo je uzelo " + racunalo + " štapića.";
    }
}

novaIgra();