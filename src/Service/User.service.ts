import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersDTO } from "src/DTO/User.Dto";
import { Users } from "src/Model/User.model";

import { uuid } from 'uuidv4';

@Injectable()
export class UserService {
    private users: Users[] = [{ "id": uuid(), "name": "Jake", "age": 23, "birthDate": "2022-06-22", "gender": "male" }]

    getUsers(): UsersDTO[] {
        const listUsers: UsersDTO[] = this.users
        return listUsers
    }

    addUsers(usersBody: UsersDTO): UsersDTO[] {
        const usersAdd: Users = {
            id: uuid(),
            name: usersBody.name,
            age: usersBody.age,
            birthDate: usersBody.birthDate,
            gender: usersBody.gender
        }
        this.users.push(usersAdd)

        return this.users
    }

    getUserById(id: String): UsersDTO {
        const user = this.users.find(user => user.id === id);



        if (!user) {
            console.log(id + " id" + " usersid" + (user ? user.id : "undefined"));
            throw new NotFoundException()
        }

        return user;
    }
}