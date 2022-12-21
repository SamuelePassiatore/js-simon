console.log('JS OK');

/* In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  
Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre! */


// ! OPERAZIONI PRELIMINARI
// Prendo gli elementi dal DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const panelElement = document.querySelector('.panel');

// Metto il giorno di natale in una variabile 
const christmasDate = new Date('December 25 2022');
////console.log(christmasDate);

// Trasformo la variabile del giorno di natale in millisecondi 
const christmasDateInMs = christmasDate.getTime();

// ! UNITA' DI MISURA
// Trasformo tutte le variabili del tempo in millisecondi
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;

// ! FUNZIONI
// Funzione countdown
 const countdown = () => {
    // Creo la variabile del giorno attuale in millisecondi
    const currentDayInMs = new Date().getTime();

    // Differenza tra giorno di natale e giorno attuale
    const differenceMs = christmasDateInMs - currentDayInMs;

    if( differenceMs > 0 ) {
        // Calcoli con l'arrotondamento
        const missingDays = Math.floor( differenceMs / daysInMs);
        const missingHours = Math.floor((differenceMs % daysInMs) / hoursInMs);
        const missingMinutes = Math.floor((differenceMs % hoursInMs) / minutesInMs);
        const missingSeconds = Math.floor((differenceMs % minutesInMs) / secondsInMs);
    
        // Stampo in pagina tutti i dati ottenuti
        daysElement.innerText = missingDays;
        hoursElement.innerText = missingHours;
        minutesElement.innerText = missingMinutes;
        secondsElement.innerText = missingSeconds;   
    } else {
        clearInterval(countdown);
        panelElement.innerHTML = "<h1>Buon Natale!🎅🏻</h1>";
    }
}

// Variabile con il conteggio automatico
countdown();
setInterval(countdown, secondsInMs);

