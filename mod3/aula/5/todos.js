var listElement = document.querySelector("#app ul");

var inputElement = document.querySelector("#app input");

var inputButton = document.querySelector("#app button");

var itensTODO = [
    `Fazer cafe`,
    `Estudar pro ENEM`,
    `entrar na comunidade`
];

function renderizarTODOS() {
    listElement.innerHTML = "";

    for (todo of itensTODO) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = itensTODO.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')')

        linkElement.setAttribute('href', '#')

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);

        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    };
};

renderizarTODOS();

function AdicionarTodo() {
    var todoText = inputElement.value

    itensTODO.push(todoText);
    inputElement.value = "";
    renderizarTODOS();
}

inputButton.onclick = AdicionarTodo;

function deleteTodo(pos){

    itensTODO.splice(0, 1);
    renderizarTODOS();
}