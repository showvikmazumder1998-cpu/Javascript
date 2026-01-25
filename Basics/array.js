const ar = [ 1, 2, 3, 4, 5, "Nilima"];
console.log(ar)
//console.log(ar[2])

let ar1 = new Array(1, 2, 3, 4)
console.log(ar1)

ar1.push(99);
console.log(ar1)
ar1.pop()
console.log(ar1)

let mc = ['Iron Man', 'Thor', 'Loki'];
let dc = ['BatMan', 'SuperMan', 'Flash']

let mdc = [...mc, ...dc]
console.log(mdc)