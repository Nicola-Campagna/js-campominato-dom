// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// CONSEGNA 2:
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//  Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti ;dela cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).






/****************************************
 *                                      *
 *             ON LOAD                  *
 *                                      *
****************************************/

// bottone che permetterà di iniziare il gioco 
const startGame = document.getElementById("button");
// console.log(startGame);

// numero tabelle presente nella griglia
const numberTabs = 100;
// numero minimo
const minNumber = 1;
// numero massimo
const maxNumber = 100;
// numero bombe
let bombe;

// richimao della funzione per generare 16 numeri random:bombe 
// console.log((randomUniqueNumber(minNumber, maxNumber)));

/****************************************
 *                                      *
 *          ADDEVENTLISTENER            *
 *                                      *
****************************************/

// al click il bottone farà crea la griglia di gioco con le caselle
startGame.addEventListener(
    "click",
    function () {
        const gridEl = document.getElementById("grid");
        gridEl.classList.add("grid");
        generateGridGame(gridEl);
    }
)

/****************************************
 *                                      *
 *             FUNCTIONS                *
 *                                      *
****************************************/

/**
 * @param {HTMLElement} grid 
*/

// funzione che genera la griglia di gioco
function generateGridGame(grid) {
    // const gridEl = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i = 0; i < 100; i++) {
        const testoCella = i + 1;
        const cella = generaCasella(testoCella);
        grid.append(cella);
        // console.log(gridEl);
    }
    bombe = generaBomba(1);
    console.log(bombe);
}

/**
 * @param { string } testo
//  
 */

// funzione che genera le caselle di gioco all'interno della griglia
function generaCasella(testo) {
    const cellaEl = document.createElement("div");
    cellaEl.classList.add("square");
    cellaEl.innerHTML = testo;
    cellaEl.addEventListener(
        "click",
        function () {
            this.classList.toggle("active");
            if (bombe.includes(parseInt(this.innerHTML))) {
                this.classList.add("red");
                console.log("hai cliccato una bomba:casella nunero: " + this.innerHTML);
            }
            else {
                console.log("barvo");
            }
            // console.log(this.innerHTML);

            // se l'tente clicca la cella con la corrispondiva bomba la cella diventa rosaa ed ha perso:
            // verificare se la cella ha in corrispondiva una bomba 


        }
    )
    return cellaEl;
}

// funzione per generare 16 numeri randomi che non si ripetono
function generaBomba(min) {
    // array che conterrà i 16 numeri generati
    const randomNumberBombs = [];
    // ciclo per generare max 16 numeri random
    while (randomNumberBombs.length < 16) {
        const generateRandomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
        // const bombEl = i + 1;
        // randomNumberBombs.push(generateRandomNumber);
        if (!randomNumberBombs.includes(generateRandomNumber)) {
            randomNumberBombs.push(generateRandomNumber);
        }
    }
    return randomNumberBombs;

}


