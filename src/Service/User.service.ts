import { Injectable } from "@nestjs/common";
import { UsersDTO } from "src/DTO/User.Dto";
import { Users } from "src/Model/User.model";


@Injectable()
export class UserService {
    private users: Users[] = [{ "name": "Jake", "age": 23, "birthDate": "2022-06-22", "gender": "male" }]

    getUsers(): UsersDTO[] {
        const listUsers: UsersDTO[] = this.users
        return listUsers
    }
}