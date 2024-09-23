import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class XmlToEntyRepoDto {

    @ApiProperty({ type: 'string'})
    @IsString()
    prompt: string;

    @ApiProperty({ type: 'string', format: 'binary' })
    @IsNotEmpty()
    file: any;  // Definimos que recibimos un archivo, no un string
}
