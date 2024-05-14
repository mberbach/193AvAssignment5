function dispAlrt() {
    alert("Hello, world!");
}

function makTxtBig() {
    document.getElementById("txtIn").style.fontSize = "24pt";
}

function txtStylSwtch() {
    const txtAr = document.getElementById("txtIn");
    const fancyRadio = document.getElementById("fancy");
    const boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        alert("FancyShmancy detected");
        txtAr.style.fontWeight = "bold";
        txtAr.style.color = "blue";
        txtAr.style.textDecoration = "underline";
    } else if (boringRadio.checked) {
        alert("BoringBetty detected");
        txtAr.style.fontWeight = "normal";
        txtAr.style.color = "black";
        txtAr.style.textDecoration = "none";
    }
}

function mooBeam() {
    const txtAr = document.getElementById("txtIn");
    let txt = txtAr.value.toUpperCase();

    const sentence = txt.split(".");
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].trim() !== "") {
            sentence[i] = sentence[i].trim() + "-MOO";
        }
    }
    txt = sentence.join(". ");
    txtAr.value = txt;
}