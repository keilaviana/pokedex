// Função que irá buscar os pokemons

const fetchPokemon = () => {
    //função para pegar id dinamico do pokemon
    const getPokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}
    `

    const pokemonPromises = []
    // a cada execução desse loop a promises na qual a expressão está resultando seja adicionada a um array de promess
    for (let i = 1; i <= 150; i++){
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(response => response.json())) 
    }

    //garante que todos os promises sejam feitos em paralelo
    Promise.all(pokemonPromises)
        .then(pokemons => {
            console.log(pokemons)
        })
    // // função que faz requisições AJAX no browser
    // fetch(url)
    // // função que vai retornar a resposta da promisse convertida em json, para obtermos o body
    //     .then(response => response.json())
    //     // visualizar a informação recebida por parâmetro
    //     .then(pokemon => {
    //         console.log(pokemon)
    //     })
}

fetchPokemon()