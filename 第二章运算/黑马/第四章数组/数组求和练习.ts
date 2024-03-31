let numbers: number[][] =[[1,2,3,4],[1,2]]
let numbeer: number=0

for(let n of numbers[0]) {
    numbeer += n
}
for(let n of numbers[1]) {
    numbeer += n
}
console.log(numbeer)

//优化版本
let numbeer2: number=0
for(let i=0; i<numbers.length; i++) {
    for(let n of numbers[i]) {
        numbeer2 += n
    }
}
console.log(numbeer2)