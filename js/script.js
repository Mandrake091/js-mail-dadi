//Test di benvenuto
const h1 = document.createElement('h1');
const textH1 = document.createTextNode("Benvenutæ in questa pagina!");
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
        const textH1 = document.createTextNode("Benvenutæ: " + inputValue);
        h1.appendChild(textH1);
        email.append(h1);
    }
}





let user = 1 + Math.floor(Math.random() * 6);
let cpu = 1 + Math.floor(Math.random() * 6);







for (let i = 0; i < 1; i++) {

    if (user > cpu) {
        console.log("l'utente ha vinto!")
    } else {

        console.log("la cpu ha vinto!")
    }

    console.log(user + "user")
    console.log(cpu + "cpu")
}


//Format per la visualizzazione dei punteggi

//User
const colGameUser = document.createElement('div');
const h1User = document.createElement('h1');
const userResult = document.createTextNode("User");
h1User.appendChild(userResult);
colGameUser.append(h1User);
colGameUser.setAttribute('class', 'col-6 text-center d-none');
const pUser = document.createElement('p').innerHTML=user;

colGameUser.append(pUser);

//Cpu

const colGameCpu = document.createElement('div');
const h1Cpu = document.createElement('h1');
const cpuResult = document.createTextNode("Cpu");
h1Cpu.appendChild(cpuResult);
colGameCpu.append(h1Cpu);
colGameCpu.setAttribute('class', 'col-6 text-center d-none');
const pCpu = document.createElement('p').innerHTML=cpu;

colGameCpu.append(pCpu);


row.append(colGameUser);
row.append(colGameCpu);













//Funzione per nascondere la prima col e mostrare la seconda
document.getElementById("btn").addEventListener("click", display);


function display() {
    col.classList.add("d-none");
    email.classList.remove("d-none");
    colGameCpu.classList.remove("d-none");
    colGameUser.classList.remove("d-none");
}