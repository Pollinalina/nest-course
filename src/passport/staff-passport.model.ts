import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Staff } from "src/staff/staff.model";
import { Passport } from "./passport.model";


@Table({tableName: 'staff_passport', createdAt: false, updatedAt: false})
export class StaffPassport extends Model<StaffPassport> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    Id: number;

    @ForeignKey(() => Staff)
    @Column({type: DataType.INTEGER})
    staffId: number;

    @ForeignKey(() => Passport)
    @Column({type: DataType.INTEGER})
    passportId: number;
}