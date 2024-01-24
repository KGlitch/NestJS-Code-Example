import { Controller } from '@nestjs/common';

@Controller('example')
export class ExampleController {

    // GET /users --> []

    // GET /users/:id --> { ... }
    // POST /users
    // PUT /users/:id --> { ... }
    // DELETE / users/:id
}