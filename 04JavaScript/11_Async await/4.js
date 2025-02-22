const randomColor=function(){
    let hex="0123456789ABCDEF";
    let color="#";

    for(let i=0;i<6;i++){

        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

let intervalId;
const startChange=function(){
    
    intervalId=setInterval(changeBgColor,400)
    
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
    
    
};
const stopChange=function(){
    clearInterval(intervalId)
intervalId=null;
}

document.querySelector('#start').addEventListener('click',startChange);
document.querySelector('#stop').addEventListener('click',stopChange);


// const randomColor=function(){
//     const hex="0123456789ABCDEF"

//     let color="#"
//     for(let i=0;i<6;i++){
//         color+=hex[Math.floor(Math.random()*16)]

//     }
//     return color;
// }
// let intervalId
// const startChange=function(){
//     if(!intervalId){
//         intervalId=setInterval(changeBgColor,700)
//     }
    
//     function changeBgColor(){
//         document.body.style.backgroundColor=randomColor();
//     }
    
// };

// const stopChange=function(){
//     clearInterval(intervalId);
//     intervalId=null;
    
    
// }

// document.querySelector('#start').addEventListener('click',startChange)
// document.querySelector('#stop').addEventListener('click',stopChange)