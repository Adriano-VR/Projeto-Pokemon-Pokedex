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
  

    const cores = corPorTipo(poke);

    divBackground.style.backgroundColor = corPorTipo(poke).corBackground;
    divBackground.style.color = corPorTipo(poke).corTexto
    divContainer.style.borderColor = corPorTipo(poke).corBackground;


    divContent.appendChild(divFilhaContent_content_tipos);
    divContainer.appendChild(divContent);
    divContainer.appendChild(divBackground);
    section.appendChild(divContainer);
}


function teste(poke,pagina){
    const section = document.getElementById('principal')

    const divflipCard = document.createElement('div')
    divflipCard.classList = 'flip-card'

    divflipCard.id = `pokemon-${poke.id}`;
    
    const divflipFront = document.createElement('div')
    divflipFront.classList = 'flip-card-front'

    const divflipBack = document.createElement('div')
    divflipBack.classList = 'flip-card-back'

    const divflipinner = document.createElement('div')
    divflipinner.classList = 'flip-card-inner'


  

    const divimagem = document.createElement('div')
    divimagem.classList = 'imagem-tipos'

    divimagem.innerHTML += `<img src='${poke.imgFrente}'></img>`;


  

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

    divflipFront.appendChild(divimagem)

    divimagem.appendChild(divFilhaContent_content_tipos)

    const divtexto = document.createElement('div')
    divtexto.classList = 'nome'

    divtexto.innerHTML = `<h1>${poke.nome}</h1>`
    divflipFront.appendChild(divtexto)

    divtexto.style.backgroundColor = corPorTipo(poke).corBackground
   
   
    divflipinner.appendChild(divflipFront)
    divflipinner.appendChild(divflipBack)
    divflipCard.appendChild(divflipinner)
 
    section.appendChild(divflipCard)
}
//Funcao separada para escolher a cor do fundo baseada no tipo do pokemon

function corPorTipo(poke){
    
    let corFundo = '#a6a877';
    let corTexto = 'black'
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

    return {
        corBackground:corFundo,
        corTexto:corTexto,
    }

  
   
}