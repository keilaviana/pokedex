//função para pegar id dinamico do pokemon
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}
`
const generatePokemonPromises = () => Array(150).fill().map((_, index) => fetch(getPokemonUrl(index + 1)).then(response => response.json()))


const generateHTML = pokemons => {


    // reduzir o array em uma string (template html)
    return pokemons.reduce((accumulator, pokemon) => {
        const types = pokemon.types.map(typeInfo => typeInfo.type.name)

        accumulator += `
            <li class="card ${types[0]}">
                <img class="card-image" alt="${pokemon.name}" src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
                <h2 class = "card-title"> ${pokemon.id}. ${pokemon.name}</h2>
                <p class="card-subtitle">${types.join(' | ')}</p>
            <li>
            `
        return accumulator
    }, '')
}

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('.pokedex')

    ul.innerHTML = pokemons
}
// Função que irá buscar os pokemons



const pokemonPromises = generatePokemonPromises()
// // a cada execução desse loop a promises na qual a expressão está resultando seja adicionada a um array de promess
// for (let i = 1; i <= 150; i++){
//     pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json())) 
// }

//garante que todos os promises sejam feitos em paralelo
Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insertPokemonsIntoPage)
    // // função que faz requisições AJAX no browser
    // fetch(url)
    // // função que vai retornar a resposta da promisse convertida em json, para obtermos o body
    //     .then(response => response.json())
    //     // visualizar a informação recebida por parâmetro
    //     .then(pokemon => {
    //         console.log(pokemon)
    //     })

