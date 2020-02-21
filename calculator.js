function showaddt() {

            let one = parseInt(document.getElementById("first").value);
            let two = parseInt(document.getElementById("second").value);
            let pheptinh = one + two;
            document.getElementById("result").innerText = pheptinh;
}

function showsubt() {

    let one = parseInt(document.getElementById("first").value);
    let two = parseInt(document.getElementById("second").value);
    let pheptinh = one - two;
    pheptinh = one - two;
    document.getElementById("result").innerText = pheptinh;
    }
function showdivi() {

    let one = parseInt(document.getElementById("first").value);
    let two = parseInt(document.getElementById("second").value);
    let pheptinh;
    pheptinh = one / two;
    document.getElementById("result").innerText = pheptinh;
    }
function showmult() {

    let one = parseInt(document.getElementById("first").value);
    let two = parseInt(document.getElementById("second").value);
    let pheptinh;
    pheptinh=one * two;
    document.getElementById("result").innerText = pheptinh;
    }