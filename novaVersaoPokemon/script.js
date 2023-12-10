function createElements(poke, pagina) {
    const section = document.getElementById('principal');

    const divflipCard = document.createElement('div');
    divflipCard.classList = 'flip-card';
    divflipCard.id = `pokemon-${poke.id}`;

    const divflipFront = document.createElement('div');
    divflipFront.classList = 'flip-card-front';

    const divflipBack = document.createElement('div');
    divflipBack.classList = 'flip-card-back';
    divflipBack.style.backgroundColor = corPorTipo(poke).corBackground;
    divflipBack.style.color = corPorTipo(poke).corTexto

    const divflipinner = document.createElement('div');
    divflipinner.classList = 'flip-card-inner';
    divflipinner.id = `divInnerFlip-${poke.id}`;

    const divimagem = document.createElement('div');
    divimagem.classList = 'imagem-tipos';

    divimagem.innerHTML += `<img src='${poke.imgFrente}'></img>`;

    const divFilhaContent_content_tipos = document.createElement('div');
    divFilhaContent_content_tipos.classList = 'content-tipos';

    const ul = document.createElement('ul');

    const tipos = Array.isArray(poke.tipo) ? poke.tipo : [poke.tipo];

    tipos.forEach(type => {
        const li = document.createElement('li');
        li.textContent = type;
        li.classList.add(`tipo-${type}`);
        ul.appendChild(li);
    });

    divFilhaContent_content_tipos.appendChild(ul);

    divflipFront.appendChild(divimagem);

    const divtexto = document.createElement('div');
    divtexto.classList = 'nome';

    divtexto.innerHTML = `<h1>${poke.nome}</h1>`;

    divtexto.style.backgroundColor = corPorTipo(poke).corBackground;
    divtexto.style.color = corPorTipo(poke).corTexto


    divimagem.appendChild(divFilhaContent_content_tipos);

    let divDetalhes = document.createElement('div');
    divDetalhes.id = `divDetalhes-${poke.id}`;
    divflipBack.appendChild(divDetalhes);

    divflipCard.style.borderColor = corPorTipo(poke).corBackground;
    divflipCard.style.color = corPorTipo(poke).corTexto

    section.appendChild(divflipCard);

    let divBtnFront = document.createElement('div');
    const divBtn = document.createElement('div');

    const divId = document.createElement('div');
    divId.classList = 'imagem-tipos-id';
    divId.id = 'imagem-tipos-id'
    divId.innerHTML = `#${poke.id}`;

    if (pagina.includes('index')) {
        divBtn.innerHTML += `<button id='btnadd' onclick='addPokedex(${poke.id},"${poke.nome}","${poke.imgFrente}","${poke.imgCostas}",${JSON.stringify(poke.tipo)},${JSON.stringify(poke.stats)},${JSON.stringify(poke.moves)})'>Adicionar</button> <button id='btnadd' onclick="viraCard(${poke.id})">Detalhe</button>`;

    } else if (pagina.includes('pokedex')) {
        divBtn.innerHTML += `<button id='btnadd' onclick='removerPokedexArray(${poke.id})'>Remover</button>`
    }

    
    divimagem.appendChild(divId);
    divtexto.appendChild(divBtn);
    divflipFront.appendChild(divBtnFront);
    divflipFront.appendChild(divtexto);
    divflipinner.appendChild(divflipFront);
    divflipinner.appendChild(divflipBack);
    divflipCard.appendChild(divflipinner);


}

//tive que mudar a criardetalhes 

function viraCard(id) {
    document.getElementById(`divInnerFlip-${id}`).style.transform = 'rotateY(180deg)'
    criaDetalhes(id)
}

function voltaCard(id) {
    document.getElementById(`divInnerFlip-${id}`).style.transform = 'rotateY(0deg)'
}

