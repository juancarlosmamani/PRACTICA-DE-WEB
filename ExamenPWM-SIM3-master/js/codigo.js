let lista=[];
let listaNum=[];
let listaLet=[];

function agregar(){
    lista.push(document.getElementById("entrada1").value);
    document.getElementById("resultado1").innerHTML=lista;
    console.log(lista);
}
function agregar2(){
    listaNum.push(document.getElementById("entrada2").value);
    document.getElementById("resultado3").innerHTML=listaNum;
    console.log(listaNum);
}
function agregar3(){
    listaLet.push(document.getElementById("entrada3").value);
    document.getElementById("resultado4").innerHTML=listaLet;
    console.log(listaLet);
}
function mostrar(){
    document.getElementById("resultado2").innerHTML=lista;
}
function eliminar(){
    lista.pop();
    document.getElementById("resultado2").innerHTML=lista;
}
function ordenar(){
    listaNum.sort(function(a,b){return a - b});
    document.getElementById("resultado3").innerHTML=listaNum;
    console.log(listanum);
}
function ordenar2(){
    listaLet.sort();
    document.getElementById("resultado4").innerHTML=listaLet;
    console.log(listaLet);
}