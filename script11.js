function igraj(igrac) {
    let broj = Math.floor(Math.random() * 3);
    let racunalo;

    if (broj === 0) {
        racunalo = "kamen";
    } else if (broj === 1) {
        racunalo = "skare";
    } else {
        racunalo = "papir";
    }

    document.getElementById("racunalo").textContent =
        "Računalo je odabralo: " + racunalo;

    if (igrac === racunalo) {
        document.getElementById("poruka").textContent =
            "Neriješeno!";
    } else if (
        igrac === "kamen" &&
        racunalo === "skare"
    ) {
        document.getElementById("poruka").textContent =
            "Pobijedio si!";
    } else if (
        igrac === "skare" &&
        racunalo === "papir"
    ) {
        document.getElementById("poruka").textContent =
            "Pobijedio si!";
    } else if (
        igrac === "papir" &&
        racunalo === "kamen"
    ) {
        document.getElementById("poruka").textContent =
            "Pobijedio si!";
    } else {
        document.getElementById("poruka").textContent =
            "Računalo je pobijedilo!";
    }
}