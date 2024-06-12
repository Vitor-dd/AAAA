function sim() {
    alert("Sabia que ia topar :) Te amo capeta!!")
}

function desvia(t) {
    var btn = t
    btn.style.position = "absolute";
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log("Opa, desviei...")

}

ramdonNumber(0,100);

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
