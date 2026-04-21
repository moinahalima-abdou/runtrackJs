function tri(numbers, order) {

    let copy = [...numbers];

    if (order === "asc") {
        return copy.sort((a, b) => a - b);
    } else {
        return copy.sort((a, b) => b - a);
    }
}


// essai
let numbers = [5, 2, 9, 1, 7];

console.log(tri(numbers, "asc")); 

console.log(tri(numbers, "desc")); 
