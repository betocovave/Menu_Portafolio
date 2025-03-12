boton = document.getElementById("boton");
boton.addEventListener("click", function(){
    notas = localStorage.getItem("notas");
    if(notas == null){
        array = [];
    } else {
        array = JSON.parse(notas);
    }
    areatexto = document.getElementById("texto");
    array.push(areatexto.value);
    areatexto.value = "";
    localStorage.setItem("notas", JSON.stringify(array));
    console.log(array);
    crearCajas();
    eliminar(array.length);
    crearCajas();
});

function crearCajas(){
    notas = localStorage.getItem("notas");
    if(notas == null){
        array = [];
    } else {
        array = JSON.parse(notas);
    }
    codigohtml = "";
    array.forEach((element,i) => {
        codigohtml = codigohtml + 
            `<div>
            <h1></h1>
            <p>${element}</p>
            <button id=${i} onclick="eliminar(this.id)">Eliminar</button>
            </div>`;
    });
    cajaNOTAS = document.getElementById("notas");
    cajaNOTAS.innerHTML = codigohtml;
}

function eliminar(id){
    notas = localStorage.getItem("notas");
    if(notas == null){
        array = [];
    } else {
        array = JSON.parse(notas);
    }
    array.splice(id, 1);
    localStorage.setItem("notas", JSON.stringify(array));
    crearCajas();
}