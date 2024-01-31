const pokemonDetailslist = document.getElementById('pokemonsDetailslist');
const loadDetails = document.getElementById('loadMoreDetails');

const maxRecords = 151;
const limit = 10;
let offset = 0;


function loadPokemonDetails(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = [])=>{
        pokemonDetailslist.innerHTML+=pokemons.map((pokemon)=>
        `
        <div class="pokemonDetails ${pokemon.type}">
        <li class="pokemonListDetails">
            <span class="number">#${pokemon.number}</span><br>
            <span class="nomePokemon">${pokemon.name}</span>
            
            <div class="typesaAndImg">
                <ol class="types">
                    ${pokemon.types.map((type)=> `<li class="typePokemon ${type}"">${type}</li>`).join('')}    
                 
                </ol>
                
               
            </div>
        </li>

        <img src="${pokemon.photo}" alt="${pokemon.name}" class="img">
            <div class="characteristicsPokemon">
        
                <div class="description">
                    <ul class="descriptionList">
                    
                        <li>Ability:  </li>
                        <li>Experience:  </li>
                        <li>Height:  </li>
                        <li>Weight:  </li>
                    
                    </ul>
                </div>
                <div class="description">
                    <ul class="descriptionList">
                    
                        <li>${pokemon.ability}</li>
                        <li>${pokemon.height}</li>
                        <li>${pokemon.weight}</li>
                        <li>${pokemon.experience}</li>
            
                    </ul>
                </div>
            </div>
    </div>
        `).join('')

    })
}

loadPokemonDetails(offset,limit)

loadDetails.addEventListener('click',() => {

    offset += limit;
    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage>=maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonDetail(offset,newLimit)
        buttonLoadMore.parentElement.removeChild(loadDetails)

    } else{
        loadPokemonDetails(offset,limit)
    }
    
})