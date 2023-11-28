function criar(poke, pagina) {

    const section = document.getElementById('principal')

    const divContainer = document.createElement('div')
    divContainer.classList = 'container'
    divContainer.id = `pokemon-${poke.id}`;

    const divContent = document.createElement('div')
    divContent.classList = 'content'

    divContent.innerHTML = `<p>#${poke.id}</p>  
    
    <img src='${poke.img}'> `

    const divFilhaContent_content_tipos = document.createElement('div')
    divFilhaContent_content_tipos.classList = 'content-tipos'

    const ul = document.createElement('ul');


    
    poke.tipo.forEach((type, index) => {
        const li = document.createElement('li');
        li.textContent = type;

       
        li.classList.add(`tipo-${type}`);



        ul.appendChild(li);
    });



    divFilhaContent_content_tipos.appendChild(ul)


    const divBackground = document.createElement('div')
    divBackground.classList = 'background'
    divBackground.innerHTML = `<h1>${poke.nome}</h1>`


   divBackground.innerHTML = `<button onclick='addPokedex(${poke.id},"${poke.nome}","${poke.img}","${poke.tipo}")'>Adicionar</button> <button><a href='detalhes.html?id=${poke.id}'>Detalhes</button>`;


    let corFundo = 'gray';
    let corTexto = 'white'
    let corTipo = 'gray'
    if (poke.tipo.includes('fire')) {
        corFundo = 'orange';
        corTexto = 'white'
    } else if (poke.tipo.includes('water')) {
        corFundo = 'blue';
        corTexto = 'white'
        corTipo = 'blue'
    } else if (poke.tipo.includes('grass')) {
        corFundo = 'green';
        corTexto = 'white'
        corTipo = 'green'
    } else if (poke.tipo.includes('poison')) {
        corTipo = 'purple'
    }

    divBackground.style.backgroundColor = corFundo;
    divBackground.style.color = corTexto;


    divContainer.style.borderColor = corFundo

 

    divContent.appendChild(divFilhaContent_content_tipos)



    divContainer.appendChild(divContent)
    divContainer.appendChild(divBackground)
    section.appendChild(divContainer)




}