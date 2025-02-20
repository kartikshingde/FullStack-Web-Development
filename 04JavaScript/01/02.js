let score=prompt("Enter your score")  //use prompt to take input on webpage only

if(score>=90 && score<=100){
    console.log("First class")
}
else if (score>=75 && score<=90){
    console.log("Second Class")
    
}
else if(score>=40 && score<=75){
    console.log("Only pass")
}
else{
    console.log("Fail...")
}

let student={
    fullName:"Kartik Shingde",
    age:20,
    sgpa:9.14,
    isPass:true,
}