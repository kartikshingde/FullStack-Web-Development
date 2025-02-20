/**

const herPromise=new Promise((resolve,reject)=>{

    let parentDecision=true;

    if(parentDecision){
        resolve("yes,now we can marry",parentDecision)
    }
    else{
        reject("Papa ne IAS dhoond liya,sorry!!!",parentDecision)
    }
});

herPromise.then((msg,parentDecision)=>{
    console.log("Simran msg:",msg)
    console.log("Parente decision is : ",parentDecision)
    console.log("Lets book wedding venue.");
}).catch((msg,parentDecision)=>{
    console.log("Simran msg: ",msg);
    console.log("Parente decision is : ",parentDecision)
    console.log("Tinder kaha ho yaar.")
}).finally(()=>console.log("Chalo life me aage badhte hai!!")) **/

/**
 
const f1Promise=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Hey I am in for GOA")
        }
        else{
            reject("Sorry i cannot come to GOA, f1")
        }
    },3000)
    
})
const f2Promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Hey I am in for GOA")
        }
        else{
            reject("Sorry meri billi bimar hai , f2")
        }
    },3000)
})
const f3Promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("Hey I am in for GOA")
        }
        else{
            reject("Sorry Nahi aa sakta, f3")
        }
    },3000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{
    console.log(msg);
    console.log("yes,we are going to GOA")

}).catch((msg)=>{
    console.log(msg);
    console.log("Yaar band karo goa ka plan.")
})  **/



const gf1=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF 1: I will come for dinner")
        }
        else{
            reject("Phone is unreachable.")
        }
    },1000)
    
})
const gf2=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF 2: I will come for dinner")
        }
        else{
            reject("I am on diet")
        }
    },2000)
    
})
const gf3=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("GF 3: I will come for dinner")
        }
        else{
            reject("I cannot come,I have another plan.")
        }
    },3000)
    
})
Promise.any([gf1,gf2,gf3]).then(result=>{
    console.log(result)
    console.log("My valentine day is sorted")
}).catch(result=>{
    console.log(result)
    console.log("Its okk, no valentine day, no problem");
})
