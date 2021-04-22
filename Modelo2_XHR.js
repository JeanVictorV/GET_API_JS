const table = document.querySelector('#table > tbody');

//fazer o load rodar ao iniciar a pagina
document.addEventListener('DOMContentLoaded', load_data());

//connect to api
function load_data() {
    const request = new XMLHttpRequest();

    request.open('get', 'https://jsonplaceholder.typicode.com/posts', true);

    request.onreadystatechange = function () {
        if (request.readyState == 4) { // done, ou seja, carregada por completo
            if (request.status == 200) { // conexão bem sucedida
                const data = JSON.parse(request.responseText);
                populate_table1(data);
            };

            //tratar erro na conexão
            if (request.status == 404) {
                console.warn("Conexão não estabelecida! :_(")
            }

        };
    };

    request.send();
};

function populate_table1(data) {
    //limpar dados da tabela existente
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    };

    //popular tabela
    data.forEach(row => {
        const tr = document.createElement('tr');
        for (cell in row) {
            const td = document.createElement('td');
            td.textContent = (row[cell]);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    });

};