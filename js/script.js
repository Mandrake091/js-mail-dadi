const app = document.getElementById('app');

const container = document.createElement('div');
container.setAttribute('class', 'container');

const row = document.createElement('div');
row.setAttribute('class', 'row');

const col = document.createElement('div');
col.setAttribute('class', 'col-12 text-center');

const h1 = document.createElement('h1');
const textH1 = document.createTextNode("Benvenuto in questa pagina!");

const button = document.createElement('button');
button.setAttribute('class', 'btn btn-success');
button.setAttribute('id', 'btn');

h1.appendChild(textH1);


col.append(h1);
col.append(button)


row.append(col)

container.append(row);

app.append(container);



document.getElementById("btn").addEventListener("click", displayDate);


function displayDate() {
    col.classList.add("d-none");
    
  }

const textButton = document.createTextNode("Cominciamo!");
button.appendChild(textButton);



