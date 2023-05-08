let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', 'n', null,];
let Even = 0;
let Odd = 0;
let Other = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        Other++;
    } else {
        if (arr[i] % 2 === 0) {
            Even++;
        } else {
            Odd++;
        }
    }
}

console.log("Even " + Even);
console.log("Odd " + Odd);
console.log("Other " + Other);