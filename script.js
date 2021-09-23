console.log('veikia')

function zodziai(a, b) {
    console.log(a + " " + b)
}
zodziai("vienas", "du")

function antras() {
    window.location.href = "2nd.html"
}

function trecias() {
    window.location.href = "3rd.html"
}

function index() {
    window.location.href = "index.html"
}
let a = 0

function kubas1() {
    a++
    if (a % 3 == 1) {

        document.getElementsByClassName("kubasred")[0].style.display = "block";
        document.getElementsByClassName("kubaszalias")[0].style.display = "none";
        document.getElementsByClassName("kubasdideja")[0].style.display = "none";
    }
    if (a % 3 == 2) {
        document.getElementsByClassName("kubasred")[0].style.display = "none";
        document.getElementsByClassName("kubaszalias")[0].style.display = "block";
        document.getElementsByClassName("kubasdideja")[0].style.display = "none";
    }
    if (a % 3 == 0) {
        document.getElementsByClassName("kubasred")[0].style.display = "none";
        document.getElementsByClassName("kubaszalias")[0].style.display = "none";
        document.getElementsByClassName("kubasdideja")[0].style.display = "block";
    }
}

function refresh() {
    window.location.reload()
}

function sokaka() {
    console.log("sokinukas")
}

function funk1() {
    if (document.getElementById("kl1taip").checked) {
        document.getElementsByClassName("KL1")[0].style.display = "none";
        document.getElementsByClassName("KL2")[0].style.display = "flex"
    } else {
        document.getElementsByClassName("KL1")[0].style.display = "none";
        document.getElementsByClassName("klaida")[0].style.display = "flex"
    }
}

function funk2() {
    if (document.getElementById("kl2taip").checked) {
        document.getElementsByClassName("KL2")[0].style.display = "none";

        document.getElementsByClassName("KL3")[0].style.display = "flex"

    } else {
        document.getElementsByClassName("KL2")[0].style.display = "none";
        document.getElementsByClassName("klaida")[0].style.display = "flex"
    }
}

function funk3() {
    if (document.getElementById("kl3taip").checked) {
        document.getElementsByClassName("KL3")[0].style.display = "none";
        document.getElementsByClassName("KL4")[0].style.display = "flex"
    } else {
        document.getElementsByClassName("KL3")[0].style.display = "none";
        document.getElementsByClassName("klaida")[0].style.display = "flex"
    }
}

function funk4() {
    if (document.getElementById("kl4taip").checked) {
        document.getElementsByClassName("KL4")[0].style.display = "none";
        document.getElementsByClassName("KL5")[0].style.display = "flex"
    } else {
        document.getElementsByClassName("KL4")[0].style.display = "none";
        document.getElementsByClassName("klaida")[0].style.display = "flex"
    }
}

function funk5() {
    if (document.getElementById("kl5taip").checked) {
        document.getElementsByClassName("KL5")[0].style.display = "none";
        document.getElementsByClassName("perfecta")[0].style.display = "flex"
    } else {
        document.getElementsByClassName("KL5")[0].style.display = "none";
        document.getElementsByClassName("klaida")[0].style.display = "flex"
    }
}