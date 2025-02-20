const arr=[5,1,3,2,6];
//reduce is used where take all values of array and come with a single value of an array

// sum or max No

function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        
        sum=sum+arr[i]
    }
    return sum;
}
console.log(findSum(arr));

const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
}, 0)
// reduce fn => 2 arguments -> fn and Initial valur of acc here 0
console.log(output)



// accumulator -> accumulate the result what we want in an example -> sum

// current -> for current values in an array like 5,1,3,2,6 -> arr[i]


//  find max in an array const arr=[5,1,3,2,6]

function findMax(arr){
    let max=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
        
    }
    return max;
}
console.log(findMax(arr))       //using function

const maxOutput=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max

}, 0)
console.log(maxOutput);         //using reduce