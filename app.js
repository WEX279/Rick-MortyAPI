const url = 'https://rickandmortyapi.com/api'

const input = document.getElementById("input")
const button = document.getElementById("button");


button.addEventListener("click", async (eventClick) => {
    console.log(input.value);
    input.value = "";
})


async function getAllCharacters() {
    try {
        const url = 'https://rickandmortyapi.com/api';
        const res = await fetch(`${url}/character`);
        const data = await res.json();
        // getAliveCharacters(data.results)
        // charIcons(data.results);
        console.log(data.results);
        return data;

    } catch (error){
        console.error("Fallo del sistema", error);
        return null;
    }
}

async function card() {
    const data = await getAllCharacters();
    data.results.forEach((character) => {
    const container = document.querySelector("#container");
    container.innerHTML += `
    <div class="card">
            <div>
                <img class="charPic" src=${character.image}>
            </div>
            <div class="cardProfile">
                <div class="charInfo">
                    <div class="charStatus">
                        <h2 class="charText">${character.name}</h2>
                        <h3 class="charText">Status: ${character.status} - ${character.species}</h3>
                    </div>
                    <div>
                    
                    </div>
                </div>
                <div>
                    <div>
                        <p></p>
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
    )};

    card()

// async function getAllLocations() {
//     try {
//         const url = 'https://rickandmortyapi.com/api';
//         const res = await fetch(`${url}/location`);
//         const data = await res.json();
//         console.log(data.results);
//         return data;

//     } catch (error){
//         console.error("Fallo del sistema", error);
//         return null;
//     }
// }

// getAllLocations()
      
// async function getIcons() {
    
//         const res = await getAllCharacters();
//         const data = await charIcons(res.results);
//         console.log(data);
//     };

// getIcons();

// function charIcons(charList){
//     return charList.map((character) => character.image);
//     console.log(charIcons);
// };

// charIcons()

// function charStatus(charList){
//     return charList.map((character) => character.status);
//     console.log(charStatus);
// };

// function getAliveCharacters(charList){
//     const getAliveCharacters = charList.filter((character) => character.status === "Alive")
// console.log(getAliveCharacters)
// } 

// getAliveCharacters()


// function card(){

    

// card()