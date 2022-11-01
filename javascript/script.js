/*
Creo un array vuoto.
lo riempio con i valori dati dall'utente tramite l'imput finchè non interrompo il ciclo ad una data condizione.
li stampo in pagina
*/

const myShoppingArray = [];

const shopList = document.querySelector('.shop-list');

let item = prompt('scegli 5 articoli omaggio');
while (myShoppingArray.length < 5) {

    myShoppingArray.push(item);
    shopList.innerHTML += `<li>${item}</li>`;
    item = prompt('cosa vuoi comprare?');
}