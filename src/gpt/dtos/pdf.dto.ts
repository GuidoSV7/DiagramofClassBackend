import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PdfDto {

    @ApiProperty({ type: 'string'})
    @IsString()
    prompt: string;

   
}
