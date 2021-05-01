const data = [["t", "s", "q", "p", "r"], ["w", "u", "v"]];
const datalain = [
  ["m", "l", "o", "n"],
  ["t", "s", "q", "p", "r"],
  ["w", "u", "v"]
];

function sortArray (arr) {
    let sortHuruf = [];
    for (let i = 0; i < arr.length; i++) {
        sortHuruf.push(arr[i].sort());
    }

    let result = sortHuruf.sort((a, b) => {
        return a.length - b.length;
    });

    console.log(result)
}

sortArray(data);
sortArray(datalain);