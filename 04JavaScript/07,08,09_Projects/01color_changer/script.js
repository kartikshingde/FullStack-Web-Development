


const buttons=document.querySelectorAll('.buttons')
const body=document.querySelector('body')


buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        // console.log(e)
        // console.log(e.target.id)
        const a=e.target.id;
        
        
        switch (a) {
            case 'purple':
                body.style.backgroundColor='purple'
                break;
            case 'orange':
                body.style.backgroundColor='orange'
                break;
            case 'yellow':purple
                body.style.backgroundColor='yellow'
                break;
            case 'green':
                body.style.backgroundColor='green'
                break;
            case 'blue':
                body.style.backgroundColor='blue'
                break;
            case 'indigo':
                body.style.backgroundColor='indigo'
                break;
        
            default:
                break;
        }
    })
    
})