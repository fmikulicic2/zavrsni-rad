function provjeri() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;
    let p3 = document.getElementById("p3").value;
    let p4 = document.getElementById("p4").value;
    let p5 = document.getElementById("p5").value;
    let p6 = document.getElementById("p6").value;
    let p7 = document.getElementById("p7").value;
    let p8 = document.getElementById("p8").value;

    if (
        p1 === "" ||
        p2 === "" ||
        p3 === "" ||
        p4 === "" ||
        p5 === "" ||
        p6 === "" ||
        p7 === "" ||
        p8 === ""
    ) {
        document.getElementById("poruka").textContent =
            "Ispuni sva prazna polja.";
        return;
    }

    p1 = Number(p1);
    p2 = Number(p2);
    p3 = Number(p3);
    p4 = Number(p4);
    p5 = Number(p5);
    p6 = Number(p6);
    p7 = Number(p7);
    p8 = Number(p8);

    if (
        p1 === 2 &&
        p2 === 3 &&
        p3 === 3 &&
        p4 === 1 &&
        p5 === 4 &&
        p6 === 2 &&
        p7 === 1 &&
        p8 === 4
    ) {
        document.getElementById("poruka").textContent =
            "Bravo! Sudoku je točno riješen.";
    } else {
        document.getElementById("poruka").textContent =
            "Nije točno. Pokušaj ponovno.";
    }
}

function ocisti() {
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
    document.getElementById("p3").value = "";
    document.getElementById("p4").value = "";
    document.getElementById("p5").value = "";
    document.getElementById("p6").value = "";
    document.getElementById("p7").value = "";
    document.getElementById("p8").value = "";

    document.getElementById("poruka").textContent = "";
}