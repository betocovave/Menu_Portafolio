cajaPrincipal = document.getElementById("rating");
for (let i = 1; i <= 10; i++) {
    let imagen = document.createElement("img");
    imagen.src = "amor-de-corazon.png";
    cajaPrincipal.appendChild(imagen);
    imagen.classList.add("item");
    imagen.setAttribute("pos", i);
    imagen.id = "item-" + i;
    imagen.addEventListener("mouseover", 
        function () {
            document.querySelectorAll(".item").forEach(img => img.src = "amor-de-corazon.png");
            let posicion = parseInt(this.getAttribute("pos"));
            for (let j = 1; j <= posicion; j++) {
                document.getElementById("item-" + j).src = "copas.png";
            }
        }
    );
}