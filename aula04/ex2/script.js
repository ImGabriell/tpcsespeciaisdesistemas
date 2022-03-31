function mostrarate10() 
{
    let a = document.createElement('p');
    a.textContent = "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.";
    document.body.appendChild(a);
}
    const button = document.querySelectorAll('#botao');
    for(var y= 0; y < button.length ; y++) 
{
    button[y].addEventListener('click', create);
}    
   



