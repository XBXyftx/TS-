let a:{firstName:string, lastName:string}={firstName:'博璇', lastName:'薛'}

console.log(a.firstName,a.lastName)
console.log(a)
class Person{
    firstName:string
    lastName:string
    constructor(firstName:string,lastName:string)
    {
        this.firstName=firstName
        this.lastName=lastName
    }
    // fonction(){
    //     console.log(this.firstName,this.lastName)
    // }
}
let b = new Person('一方','通行')

console.log(b)

