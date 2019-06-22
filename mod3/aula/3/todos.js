var listElement = document.querySelector("#app ul");

var inputElement = document.querySelector("#app input");

var inputButton = document.querySelector("#app button");

var itensTODO = [
    `*Fazer cafe`,
    `*Estudar pro ENEM`,
    `*entrar na comunidade`
];

function renderizarTODOS()
{
    for(todo of itensTODO){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
    };
};

renderizarTODOS();