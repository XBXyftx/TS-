import {p1} from './接口'//利用export和import引入接口不需要.ts的后缀！！！
let p3:p1={
    name:'Alan',
    age:114514,
    city(){
        console.log('我在北京')
    }
}

console.log(p3.name)
console.log(p3.age)
p3.city() 
p3.name = '乐子人'

console.log(p3.name)