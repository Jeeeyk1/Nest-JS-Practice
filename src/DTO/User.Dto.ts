export class UsersDTO {
    name: String
    age: number
    birthDate: String
    gender: String
    id:string

    constructor(name: String,
        age: number,
        birthDate: String,
        gender: String) {
        this.name = name
        this.age = age
        this.birthDate = birthDate
        this.gender = gender
    }
}