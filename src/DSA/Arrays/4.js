//splice method

let currency = ['usd', 'eur', 'pound', 'rupees', 'aed'];
console.log(currency);

//splice(startIndex, deleteCount, itemToAdd) - to add
currency.splice(0, 0, 'rubel');
console.log(currency);

//splice(index, deleteCount)
currency.splice(3, 1);
console.log(currency);