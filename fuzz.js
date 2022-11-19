document.querySelector('#num').focus()

addEventListener('DOMContentLoaded', function (){

    document.querySelector('#sub').disabled = true

    document.querySelector('#num').onkeyup = ()=>{
        if (document.querySelector('#num').value.length >= 1){
            document.querySelector('#sub').disabled = false;
        }else{
            document.querySelector('#sub').disabled = true;
        }
    }
    document.querySelector('form').onsubmit = ()=>{
        let number = parseInt(document.querySelector('#num').value);
        
        for (let i = 1; i<number; i++){
            if (i%3==0&&i%5==0){
                const li = document.createElement('li')
                li.innerHTML = 'FizzBuzz'
                document.querySelector('ul').append(li)
                li.style.listStyle = 'none'   

            }else if (i%3==0){
                const li = document.createElement('li')
                li.innerHTML = 'Fizz'
                document.querySelector('ul').append(li)
                li.style.listStyle = 'none'

            }else if (i%5==0){
                const li = document.createElement('li')
                li.innerHTML = 'Buzz'
                document.querySelector('ul').append(li)
                li.style.listStyle = 'none'
                
            }else{ 
                const li = document.createElement('li')
                li.innerHTML = i
                document.querySelector('ul').append(li)
                li.style.listStyle = 'none'
                
            }
        }
        return false
    }  
})