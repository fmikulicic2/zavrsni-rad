let vrijemePocetka;
let spremno = false;
let igraAktivna = false;
let cekanjeId;

function kreni() {
    clearTimeout(cekanjeId);

    spremno = false;
    igraAktivna = true;

    document.getElementById("polje").style.backgroundColor = "red";
    document.getElementById("polje").textContent = "ČEKAJ...";
    document.getElementById("poruka").textContent = "";

    let cekanje = Math.floor(Math.random() * 3001) + 2000;

    cekanjeId = setTimeout(function() {
        document.getElementById("polje").style.backgroundColor = "green";
        document.getElementById("polje").textContent = "KLIKNI!";

        vrijemePocetka = Date.now();
        spremno = true;
    }, cekanje);
}

function klik() {
    if (!igraAktivna) {
        return;
    }

    if (spremno === true) {
        let vrijeme = Date.now() - vrijemePocetka;

        document.getElementById("poruka").textContent =
            "Vrijeme reakcije: " + vrijeme + " ms";

        document.getElementById("polje").style.backgroundColor = "gray";
        document.getElementById("polje").textContent = "KLIKNI KRENI";

        spremno = false;
        igraAktivna = false;
    } else {
        clearTimeout(cekanjeId);

        document.getElementById("poruka").textContent =
            "Prerano si kliknuo!";

        document.getElementById("polje").style.backgroundColor = "gray";
        document.getElementById("polje").textContent = "KLIKNI KRENI";

        igraAktivna = false;
    }
}