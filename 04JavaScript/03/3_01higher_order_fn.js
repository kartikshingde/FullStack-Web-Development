
function fn1(fn2,a,b){

    return fn2(a,b);
}

function multiply(a,b){
    return a*b;
}

console.log(fn1(multiply,5,6))