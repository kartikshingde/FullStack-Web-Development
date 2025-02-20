const button=document.getElementById('button')
const body=document.getElementById('body')
const colors=['red','yellow','orange','green','blue','indigo','violet']

button.addEventListener('click',function(){
    button.style.backgroundColor="red"
    const colorIndex=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorIndex]
    
})