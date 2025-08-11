/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n == 1){
        return true;
    }

    let nSet = new Set();
    while (n != 1 && !nSet.has(n)) {
        nSet.add(n);
        let summa = 0;
        n.toString().split('').forEach(a => summa += a**2);
        console.log(n, summa);
        n = summa;
    }

    return n == 1;
};