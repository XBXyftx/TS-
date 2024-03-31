export interface p1 {//创建接口p1
    name:string
    age:number
    city:()=>void
} 

let p2:p1= {//p1接口的实现
    name: '周杰伦',
    age: 18,
    city:function (){
        console.log('北京')
    }
}