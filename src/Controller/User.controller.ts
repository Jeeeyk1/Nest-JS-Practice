import { Controller, Get } from "@nestjs/common";
import { UsersDTO } from "src/DTO/User.Dto";
import { UserService } from "src/Service/User.service";



@Controller("/api")
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getUsers(): UsersDTO[] {
        return this.userService.getUsers();
    }
}