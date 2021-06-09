// Função que irá buscar os pokemons

const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/25`
    // função que faz requisições AJAX no browser
    fetch(url)
    // função que vai retornar a resposta da promisse convertida em json, para obtermos o body
        .then(response => response.json())
        // visualizar a informação recebida por parâmetro
        .then(pokemon => {
            console.log(pokemon)
        })
}

fetchPokemon()