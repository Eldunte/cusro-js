 var listElement = document.querySelector("#app ul");

var inputElement = document.querySelector("#app input");

var inputButton = document.querySelector("#app button");

var itensTODO = JSON.parse(localStorage.getItem('list_todos')|| []);

function renderizarTODOS() {
    listElement.innerHTML = "";

    for (todo of itensTODO) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)

        var linkElement = document.createElement('a');
        var linkText = document.createTextNode('Excluir');

        var pos = itensTODO.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')')

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
    saveTodosStorage();
}

inputButton.onclick = AdicionarTodo;

function deleteTodo(pos) {

    itensTODO.splice(pos, 1);
    renderizarTODOS();
    saveTodosStorage();
}

function saveTodosStorage(){
    localStorage.setItem('list_todos', JSON.stringify(itensTODO));
};
