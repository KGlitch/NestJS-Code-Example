import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    // Dependency Injection
    constructor( private readonly usersService: UsersService) {}

    // GET /users?occpuation= --> []
    @Get()
    getUsers(@Query('occupation') occupation: 'Beruf1' | 'Beruf2') {
        return this.usersService.getUsers(occupation);
    }

    // GET /users/:id --> { ... }
    @Get(':id')
    getOneUser(@Param('id') id: string) {
        try {
            return this.usersService.getOneUser(+id);
        } catch (error) {
            throw new NotFoundException();
        }    
    }

    // POST /users
    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    // PUT /users/:id --> { ... }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(+id, updateUserDto);
    }
    
    // DELETE / users/:id
    @Delete(':id')
    removeUser(@Param('id') id: string) {
        return this.usersService.removeUser(+id);
    }
}
