import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    // GET /users --> []
    @Get()
    getUsers(@Query('type') type: string) {
        return[{ type }];
    }
    // GET /users/:id --> { ... }
    @Get(':id')
    getOneUser(@Param('id') id: string) {
        return {
            id,
        };
    }
    // POST /users
    @Post()
    createUser(@Body() createNinjaDto: CreateUserDto) {
        return{
            name: createNinjaDto.name,
        };
    }
    // PUT /users/:id --> { ... }
    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return{
            id,
            name: updateUserDto
        };
    }
    // DELETE / users/:id
    @Delete(':id')
    removeUser() {
        return{};
    }
}
