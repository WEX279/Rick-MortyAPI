const url = 'https://rickandmortyapi.com/api'

const input = document.getElementById("input")
const button = document.getElementById("button");
const container = document.querySelector("#container");

let nextPage = null;
let prevPage = null;

let currentPage = `${url}/character`;


async function fetchData() {
    
    try{
        const input = document.getElementById("input");
        const value = input.value.toLowerCase().trim();

        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);

    if(!res.ok){
        throw new Error("Could not fetch resource");
    }
    
    const data = await res.json();

    

    container.innerHTML = "";

    data.results.forEach((character) => {
        
        container.innerHTML +=`
        
        
    <div class="card">
            <div>
                <img class="charPic" src="${character.image}">
            </div>
            <div class="cardProfile">
                <div class="charInfo">
                    <div class="charStatus">
                        <h2 class="textStatus">${character.name}</h2>
                        <h3 class="textStatus">${character.status} - ${character.species}</h3>
                    </div>
                    <div class="charLocation">
                        <p class="textLocation">Last seen: </p>
                        <h4 class="textLocation">${character.origin.name}</h4>
                    </div>
                </div>
                <div class="charEpi">
                    <div>
                        <p class="textEpi">First seen:</p>
                        <h4 class="textEpi">  ${character.episode[0]}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})
    }catch(error) {
        console.error(error)
    }
    input.value = "";

        data.results.forEach(character => {
        console.log(character.name);
        }); 
}


let page = url;

    
button.addEventListener("click", (eventClick) => {
    fetchData()    
});

input.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
    fetchData()    
    }
});


async function getAllCharacters() {
    try {
        const url = 'https://rickandmortyapi.com/api';
        
        let allCharacter = []
        let nextPage = `${url}/character`;
        
        const res = await fetch(`${url}/character`);
        const data = await res.json();
        console.log(data.results);
        return data;

    } catch (error){
        console.error("Fallo del sistema", error);
        return null;
    }
}

async function getAllLocations() {
    try {
        const url = 'https://rickandmortyapi.com/api';
        const res = await fetch(`${url}/location`);
        const data = await res.json();
        console.log(data.results);
        return data;

    } catch (error){
        console.error("Fallo del sistema", error);
        return null;
    }
}      

async function getAllChapters() {
    try {
        const url = 'https://rickandmortyapi.com/api';
        const res = await fetch(`${url}/episode`);
        const data = await res.json();
        console.log(data.results);
        return data;

    } catch (error){
        console.error("Fallo del sistema", error);
        return null;
    }
}

async function cardChap() {
    const data = await getAllChapters();
    data.results.forEach((episode) => {

    }) 
}


async function loadPage(url) {
    
    try{
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("couldsnt fetch rsc")
        }

        const data = await res.json()

        nextPage = data.info.next;
        prevPage = data.info.prev;
        currentPage = url;

        container.innerHTML = "";
    // const char = await getAllCharacters();
    // char.results.forEach((character) => {
    // const container = document.querySelector("#container");
    data.results.forEach((character) => {

    container.innerHTML += `
    <div class="card">
            <div>
                <img class="charPic" src=${character.image}>
            </div>
            <div class="cardProfile">
                <div class="charInfo">
                    <div class="charStatus">
                        <h2 class="textStatus">${character.name}</h2>
                        <h3 class="textStatus">${character.status} - ${character.species}</h3>
                    </div>
                    <div class="charLocation">
                        <p class="textLocation">Last seen: </p>
                        <h4 class="textLocation"></h4>
                    </div>
                </div>
                <div class="charEpi">
                    <div>
                        <p class="textEpi">First seen:</p>
                        <h4 class="textEpi">  ${character}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
            `;
    })
    }  catch(error) {
        console.error(error);
    
    }
};

    loadPage(url)


async function charIcons(charList){
    try{
    const url ='https://rickandmortyapi.com/api';
    const res = await fetch(`${url}/character`);
    const data = await res.json();
    const charIMG = await data.results.map((character) => character.image);
    console.log(charIMG);
    } catch(error){
        console.error("Fallo del sistema", error);
        return null;
    }
};

charIcons()

function charStatus(charList){
    return charList.map((character) => character.status);
    console.log(charStatus);
};

document.getElementById("next").addEventListener("click", () =>{
    if(nextPage){
        loadPage(nextPage);
    }
})

document.getElementById("prev").addEventListener("click", () =>{
    if(prevPage){
        loadPage(prevPage);
    }
})

loadPage(currentPage);

// function getAliveCharacters(charList){
//     const getAliveCharacters = charList.filter((character) => character.status === "Alive")
// console.log(getAliveCharacters)
// } 

// getAliveCharacters()

