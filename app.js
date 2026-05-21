const api = fetch('https://rickandmortyapi.com/api/')

const buscador = document.getElementById(buscador);

const button = document.getElementById(button);
button.addEventListener ("click")
button.addEventListener("keyDown", (event) => {
    if (event.key === 'enter'){
        console.log("va bien")
    }
})
