/*

Lanzamiento de monedas
Digamos que tenemos una función que simula lanzar una moneda ...

function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

Y queremos usarlo en una función que vea cuánto tiempo tomará que una moneda caiga en "caras" cinco veces seguidas.

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log( fiveHeadsSync() );
console.log( "This is run after the fiveHeadsSync function completes" );

Esto tomará una cantidad de tiempo indeterminada. Si ejecutamos la función síncrona anterior, evitará que se ejecute cualquier código que viene después mientras se lleva a cabo.

Su misión es tomar el código de ejemplo anterior y convertirlo en una Promesa. 

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
    });
}
fiveHeads()
    .then( res => console.log('res--->',res) )
    .catch( err => console.log('error--->',err) );
console.log( "Cuándo se ejecuta esto ahora" );

*/


function tossCoin() {
    return Math.random() > 0.5 ? "Cara" : "Cruz";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {  
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
 
            if(result === "Cara") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount == 5){
                resolve(`¡Hurra! Tenemos 5 recuentos. La moneda ha sido lanzada ${attempts} veces!`)
            }
            if (attempts > 100) {
                reject("La moneda se ha lanzado 100 veces y todavía no tenemos 5 recuentos.")
            }
        }

});
}
 

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
