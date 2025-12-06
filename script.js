
const welcomeMessage = 'welcome to my site'

console.log(welcomeMessage);

//get element by id
//get elements by class name
//queryselector

const title = document.getElementById('title-1')
console.log(title);

const text = document.getElementsByClassName('title-2')
console.log(text[1]);



const list = document.getElementById('list')
const input = document.getElementById('input')
const button = document.getElementById('button')

const onClick =  () => {
    const item = document.createElement("li")
    item.innerHTML = input.value
    list.appendChild(item)
    input.value = ''
}
button.addEventListener("click", onClick)

const colorInput = document.getElementById('color-input')
const colorBtn = document.getElementById('color-btn')

const body = document.body
colorBtn.addEventListener('click', () => {
    body.style.backgroundColor = colorInput.value
})



