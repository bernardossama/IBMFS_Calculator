function temperature(){
    var c = document.getElementById("c").value;
    var f = (c * 9 / 5);
    document.getElementById("f").value = f;
}

function weight(){
    var kg = document.getElementById("kg").value;
    var lbs = kg * 2.2;
    document.getElementById("lbs").value = lbs;
}

function distance(){
    var km = document.getElementById("km").value;
    var mi = km*0.62137;
    document.getElementById("mi").value = mi;
}
