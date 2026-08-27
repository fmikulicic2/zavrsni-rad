let postotak;

function novaIgra() {
    postotak = Math.floor(Math.random() * 81) + 10;

    document.getElementById("tekucina").style.height =
        postotak + "%";

    document.getElementById("slider").value = 50;
    document.getElementById("vrijednost").textContent = 50;
    document.getElementById("poruka").textContent = "";
}

function prikaziVrijednost() {
    let vrijednost = document.getElementById("slider").value;

    document.getElementById("vrijednost").textContent = vrijednost;
}

function provjeri() {
    let odgovor = Number(document.getElementById("slider").value);
    let razlika = Math.abs(postotak - odgovor);

    if (razlika === 0) {
        document.getElementById("poruka").textContent =
            "Točno! Spremnik je napunjen " + postotak + "%.";
    } else if (razlika <= 5) {
        document.getElementById("poruka").textContent =
            "Odlično! Točno je " + postotak + "%.";
    } else if (razlika <= 15) {
        document.getElementById("poruka").textContent =
            "Blizu! Točno je " + postotak + "%.";
    } else {
        document.getElementById("poruka").textContent =
            "Netočno. Točno je " + postotak + "%.";
    }
}

novaIgra();