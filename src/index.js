import x from './x.js'
import jpg from './assets/1.jpg'
console.log('hi')
console.log(x)
const div = document.querySelector('#app')

div.innerHTML = `<img src = "${jpg}">`

const button = document.createElement('button')
button.innerText = '懒加载'
button, onclick = () => {
    const lazy = import('./lazy')
    lazy.then((module) => {
        module.default()
    }, () => {})
}
document.body.appendChild(button)