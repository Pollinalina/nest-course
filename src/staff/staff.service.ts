import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Staff } from './staff.model';

@Injectable()
export class StaffService {

    constructor(@InjectModel(Staff) private staffRepository: typeof Staff) {}

    async createStaff(dto: CreateStaffDto) {
        const staff = await this.staffRepository.create(dto);
        return staff;
    }
    
    async getAllStaff() {
        const staff = await this.staffRepository.findAll();
        return staff;
    }
}
