let broj1;
let broj2;
let broj3;
let broj4;

function novaIgra() {
    let izbor = Math.floor(Math.random() * 8);

    if (izbor === 0) {
        broj1 = 48;
        broj2 = 2;
        broj3 = 3;
        broj4 = 3;
    } else if (izbor === 1) {
        broj1 = 42;
        broj2 = 2;
        broj3 = 5;
        broj4 = 2;
    } else if (izbor === 2) {
        broj1 = 5;
        broj2 = 5;
        broj3 = 2;
        broj4 = 1;
    } else if (izbor === 3) {
        broj1 = 7;
        broj2 = 4;
        broj3 = 3;
        broj4 = 1;
    } else if (izbor === 4) {
        broj1 = 3;
        broj2 = 9;
        broj3 = 1;
        broj4 = 2;
    } else if (izbor === 5) {
        broj1 = 3;
        broj2 = 10;
        broj3 = 2;
        broj4 = 4;
    } else if (izbor === 6) {
        broj1 = 7;
        broj2 = 2;
        broj3 = 8;
        broj4 = 4;
    } else {
        broj1 = 6;
        broj2 = 9;
        broj3 = 2;
        broj4 = 3;
    }

    document.getElementById("broj1").textContent = broj1;
    document.getElementById("broj2").textContent = broj2;
    document.getElementById("broj3").textContent = broj3;
    document.getElementById("broj4").textContent = broj4;

    document.getElementById("operator1").value = "+";
    document.getElementById("operator2").value = "+";
    document.getElementById("operator3").value = "+";

    document.getElementById("poruka").textContent = "";
}

function provjeri() {
    let operator1 = document.getElementById("operator1").value;
    let operator2 = document.getElementById("operator2").value;
    let operator3 = document.getElementById("operator3").value;

    let tocno = false;

    // 48 / 2 + 3 - 3 = 24
    if (
        broj1 === 48 &&
        operator1 === "/" &&
        operator2 === "+" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    // 42 / 2 + 5 - 2 = 24
    else if (
        broj1 === 42 &&
        operator1 === "/" &&
        operator2 === "+" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    // 5 * 5 - 2 + 1 = 24
    else if (
        broj1 === 5 &&
        operator1 === "*" &&
        operator2 === "-" &&
        operator3 === "+"
    ) {
        tocno = true;
    }

    // 7 * 4 - 3 - 1 = 24
    else if (
        broj1 === 7 &&
        operator1 === "*" &&
        operator2 === "-" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    // 3 * 9 - 1 - 2 = 24
    else if (
        broj1 === 3 &&
        broj2 === 9 &&
        operator1 === "*" &&
        operator2 === "-" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    // 3 * 10 - 2 - 4 = 24
    else if (
        broj1 === 3 &&
        broj2 === 10 &&
        operator1 === "*" &&
        operator2 === "-" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    // 7 / 2 * 8 - 4 = 24
    else if (
        broj1 === 7 &&
        broj2 === 2 &&
        operator1 === "/" &&
        operator2 === "*" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    // 6 * 9 / 2 - 3 = 24
    else if (
        broj1 === 6 &&
        operator1 === "*" &&
        operator2 === "/" &&
        operator3 === "-"
    ) {
        tocno = true;
    }

    if (tocno === true) {
        document.getElementById("poruka").textContent =
            "Bravo! Rezultat je 24!";
    } else {
        document.getElementById("poruka").textContent =
            "Netočno. Pokušaj ponovno.";
    }
}

novaIgra();