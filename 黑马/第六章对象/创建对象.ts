let person1 = {//对象：键值对的集合
    name: "小明" ,//键：值；；称为键值对
    age: 20
}

let person = {
    sayhi:function(){
        console.log("hi")
        console.log(person1.name)
    }
}
console.log()
person.sayhi()
let person2 : {//对象类型注解
    name: String//要用：来注解！
    age:number
}

person2 = {
    name: "小明",
    age: 20
}

console.log("----------------------------------------------------")

let boy:{
    name:string,
    age:number
    met:(girlfriend:string)=>String
}//对象方法的注释

boy = {
    name: "一方通行",
    age: 20,//键值对
    met: function(girlfriend:string){//对象里叫方法外面叫函数
        return this.name+"和" + girlfriend + "一起吃饭"
    }
}

console.log(boy.met("御坂美琴"))