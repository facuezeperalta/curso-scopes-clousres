// variables
var a; // declaro la variable a
var b = 'b'; // declaramos y asignamos.
 b = 'bb'; // reasignamos el valor que teniamos.
 var a = 'aa' // redeclaracion.


 // global scope.
 // cualquier variable que se encuentre en el documento pasan a ser variables globales.

 var fruit = 'apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();


