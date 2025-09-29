function hitung(operator) {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil = "";

    if (isNaN(angka1) || isNaN(angka2)) {
        hasil = "Masukkan angka yang valid!";
    } else {
        switch(operator) {
            case '+':
                hasil = angka1 + angka2;
                break;
            case '-':
                hasil = angka1 - angka2;
                break;
            case '*':
                hasil = angka1 * angka2;
                break;
            case '/':
                hasil = angka2 !== 0 ? angka1 / angka2 : "Tidak bisa dibagi 0";
                break;
        }
    }

    document.getElementById("output").innerText = hasil;
}

function hitung(operator) {
    let angka1 = document.getElementById("angka1").value;
    let angka2 = document.getElementById("angka2").value;
    let output = document.getElementById("output");
    let hasil = "";

    // Reset gaya
    output.style.color = "black";

    if (angka1 === "" || angka2 === "") {
        hasil = "⚠️ Harap masukkan kedua angka!";
        output.style.color = "red";
    } else {
        angka1 = parseFloat(angka1);
        angka2 = parseFloat(angka2);

        if (isNaN(angka1) || isNaN(angka2)) {
            hasil = "⚠️ Input tidak valid!";
            output.style.color = "red";
        } else {
            switch (operator) {
                case '+':
                    hasil = angka1 + angka2;
                    break;
                case '-':
                    hasil = angka1 - angka2;
                    break;
                case '*':
                    hasil = angka1 * angka2;
                    break;
                case '/':
                    hasil = angka2 !== 0 ? angka1 / angka2 : "⚠️ Tidak bisa dibagi 0";
                    if (angka2 === 0) output.style.color = "red";
                    break;
            }
        }
    }

    output.innerText = hasil;
}
