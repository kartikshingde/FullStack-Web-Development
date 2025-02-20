
function outerfn(){
    let outerVar="In outer fn";
    function innerfn(){
        console.log(outerVar);
    }
    return innerfn
}

let fn=outerfn();
fn()            //still able to store local variable of outerFn

//Closures Used For Encapsulation.

//problem: to maintain count of customers

function CustomerCount(){
    let count=0;
    return function(){
        count++;
        console.log("New Customer Count is ",count);
    }
}
let counter=CustomerCount();
counter()                   //Encapsulation
counter()

