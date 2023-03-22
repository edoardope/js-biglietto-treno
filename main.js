// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//    -input text: numero chilometri 
//         -const: numero km
//    -input radio check: under 18, over 65
//         -const: under 18
//         -const: over 65

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)
//    -calcolo prezzo viaggio base
//         -let: costo viaggio
//              -numero km * 0.21

// va applicato uno sconto del 20% per i minorenni
//    -controllo sconto minorenni
//         -let: under 18 cost
//              -costo viaggio * 0.2

// va applicato uno sconto del 40% per gli over 65.
//    -controllo over 65
//         -let: over 65 cost
//              -costo viaggio * 0.4               

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
//    -if under18 true
//         - display under18cost
//    -else if over65 true
//         -display over65cost



function getprice() {
    const kmnumber = document.getElementById(`kmnumber`).value;
    let under18 = document.getElementById('under18').checked;
    let over65 = document.getElementById('over65').checked;
    let basecost = (kmnumber * 0.21).toFixed(2);
    let under18cost = (basecost * 0.8).toFixed(2);
    let over65cost = (basecost * 0.6).toFixed(2);

       if (under18 == true){

        document.getElementById('result').innerHTML =` ${ under18cost }`;

        document.getElementById('yt').innerHTML =` 
        <h4 class="mb-4">Your Ticket:</h4>
        <span class="d-block mb-4">Age: <span class="text-warning">under 18</span></span>
        <span class="d-block mb-4">Distance: <span class="text-warning">Km ${ kmnumber }</span></span>
        <span class="d-block">Price: <span class="text-warning">€ ${ under18cost }</span></span>`;

       } else if (over65 == true){

        document.getElementById('result').innerHTML =` ${ over65cost }`;

        document.getElementById('yt').innerHTML =` 
        <h4 class="mb-4">Your Ticket:</h4>
        <span class="d-block mb-4">Age: <span class="text-warning">over 65</span></span>
        <span class="d-block mb-4">Distance: <span class="text-warning">Km ${ kmnumber }</span></span>
        <span class="d-block">Price: <span class="text-warning">€ ${ over65cost }</span></span>`;

       } else {

        document.getElementById('result').innerHTML =` ${ basecost }`;

        document.getElementById('yt').innerHTML =` 
        <h4 class="mb-4">Your Ticket:</h4>
        <span class="d-block mb-4">Age: <span class="text-warning">regular adult</span></span>
        <span class="d-block mb-4">Distance: <span class="text-warning">Km ${ kmnumber }</span></span>
        <span class="d-block">Price: <span class="text-warning">€ ${ basecost }</span></span>`;
       
       } 

    console.log( `numero km: ${kmnumber} costo standart: ${basecost} costo under18: ${under18cost} costo over65: ${over65cost} over65 c: ${over65} under18 c: ${under18}` );
}