import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

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
    createUser() {
        return{};
    }
    // PUT /users/:id --> { ... }
    @Put()
    updateUser() {
        return{};
    }
    // DELETE / users/:id
    @Delete(':id')
    removeUser() {
        return{};
    }
}
