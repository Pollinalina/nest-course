import { Body, Controller, Get, Post } from '@nestjs/common';
import { PassportService } from './passport.service';
import { CreatePassportDto } from './dto/create-passport.dto';

@Controller('passport')
export class PassportController {
    
    constructor(private passportService: PassportService) {}


    @Post()
    create(@Body() passportDto: CreatePassportDto) {
        return this.passportService.createPassport(passportDto);
    }

    @Get()
    getAll()  {
        return this.passportService.getAllPassport()
    }
}
