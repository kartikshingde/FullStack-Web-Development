
function hello(personName,func){

    let greeting="Hello "+personName
    func(greeting)
}

function display(message){
    console.log(message);
}
hello("Kartik",display);