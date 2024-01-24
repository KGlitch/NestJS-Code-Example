import { IsEnum, MinLength } from "class-validator";

export class CreateUserDto {
    id: number;

    @MinLength(3)
    name: string;

    @IsEnum(['Beruf1', 'Beruf2'], { message: 'Nur Beruf1 oder Beruf2 möglich.'})
    occupation: 'Beruf1' | 'Beruf2';
}
