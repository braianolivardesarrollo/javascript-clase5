alert ("bienvenido al estacionamiento automatico inteligente")

    const contraseñaCorrecta = "2026"
    let login = false;
    let salir = false;

function accesoCorrecto(contraseña){
    return contraseña === contraseñaCorrecta
  }

    while (login === false && salir === false){
  let contraseña = prompt("ingrese codigo de acceso")

  if (accesoCorrecto(contraseña) === true){
    console.log ("acceso autorizado")
    login = true
  }
    else { 
        let volverAIntentar = prompt ("la contraseña es incorrecta, ¿quiere volver a colocar la contraseña (si/no)");
    if (volverAIntentar === "no"){
        console.log("acceso cancelado");
        salir = true;
        }
      }
    }

 const ubicaciones = ["azul", "rojo", "verde", "negro", "blanco"]

 class Vehiculo {
    constructor(patente, tipo, color, horasEstadia) {
        this.patente = patente;
        this.tipo = tipo;
        this.color = color;
        this.horasEstadia = horasEstadia;
    }

    calcularCosto() {
    return this.horasEstadia * 18;
 }

}

// Vehículos registrados en el estacionamiento
const vehiculo1 = new Vehiculo("ABC123", "Auto", "Rojo", 2);
const vehiculo2 = new Vehiculo("DEF456", "Camioneta", "Negro", 4);
const vehiculo3 = new Vehiculo("GHI789", "Auto", "Blanco", 3);

console.log("--- Vehículos registrados ---");
console.log(vehiculo1);
console.log("Costo vehículo 1: $" + vehiculo1.calcularCosto());

console.log(vehiculo2);
console.log("Costo vehículo 2: $" + vehiculo2.calcularCosto());

console.log(vehiculo3);
console.log("Costo vehículo 3: $" + vehiculo3.calcularCosto());

console.log("--- Información del vehículo 1 ---");
console.log("Patente: " + vehiculo1.patente);
console.log("Tipo: " + vehiculo1.tipo);
console.log("Color: " + vehiculo1.color);
console.log("Horas de estadía: " + vehiculo1.horasEstadia);
console.log("Costo de estadía: $" + vehiculo1.calcularCosto());

function mostrarUbicaciones() {

    console.log("--- Ubicaciones disponibles ---");

    for (let ubicacion of ubicaciones) {

        console.log("Ubicación disponible: " + ubicacion);

    }
}

     if (login === true){

     ubicaciones.push("gris")

     ubicaciones.unshift("violeta")

     let elementoEliminado =  ubicaciones.pop()

     alert("la ubicacion " + elementoEliminado + " acaba de ser ocupada")

     mostrarUbicaciones()

let ubicacionBuscada = prompt("Ingrese una ubicación")
           
let existeUbicacion = ubicaciones.includes(ubicacionBuscada)

if (existeUbicacion === true) {
    let indiceUbicacion = ubicaciones.indexOf(ubicacionBuscada)

    console.log("La ubicación " + ubicacionBuscada + " se encuentra en el índice " + indiceUbicacion)

    ubicaciones.splice(indiceUbicacion, 1, "ocupada")

} else {
    console.log("ubicacion inexistente")
}
console.log("ubicacion elegida: " + ubicacionBuscada)
    }

    console.log("ubicaciones disponibles " + ubicaciones)

    if (login === true){
      let tiempo = parseInt(prompt ("indique la duracion de su estadia"))
      
vehiculo1.horasEstadia = tiempo;

console.log("Su precio a abonar es $" + vehiculo1.calcularCosto());
    }