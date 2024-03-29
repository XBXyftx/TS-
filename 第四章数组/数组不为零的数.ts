let shuzu:number[] = [1,0,0,5,0,0]
let newarray:number[] = []
for (let i = 0; i < shuzu.length; i++){
    if(shuzu[i]!==0){
        newarray.push(shuzu[i])
    }
}
console.log(newarray)