let numero = 0

function somar() {
    numero = numero + 1
    render()
}

function subtrair() {
    numero = numero - 1
    render()
}

function render() {
    const p = document.querySelector("#contagem") 
    p.innerText = numero
}

render()