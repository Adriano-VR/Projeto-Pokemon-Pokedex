  function criar(poke , pagina) {
    const section = document.getElementById('principal');
    const divContainer = document.createElement('div');
    divContainer.classList = 'container';
    divContainer.id = `pokemon-${poke.id}`;

    const divContent = document.createElement('div');
    divContent.classList = 'content';

    divContent.innerHTML = `<p>#${poke.id}</p>  <img src='${poke.imgFrente}'> `;

    const divFilhaContent_content_tipos = document.createElement('div');
    divFilhaContent_content_tipos.classList = 'content-tipos';

    const ul = document.createElement('ul');

    // verficar se e array
    const tipos = Array.isArray(poke.tipo) ? poke.tipo : [poke.tipo];

    tipos.forEach(type => {
        const li = document.createElement('li');
        li.textContent = type;
        li.classList.add(`tipo-${type}`);
        ul.appendChild(li);
    });

    divFilhaContent_content_tipos.appendChild(ul);

    const divBackground = document.createElement('div');
    divBackground.classList = 'background';
    divBackground.innerHTML = `<h1>${poke.nome}</h1>`;

    if(pagina.includes('index')){
        divBackground.innerHTML += `<button onclick='addPokedex(${poke.id},"${poke.nome}","${poke.imgFrente}","${poke.imgCostas}",${JSON.stringify(poke.tipo)},${JSON.stringify(poke.stats)},${JSON.stringify(poke.moves)})'>Adicionar</button> <button><a href='detalhes.html?id=${poke.id}'>Detalhes</a></button>`;
    }else if(pagina.includes('pokedex')){
        divBackground.innerHTML += `<button onclick='removerPokedex(${poke.id})'>Remover</button> `;
    }
  


    divBackground.style.backgroundColor = corPorTipo(poke);
    divContainer.style.borderColor = corPorTipo(poke);

    divContent.appendChild(divFilhaContent_content_tipos);
    divContainer.appendChild(divContent);
    divContainer.appendChild(divBackground);
    section.appendChild(divContainer);
}

//Funcao separada para escolher a cor do fundo baseada no tipo do pokemon

function corPorTipo(poke){
    let corFundo = '#a6a877';

    if (poke.tipo.includes('fire')) {
        corFundo = '#ee7f30';
    } else if (poke.tipo.includes('water')) {
        corFundo = '#678fee';
    } else if (poke.tipo.includes('grass')) {
        corFundo = '#76c850';
    } else if (poke.tipo.includes('poison')) {
        corFundo = '#a040a0'
    } else if (poke.tipo.includes('bug')) {
        corFundo = '#a8b720'
    }

    return corFundo;
}