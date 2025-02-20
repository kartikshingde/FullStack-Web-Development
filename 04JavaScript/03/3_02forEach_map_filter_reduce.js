/**
 * for each fn f
 */
let arr=["sachin","virat","rohit"]

arr.forEach(element=>console.log(element))  //=>sachin,virat,rohit

/**
 * map  =>Creation of new transformed array
 */


let arr2=[1,2,3,4]

let arr3=arr2.map(num=>num**2)
console.log(arr3)

/**
 * filter
 */

let num=[1,2,3,4,5,6,7,8,9];
let even_arr=num.filter(num=>num%2==0);
console.log(even_arr);

/**
 * Reduce
 */

let nums=[1,2,3,4,5,6];
let sum=nums.reduce((curr,next)=>curr+next)
console.log(sum);
