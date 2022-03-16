// Tu código aquí

let form = document.forms["messages"];

form.addEventListener('submit', function(e){
    console.log("Informacion sobre el objetivo event: ", e)
    e.preventDefault() // Curioso sobre lo que hace esto? Mira como se comporta el formulario cuando haces clic en "Enviar" si esta línea está comentada.

    let infoCaja = e.target.elements["message"].value;

    document.querySelector(".message-content").textContent = infoCaja;

    console.log("Hemos hecho clic en el botón de submit!", infoCaja)

})

    