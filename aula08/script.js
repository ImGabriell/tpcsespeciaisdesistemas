const objs = 

    [
        {
            "nome"  : "ImGbriell",
            "idade" : "19",
            "email" : "imgabriell@gmail.com",
            "statusativextra" : true,
            "ativextra" : ["Natação","Judo"]
        },

        {
            "nome"  : "Babdln",
            "idade" : "19",
            "email" : "babdln@gmail.com",
            "statusativextra" : false,
            "ativextra" : [null]
        },

        {
            "nome"  : "Antônio",
            "idade" : "20",
            "email" : "antonio@gmail.com",
            "statusativextra" : true,
            "ativextra" : ["cheiração","rolê"]
        }
    ]

console.log (objs);
console.log (typeof objs);

const jsonData = JSON.stringify(objs);

console.log (jsonData);
console.log (typeof jsonData);

const objjson = JSON.parse(jsonData);

console.log(objjson);
console.log (typeof objjson);

objjson.map((aluno) =>
{
    console.log (aluno.nome)
    
    console.log (aluno.email)

    console.log (aluno.idade)
})