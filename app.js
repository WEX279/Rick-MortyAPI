const url = 'https://rickandmortyapi.com/api'

const input = document.getElementById("input")
const button = document.getElementById("button");


button.addEventListener("click", async (eventClick) => {
    console.log(input.value);
    input.value = "";

    await getData()
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
      
async function getData() {
    try{
        const data = await getAllCharacters();
        console.log(data); //  funciona
        charIcons(data.results);
        const getIcons = charIcons(data.results);
        console.log(getIcons);
    } catch (error){
        console.error("Fallo del sistema", error);
        return null;
    };

};
getData();

 function charIcons(charList){
    return charList.map((character) => character.image);
    console.log(charIcons);
};


// charIcons()

function renderCharacters(charList){
    const getAliveCharacters = charList.filter((character) => character.status === "Alive")
console.log(getAliveCharacters)

} 




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