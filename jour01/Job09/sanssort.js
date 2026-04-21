function tri(numbers, order) {

    let arr = [...numbers]; // copie du tableau

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1; j++) {

            if (
                (order === "asc" && arr[j] > arr[j + 1]) ||
                (order === "desc" && arr[j] < arr[j + 1])
            ) {
                // échange
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }

    }

    return arr;
}

let numbers = [5, 2, 9, 1, 7];

console.log(tri(numbers, "asc"));
// [1, 2, 5, 7, 9]

console.log(tri(numbers, "desc"));
// [9, 7, 5, 2, 1]