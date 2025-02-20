let person={
    name:"kartik",
    age:20,
    address:{
        city:"Pune",
        state:"Maharashtra",
        country:"India"
    }
}
console.log(person);
// console.log(typeof person)
// console.log(person)

// for(let key in person){
//     console.log(key," ",person)   //imp
// }

// console.log(Object.keys(person))
// console.log(Object.values(person))

// console.log(Object.entries(person))  //imp

/**
 * Cloning an object using assign
 */
const new_person=Object.assign({education:"BE"},person,{role:"Developer"})
console.log(new_person)
