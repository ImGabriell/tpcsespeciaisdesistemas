function calcular() 
{
    var nome = document.getElementById("nome").value;
    var nota1 = document.getElementById("nota1").value;
    var nota2 = document.getElementById("nota2").value;

    alert('O nome do aluno é ' + nome);
    alert('Nota 1 é ' + nota1);
    alert('Nota 2 é ' + nota2);

    var soma = parseInt(nota1) + parseInt(nota2);

    var media = soma / 2;

    window.alert('A média é: ' + media);
    
    if (media > 6) 
    {
        window.alert('Parabéns, você passou seu safado!');
    }

    else 
    {
        window.alert('Que pena, você reprovou... Burro :/');
    }
}