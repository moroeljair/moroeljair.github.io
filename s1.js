let bandera1 = document.getElementById('bandera1');
let formacion1 = document.getElementById('formacion1');

let b1 = false;
bandera1.onclick = function() {
    if(!b1){
        formacion1.style.display = "block";
        b1=true;
    }else{
        formacion1.style.display = "none";
        b1=false;
    }
}

let bandera2 = document.getElementById('bandera2');
let formacion2 = document.getElementById('formacion2');

let b2 = false;
bandera2.onclick = function() {
    if(!b2){
        formacion2.style.display = "block";
        b2=true;
    }else{
        formacion2.style.display = "none";
        b2=false;
    }
}

let bandera3 = document.getElementById('bandera3');
let formacion3 = document.getElementById('formacion3');

let b3 = false;
bandera3.onclick = function() {
    if(!b3){
        formacion3.style.display = "block";
        b3=true;
    }else{
        formacion3.style.display = "none";
        b3=false;
    }
}

let bandera4 = document.getElementById('bandera4');
let proyecto1 = document.getElementById('proyecto1');

let b4 = false;
bandera4.onclick = function() {
    if(!b4){
        proyecto1.style.display = "block";
        b4=true;
    }else{
        proyecto1.style.display = "none";
        b4=false;
    }
}

let bandera5 = document.getElementById('bandera5');
let proyecto2 = document.getElementById('proyecto2');

let b5 = false;
bandera5.onclick = function() {
    if(!b5){
        proyecto2.style.display = "block";
        b5=true;
    }else{
        proyecto2.style.display = "none";
        b5=false;
    }
}