import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Staff } from './staff.model';
import { Passport } from 'src/passport/passport.model';
import { StaffPassport } from 'src/passport/staff-passport.model';

@Module({
  providers: [StaffService],
  controllers: [StaffController],
  imports: [
    SequelizeModule.forFeature([Staff, Passport, StaffPassport])
  ],
  
})
export class StaffModule {}
