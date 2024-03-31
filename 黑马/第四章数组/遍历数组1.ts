let nums: number[]=[100,200,300,400]
for (let i = 0; i < nums.length; i++){
    console.log(nums[i])
}
let copy = Array.from(nums,(ca)=>{return ca*2+2})
console.log(copy)//(plus)=>{return plus+2}中的（参数）=>{方法体}
let coo=Array.of(nums)//[100,200,300,400]把这个直接放进[]里
console.log(coo)//[ [ 100, 200, 300, 400 ] ]
nums.push(1,2,2,1)//在数组末尾添加内容
console.log(nums)

let letters  = ["hello world",'hi','lll']
let string = "";
for (let letter of letters){
  string += letter;
}
console.log(string);//将数组内的内容加在一起形成一个字符串

let numbb:number[]=[1,2,3,4,5]
let nu:number=0
for(let numbbs of numbb){
    nu+=numbbs
}

console.log(nu)//对数字来说就是加和
