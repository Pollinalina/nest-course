import { Injectable } from '@nestjs/common';
import { Passport } from './passport.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePassportDto } from './dto/create-passport.dto';

@Injectable()
export class PassportService {
    
    constructor(@InjectModel(Passport) private passportRepository: typeof Passport) {}

    async createPassport(dto: CreatePassportDto) {
        const passport = await this.passportRepository.create(dto);
        return passport;
    }
    
    async getAllPassport() {
        const passport = await this.passportRepository.findAll();
        return passport;
    }
}
