
// function hello(){
//     console.log("Hii Kartik");
// }
// hello();
function sum(a,b){

    return a+b;

}
console.log(sum(5));   //5 + undefined = NaN
console.log(sum(5,6));

//or
function sum2(a,b=5){          //b=5 is default value

    return a+b;

}
console.log(sum2(5));   

function func(){
    console.log(arguments);
}
func(1,2,3,4,5);