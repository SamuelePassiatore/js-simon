/* In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  
Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre! */

// Prendo gli elementi dal DOM
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Metto il giorno di natale in una variabile 
const christmasDate = new Date('December 25 2022');
////console.log(christmasDate);

// Trasformo la variabile del giorno di natale in millisecondi 
const christmasDateInMs = christmasDate.getTime();
////console.log(christmasDateInMs);

// Creo la variabile del giorno attuale in millisecondi
const currentDayInMs = new Date().getTime();
////console.log(currentDayInMs);

// Differenza tra giorno di natale e giorno attuale
const difference = christmasDateInMs - currentDayInMs;
console.log(difference);

// Trasformo tutte le variabili del tempo in millisecondi
const secondsInMs = 1000;
const minutesInMs = 60 * secondsInMs;
const hoursInMs = 60 * minutesInMs;
const daysInMs = 24 * hoursInMs;
////console.log(secondsInMs, minutesInMs, hoursInMs, daysInMs);

// Calcoli con l'arrotondamento
// Giorni mancanti
const missingDays = Math.floor( difference / daysInMs);
console.log(missingDays);
// Ore mancanti
const missingHours = Math.floor((difference % daysInMs) / hoursInMs);
console.log(missingHours);
// Minuti mancanti
const missingMinutes = Math.floor((difference % hoursInMs) / minutesInMs);
console.log(missingMinutes);
// Secondi mancanti
const missingSeconds = Math.floor((difference % minutesInMs) / secondsInMs);
console.log(missingSeconds);

// Stampo in pagina tutti i dati ottenuti
// Stampo in pagina i giorni
daysElement.innerText = missingDays;
// Stampo in pagina le ore
hoursElement.innerText = missingHours;
// Stampo in pagina i giorni
minutesElement.innerText = missingMinutes;
// Stampo in pagina i giorni
secondsElement.innerText = missingSeconds;
