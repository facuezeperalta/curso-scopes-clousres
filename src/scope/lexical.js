const myGlobal = 0;

function myFuncition (){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //Funcion interna estamos creando un closures
        const inner = 2;
        console.log(myNumber,myGlobal);

        function child(){ 
            console.log(inner,myNumber,myGlobal);
        }
        return child();
    }
    return parent();
}

myFuncition();


function crearContador(){
    let contador = 0;
    return function incrementar(){
        contador = contador + 1;
        return contador;
    };
}


const contador1 = crearContador();