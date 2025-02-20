        // console.log("Loops")

for(let i=0;i<10;i++){
    console.log("I Can Do It!!!")
}
let student={
    fullName:"Kartik Shingde",
    age:20,
    sgpa:9.14,
    isPass:true,
}
console.log(`Student name is ${student.fullName} and sgpa is ${student.sgpa}`)


     //Guess game
let number=17
let usernum=prompt("Enter any 2 digit number for guessing my number: ")
while(usernum!=number){
    usernum=prompt("Wrong guess,Enter number again")
}
alert("Correct Guess: ");



let fullName=prompt("Enter your fullName, i will generate you username: ")


console.log("@" + fullName + fullName.length)
