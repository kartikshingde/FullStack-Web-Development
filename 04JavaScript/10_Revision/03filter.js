const arr=[5,1,3,2,6];
// filter is used to filter things in an array

// filter all odd values

function isOdd(x){
    return x%2;
}
function isEven(x){
    return x%2==0;
}
// const output=arr.filter(isOdd)
// console.log(output)
// const output=arr.filter(isEven)    //passing is Even fn where logic is written
// console.log(output)

const output=arr.filter((x)=>{
    return x%2==0;
})
console.log(output)