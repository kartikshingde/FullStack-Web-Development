/** 
async function getMsg(){
    return "Hello Students"
}
console.log(getMsg())
getMsg().then(result=>console.log(result))**/


//Print hello after wait
/** 
function print(){
    console.log("First Line")

    setTimeout(()=>{
        console.log("In function")
    },3000)
    console.log("Last Line")
}
print()     **/


console.log("Hello form begining")

async function print(){
    console.log("First Line")

    let data=new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("Hello Everyone")
        },2000)
    })
    let result=await data   //Start waiting for data promise to complete
    console.log(result)
    console.log("Last Line")
}

print()

console.log("Hello from end")