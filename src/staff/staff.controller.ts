import { Body, Controller, Get, Post } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';

@Controller('staff')
export class StaffController {
    constructor(private staffService: StaffService) {}


    @Post()
    create(@Body() staffDto: CreateStaffDto) {
        return this.staffService.createStaff(staffDto);
    }

    @Get()
    getAll()  {
        return this.staffService.getAllStaff()
    }
}
