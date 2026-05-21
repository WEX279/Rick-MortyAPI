const url = 'https://rickandmortyapi.com/api'

const input = document.getElementById("input")
const button = document.getElementById("button");


button.addEventListener("click", (eventClick) => {
    console.log(input.value);
    input.value = "";
})


async function getAllCharacters() {
    try {
        const url = 'https://rickandmortyapi.com/api';
        const res = await fetch(`${url}/character`);
        const data = await res.json();
        renderCharacters(data.results)
        console.log(data);
        return data;

    } catch (error){
        console.error("Fallo del sistema", error);
        return null;
    }
}
      
function charIcons(charList){
    const getIcons = charList.filter((image) => image.map = "image")
    console.log(getIcons)
}

function renderCharacters(charList){
    const getAliveCharacters = charList.filter((character) => character.status === "Alive")
console.log(getAliveCharacters)

} 

getAllCharacters()


function card(){

    const container = document.querySelector("#container")
    container.innerHTML = `
    <div class="card">
            <div>
                <img class="charPic" src=${image}>
            </div>
            <div>
                <div>
                    <div>
                    
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div>
                    <div>
                        <p>ejemplo</p>
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div>
                    <div>
                    
                    </div>
                    <div>
                    
                    </div>
                </div>
            </div>
        </div>
    `
}

card()