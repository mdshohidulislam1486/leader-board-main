const makeRed = document.getElementById('make-red');
makeRed.style.color = "red"
const makeBrown = document.getElementById('make-brown');
makeBrown.style.color = 'brown'

const players = document.getElementsByClassName('player')
for(const player of players){
 player.style.backgroundColor ='rgba(0,0,0,.3)'   
 player.style.margin = '50px'
 player.style.padding ='5px'
 player.style.borderRadius = "5px"
}

const newUl = document.createElement('ul');
const ulSection = document.getElementById('section-3')
ulSection.style.marginBottom = '20px'
ulSection.appendChild(newUl)

const newLi =document.createElement('li')
newLi.innerText = "Our Latest Course"
const newLi2 =document.createElement('li')
newLi2.innerText = "Programming Bootcamp"
const newLi3 =document.createElement('li')
newLi3.innerText = "Customer Support Help Line"

newUl.appendChild(newLi)
newUl.appendChild(newLi2)
newUl.appendChild(newLi3)

const submit = document.createElement('button')
submit.innerText = 'Submit'
ulSection.appendChild(submit)
submit.style.padding = '10px 15px'
submit.style.outline = "none"
submit.style.border = "none"
submit.style.backgroundColor = 'blue'
submit.style.color ='#fff'
submit.style.borderRadius = '5px'

submit.addEventListener('mouseenter', function(){
 submit.style.backgroundColor = 'green'
})
submit.addEventListener('mouseleave', function(){
    submit.style.backgroundColor = 'blue'
   })

submit.addEventListener('click', function(){
    const newLi =document.createElement('li')
    newLi.innerText = "Our Latest Course"
    newUl.appendChild(newLi)
    if(parseFloat(inputFiled.value) <5 ){
        inputFiled.value = parseFloat(inputFiled.value) + 1
    } else {
        submit.setAttribute('disabled', true)
    }
   
})

const inputFiled = document.createElement('input')
// inputFiled.setAttribute('type:number')
inputFiled.value = '0'
inputFiled.style.width = '20px'

inputFiled.style.marginLeft = '20px'
ulSection.appendChild(inputFiled)