let trenutniBroj = Math.floor(Math.random() * 10) + 1;

document.getElementById("broj").textContent = trenutniBroj;

function pogodi(odgovor) {
    let noviBroj = Math.floor(Math.random() * 10) + 1;

    while (noviBroj === trenutniBroj) {
        noviBroj = Math.floor(Math.random() * 10) + 1;
    }

    if (
        odgovor === "vece" &&
        noviBroj > trenutniBroj
    ) {
        document.getElementById("poruka").textContent =
            "Točno! Novi broj je " + noviBroj + ".";
    } else if (
        odgovor === "manje" &&
        noviBroj < trenutniBroj
    ) {
        document.getElementById("poruka").textContent =
            "Točno! Novi broj je " + noviBroj + ".";
    } else {
        document.getElementById("poruka").textContent =
            "Netočno! Novi broj je " + noviBroj + ".";
    }

    trenutniBroj = noviBroj;
    document.getElementById("broj").textContent = trenutniBroj;
}