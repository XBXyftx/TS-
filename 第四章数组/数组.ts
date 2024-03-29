let names: string[] = []//创建方法一
let names2: string[] = ['a', 'b', 'c', 'd', 'e', ]
console.log(names2, names)
let names3: string[] =new Array()//创建方法二和创建方法一完全一致所以不推荐
let names4: string[] =new Array("a", "b", "c", "d", "e")
console.log(names4, names3)
console.log(names2.length)
console.log(names3[2])
console.log(names4[2])
names2[1]='3'
console.log(names2[1])
let names5: string[] =['az','bz','cb']
names5.push('az')

console.log(names5)