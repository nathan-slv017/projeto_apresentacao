const aspas = document.querySelector('.aspas');
const proficao = document.querySelector('.proficao');
const texto = document.querySelector('.texto');
const fundo = document.querySelector('section');


document.addEventListener('click', (e) =>{
    const el = e.target;
    if(el.classList.contains('btn-eng')){
        aspas.style.color = proficoes[0].aspasColor
        proficao.innerHTML = proficoes[0].nome
        texto.innerHTML = proficoes[0].descricao
        fundo.style.backgroundColor = proficoes[0].backgroundColor
        fundo.style.boxShadow = `10px 10px 5px ${proficoes[0].shadow}`
    }

    if(el.classList.contains('btn-fei')){
        aspas.style.color = proficoes[1].aspasColor
        proficao.innerHTML = proficoes[1].nome
        texto.innerHTML = proficoes[1].descricao
        fundo.style.backgroundColor = proficoes[1].backgroundColor
        fundo.style.boxShadow = `10px 10px 5px ${proficoes[1].shadow}`
    }

    if(el.classList.contains('btn-med')){
        aspas.style.color = proficoes[2].aspasColor
        proficao.innerHTML = proficoes[2].nome
        texto.innerHTML = proficoes[2].descricao
        fundo.style.backgroundColor = proficoes[2].backgroundColor
        fundo.style.boxShadow = `10px 10px 5px ${proficoes[2].shadow}`
    
    }
    if(el.classList.contains('btn-pad')){
        aspas.style.color = proficoes[3].aspasColor
        proficao.innerHTML = proficoes[3].nome
        texto.innerHTML = proficoes[3].descricao
        fundo.style.backgroundColor = proficoes[3].backgroundColor
        fundo.style.boxShadow = `10px 10px 5px ${proficoes[3].shadow}`
    }
    if(el.classList.contains('btn-sol')){
        aspas.style.color = proficoes[4].aspasColor
        proficao.innerHTML = proficoes[4].nome
        texto.innerHTML = proficoes[4].descricao
        fundo.style.backgroundColor = proficoes[4].backgroundColor
        fundo.style.boxShadow = `10px 10px 5px ${proficoes[4].shadow}`
    }
})