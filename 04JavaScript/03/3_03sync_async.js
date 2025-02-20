/**
 * synchrnous Processing
 */
console.log("For Synchronous Processing")
console.log("Hello1");
function hello(){
    console.log("Hello2")
}
hello();
console.log("Hello3")




/**
 * Asynchronoous Processing
 */
console.log("For Asynchronous Processing ")
console.log("Hello1");
setTimeout(()=>{            //used for Asynchrous processing
    console.log("Hello2")
},1000)   //1sec late execution
console.log("Hello3")
