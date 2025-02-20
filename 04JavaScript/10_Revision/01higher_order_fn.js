
// Calculate Area,Circumferance and diameter of circle with below radii

const radius=[3,1,2,4]

//Logic
const area=function(radius){
    return Math.PI*radius*radius;
}
const circumferance=function(radius){
    return 2*Math.PI*radius;
}
const diameter=function(radius){
    return 2*radius;
}


// const calculate=function(arr,logic){
//     const output=[];
//     for(let i=0;i<arr.length;i++){
//         output.push(logic(arr[i]))
//     }
//     return output;
// }

// console.log(radius.map(area))

// console.log(calculate(radius,area))

// console.log(calculate(radius,circumferance))
// console.log(calculate(radius,diameter))



//pollyFill for Map
Array.prototype.calculate=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]))
    }
    return output;
}

console.log(radius.map(area))

console.log(radius.calculate(area))




// function x(){
//     console.log("Namaste")
// }

// function y(x){
//     x();
// }

// y is Higher Order Function
// x is CallBack Function

// Higher Order Function=> Function which takes function as Argument and return a function
// CallBack Function=> Function is which argument to other fuction