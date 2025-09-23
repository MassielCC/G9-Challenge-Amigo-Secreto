let amigos=[]
// Agregar nombres
function agregarAmigo(){
    let elementoHTML=document.getElementById("amigo")
    let nuevoAmigo= elementoHTML.value;
    
    // Validar entrada
    if (nuevoAmigo==""){
        alert("Por favor, inserte un nombre.");
    }
    else{
        // Si se confirma que se ha ingresado un nombre, agregar a la lista
        amigos.push(nuevoAmigo);
        // Limpiar el campo de entrada
        elementoHTML.value="";
    }
    actualizarLista(amigos);
}

// Visualizar lista
function actualizarLista(amigos){
    let lista=document.getElementById('listaAmigos');
    // Limpiar lista existente
    lista.innerHTML="";
    console.log("Numero de amigos: ", amigos.length);
    for(let i=0; i< amigos.length; i++){
        console.log(amigos[i]);
        lista.innerHTML="<li>"+ amigos[i] +"</li>";
    }
    //console.log(amigos);
}

// Sorteo aleatorio
function sortearAmigo(){

}