//Método 1
const table = document.querySelector('#table > tbody');

//fazer carregar a api assim que o dom carregar, ou seja quando abrir a pagina
document.addEventListener("DOMContentLoaded", load_data());

function load_data() {
    const request = new XMLHttpRequest();

    request.open('get', 'https://jsonplaceholder.typicode.com/posts', true);
    request.onload = () => {
        //se tiver tido resultado 200 vamos parsear o json; 
        try {

            const data = JSON.parse(request.responseText);
            if (request.readyState == 4) {
                populate_table(data);
            }

        } catch (e) {

            console.warn("Up's something get wrong with api!! :(");


        }
    };

    request.send();
};

function populate_table(data) {
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


