const users=[
    {firstName:"kartik",lastName:"Shingde",age:21},
    {firstName:"donald",lastName:"trump",age:75},
    {firstName:"elon",lastName:"Musk",age:50},
    {firstName:"rahul",lastName:"tiwari",age:21},
];


// list of full name
// like["kartik shingde","donald trump"...]
const fullName=users.map(x=>x.firstName+ " "+x.lastName)
// Here x maps to each objects in array
// this type of array function directly return ,, no need to write return kayword
console.log(fullName)



// how many people have same age like  acc={21:2,75:1,50:1}
// use reduce here, we want to reduce array to particular output

const output=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]

    }
    else{
        acc[curr.age]=1
    }
    return acc;

},{})
console.log(output)



// find firstName of people whose age is less than 30 like{+["kartik","rahul"]}
// Use filter and map Here
// chaining filter, map

const outputFilter=users.filter(x => x.age<30)
.map((x)=>x.firstName) 
console.log(outputFilter)
// output of filter is then mapped and then we get firstName

// OR we can find it by Using Reduce Also...
const useReduce=users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName)
    }
    return acc;

},[])
console.log(useReduce)

