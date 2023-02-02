// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.



// CONSEGNA 2:
//  Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
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
}

/**
 * @param { string } testo
 * @return {HTMLElement}
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
            console.log(this.innerHTML);
        }
    )
    return cellaEl;
}