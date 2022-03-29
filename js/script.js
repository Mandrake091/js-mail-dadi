//Test di benvenuto
const h1 = document.createElement('h1');
const textH1 = document.createTextNode("Benvenuto in questa pagina!");
h1.appendChild(textH1);

//Bottone benvenuto
const button = document.createElement('button');
button.setAttribute('class', 'btn btn-success');
button.setAttribute('id', 'btn');

const textButton = document.createTextNode("Cominciamo!");
button.appendChild(textButton);



//Colonna di benvenuto
const col = document.createElement('div');
col.setAttribute('class', 'col-12 text-center');
col.append(h1);
col.append(button);

//Riga 
const row = document.createElement('div');
row.setAttribute('class', 'row');
row.append(col);


//Container
const container = document.createElement('div');
container.setAttribute('class', 'container');
container.append(row);

//Div principale
const app = document.getElementById('app');
app.append(container);

//Lista di persone che possono accedere

let accessDenied = false;

const emailList = ["boolean@careers.it", "paolo.cannistraro@live.it", "pincopallo@gmail.com", "classe59@gmail.com", "javascript@js.com"];



console.log(emailList)


//Div con il form e-mail
const email = document.getElementById('emailForm');


//Funzione per prendere i valori e-mail al click
document.getElementById("takeValue").addEventListener("click", getInputValue);
let shake = document.getElementById('input');

function getInputValue() {

    const inputValue = document.getElementById("input").value;



    if (!emailList.includes(inputValue)) {
        
        shake.classList.add('error');

    } else {
        shake.classList.remove('error');
        const h1 = document.createElement('h1');
        const textH1 = document.createTextNode("Benvenuto " + inputValue);
        h1.appendChild(textH1);
        email.append(h1);
    }
}







//Funzione per nascondere la prima col e mostrare la seconda
document.getElementById("btn").addEventListener("click", display);


function display() {
    col.classList.add("d-none");
    email.classList.remove("d-none")
}