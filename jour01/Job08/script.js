function sommeNombresPremiers(a, b) {

    // vérifier si a est premier
    if (a < 2) return false;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return false;
        }
    }

    // vérifier si b est premier
    if (b < 2) return false;
    for (let i = 2; i < b; i++) {
        if (b % i === 0) {
            return false;
        }
    }

    // si les deux sont premiers
    return a + b;
}

console.log(sommeNombresPremiers(3, 5));  // attendu : 8
console.log(sommeNombresPremiers(4, 5));  // attendu : false
console.log(sommeNombresPremiers(2, 7));  // attendu : 9
console.log(sommeNombresPremiers(10, 11)); // attendu : false