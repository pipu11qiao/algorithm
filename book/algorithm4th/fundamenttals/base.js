// function gcd(p, q) {
// if (q === 0) {
// return p;
// }
// const r = p % q;
// return gcd(q, r);
// }

// not recursion
function gcd(p, q) {
    let r;
    while (q !== 0) {
        q = [p % (p = q)][0]
    }
    return p
}

console.log(gcd(8, 6));