function criaDetalhes(pokemonId) {
    const divDetalhesPokemon = document.getElementById(`divDetalhes-${pokemonId}`);
    const arrayPokemonsArmazenado = sessionStorage.getItem('arrayPokemons');
    const arrayPokemons = arrayPokemonsArmazenado ? JSON.parse(arrayPokemonsArmazenado) : [];
    const pokemon = arrayPokemons.find(p => p.id === parseInt(pokemonId));
    divDetalhesPokemon.innerHTML = `
        <h2>${pokemon.nome}</h2>
        <div class="container-detalhes">
            <div class="tipo-e-ataque">
                <h3>Tipo(s):</h3>
                <ul>
                    ${pokemon.tipo.map(tipo => `<li>${tipo.toUpperCase()}</li>`).join('')}
                </ul>
                <h3>Moves:</h3>
                <ul>
                    ${pokemon.moves.map(move => `<li>${move.toUpperCase()}</li>`).join('')}
                </ul>
            </div>
            <div class="stats">
                <h3>Estatísticas:</h3>
                <ul>
                    ${pokemon.stats.map(stat => `<li>${stat.nome.toUpperCase()} - ${stat.valor}</li>`).join('')}
                </ul>
                <button id="detalhesBtn" onclick = 'verDetalhes(${pokemonId})'>
                <a href='detalhes.html?id=${pokemon.id}'>
                Ver Mais
                </a>
                </button>
                <button id="detalhesBtn" onclick="voltaCard(${pokemonId})">Voltar</button>
            </div>
        </div>
    `;
}



function corPorTipo(poke) {

    let corFundo = '#a6a877';
    let corTexto = 'black'

    if (poke.tipo.includes('fire')) {
        corTexto = 'white'
        corFundo = '#ee7f30';
    } else if (poke.tipo.includes('water')) {
        corTexto = 'white'
        corFundo = '#678fee';
    } else if (poke.tipo.includes('grass')) {
        corTexto = 'white'
        corFundo = '#76c850';
    } else if (poke.tipo.includes('poison')) {
        corTexto = 'white'
        corFundo = '#a040a0';
    } else if (poke.tipo.includes('bug')) {
        corTexto = 'white'
        corFundo = '#a8b720';
    } else if (poke.tipo.includes('normal')) {
        corTexto = 'white'
        corFundo = '#a8a878';
    } else if (poke.tipo.includes('electric')) {
        corFundo = '#f8d030';
    } else if (poke.tipo.includes('ground')) {
        corFundo = '#e0c068';
    } else if (poke.tipo.includes('fairy')) {
        corTexto = 'black'
        corFundo = '#ee99ac';
    } else if (poke.tipo.includes('fighting')) {
        corTexto = 'white'
        corFundo = '#c03028';
    } else if (poke.tipo.includes('psychic')) {
        corTexto = 'black'
        corFundo = '#f85888';
    } else if (poke.tipo.includes('rock')) {
        corFundo = '#b8a038';
    } else if (poke.tipo.includes('ghost')) {
        corTexto = 'white'
        corFundo = '#705898';
    } else if (poke.tipo.includes('ice')) {
        corFundo = '#98d8d8';
    } else if (poke.tipo.includes('dragon')) {
        corTexto = 'white'
        corFundo = '#7038f8';
    } else if (poke.tipo.includes('dark')) {
        corTexto = 'white'
        corFundo = '#705848';
    } else if (poke.tipo.includes('steel')) {
        corFundo = '#b8b8d0';
    } else if (poke.tipo.includes('flying')) {
        corTexto = 'white'
        corFundo = '#a890f0';
    } else if (poke.tipo.includes('rock')) {
        corFundo = '#b8a038';
    } else if (poke.tipo.includes('ghost')) {
        corFundo = '#705898';
    } else if (poke.tipo.includes('ice')) {
        corFundo = '#98d8d8';
    } else if (poke.tipo.includes('dragon')) {
        corTexto = 'white'
        corFundo = '#7038f8';
    } else if (poke.tipo.includes('dark')) {
        corFundo = '#705848';
    } else if (poke.tipo.includes('steel')) {
        corTexto = 'black'
        corFundo = '#b8b8d0';
    } else if (poke.tipo.includes('flying')) {
        corFundo = '#a890f0';
    }

    return {
        corBackground: corFundo,
        corTexto: corTexto,
    }



}



