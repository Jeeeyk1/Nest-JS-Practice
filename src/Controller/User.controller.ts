import { Body, Controller, Get, Post, UseFilters } from "@nestjs/common";
import { UsersDTO } from "src/DTO/User.Dto";
import { UserService } from "src/Service/User.service";
import { HttpExceptionFilter } from "src/common/filter/exception.filter";



@Controller("/api")
export class UserController {
    constructor(private userService: UserService) { }

    @Get("/getUsers")
    getUsers(): UsersDTO[] {
        return this.userService.getUsers();
    }
    @Post("/addUsers")
    addUsers(@Body() usersBody: UsersDTO): UsersDTO[] {
        return this.userService.addUsers(usersBody);
    }
    @UseFilters(new HttpExceptionFilter())
    @Post("/findUserById")
    findUserById(@Body('id') id: string): UsersDTO {
        return this.userService.getUserById(id.toString())
    }
}