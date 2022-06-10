
function miFuncion(argv) {
    console.log(argv)
}

const miFunction2 = function(argv)  {
    console.log("Funcion anonima ", argv)
}


miFuncion("Argumento 1"); let g = 5;

(function() { 
    console.log("Init")
})()
//IIFE