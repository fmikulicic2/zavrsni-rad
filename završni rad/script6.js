let tajniKod;

function novaIgra() {
    let izbor = Math.floor(Math.random() * 4);

    if (izbor === 0) {
        tajniKod = 2468;

        document.getElementById("trag1").textContent =
            "1. Prva znamenka je 2.";
        document.getElementById("trag2").textContent =
            "2. Druga znamenka je dvostruko veća od prve.";
        document.getElementById("trag3").textContent =
            "3. Treća znamenka je 6.";
        document.getElementById("trag4").textContent =
            "4. Zadnja znamenka je 8.";
    } else if (izbor === 1) {
        tajniKod = 1357;

        document.getElementById("trag1").textContent =
            "1. Sve znamenke su neparne.";
        document.getElementById("trag2").textContent =
            "2. Prva znamenka je 1.";
        document.getElementById("trag3").textContent =
            "3. Svaka sljedeća znamenka veća je za 2.";
        document.getElementById("trag4").textContent =
            "4. Zadnja znamenka je 7.";
    } else if (izbor === 2) {
        tajniKod = 4321;

        document.getElementById("trag1").textContent =
            "1. Prva znamenka je 4.";
        document.getElementById("trag2").textContent =
            "2. Svaka sljedeća znamenka manja je za 1.";
        document.getElementById("trag3").textContent =
            "3. Treća znamenka je 2.";
        document.getElementById("trag4").textContent =
            "4. Zadnja znamenka je 1.";
    } else {
        tajniKod = 8080;

        document.getElementById("trag1").textContent =
            "1. Prva i treća znamenka su 8.";
        document.getElementById("trag2").textContent =
            "2. Druga znamenka je 0.";
        document.getElementById("trag3").textContent =
            "3. Druga i četvrta znamenka su jednake.";
        document.getElementById("trag4").textContent =
            "4. Kod završava znamenkom 0.";
    }

    document.getElementById("unos").value = "";
    document.getElementById("poruka").textContent = "";
}

function provjeri() {
    let unos = document.getElementById("unos").value;

    if (!/^\d{4}$/.test(unos)) {
        document.getElementById("poruka").textContent =
            "Upiši četveroznamenkasti kod.";
        return;
    }

    let kod = Number(unos);

    if (kod === tajniKod) {
        document.getElementById("poruka").textContent =
            "Bravo! Sef je otključan!";
    } else {
        document.getElementById("poruka").textContent =
            "Pogrešan kod. Pokušaj ponovno.";
    }
}

novaIgra();