
const welcomeMessage = 'welcome to my site'

const name = 'loura'
const title = document.getElementById('title-1')
title.innerHTML = `My name is ${name} `
const text = document.getElementsByClassName('title-2')
const list = document.getElementById('list')
const input = document.getElementById('input')
const button = document.getElementById('button')

input.setAttribute('type','number')
const onClick =  () => {

    list.innerHTML += `<li>${input.value}</li>`
    input.value = ''
}
button.addEventListener("click", onClick)

const colorInput = document.getElementById('color-input')
const colorBtn = document.getElementById('color-btn')
const body = document.body
colorBtn.addEventListener('click', () => {
    body.style.backgroundColor = colorInput.value
})

const fruits = ['Apple', "banana", "Mango",'Apple', "banana", "Mango"]
const fruitList = document.getElementById('fruit-list')
fruits.forEach(fruit => {
    fruitList.innerHTML += `<li>${fruit}</li>`
})

fruitList.setAttribute('type','A')



