let kut;

function noviKut() {
    kut = Math.floor(Math.random() * 171) + 10;

    document.getElementById("drugaLinija").style.transform =
        "rotate(-" + kut + "deg)";

    document.getElementById("odgovor").value = "";
    document.getElementById("poruka").textContent = "";
}

function provjeri() {
    let odgovor = Number(document.getElementById("odgovor").value);
    let razlika = Math.abs(kut - odgovor);

    if (razlika === 0) {
        document.getElementById("poruka").textContent =
            "Točno! Kut je " + kut + "°.";
    } else if (razlika <= 10) {
        document.getElementById("poruka").textContent =
            "Vrlo blizu! Kut je " + kut + "°.";
    } else {
        document.getElementById("poruka").textContent =
            "Netočno. Kut je " + kut + "°.";
    }
}

noviKut();