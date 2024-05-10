import { Module } from '@nestjs/common';
import { PassportService } from './passport.service';
import { PassportController } from './passport.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Passport } from './passport.model';
import { Staff } from 'src/staff/staff.model';
import { StaffPassport } from './staff-passport.model';

@Module({
  providers: [PassportService],
  controllers: [PassportController],
  imports: [
    SequelizeModule.forFeature([Passport, Staff, StaffPassport])
  ],

})
export class PassportModule {}
