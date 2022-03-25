function criarParagrafo() 
{
    let para = document.createElement('p');
    para.textContent = 'Você ganhou um milhão de reais!';
    document.body.appendChild(para);
}

const botoes = document.querySelectorAll('button');

for(var i = 0; i < botoes.length; i++) 
{   
    botoes[i].addEventListener('click', criarParagrafo);
}