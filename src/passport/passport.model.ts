import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Staff } from "src/staff/staff.model";
import { StaffPassport } from "./staff-passport.model";

interface PassportCreationAttrs {
    series: string;
    number: string;
}

@Table({tableName: 'passport'})
export class Passport extends Model<Passport, PassportCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: '0110', description: 'Серия'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    series: string;

    @ApiProperty({example: '111111', description: 'Номер'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    number: string;

    @ApiProperty({example: 'ТП УФМС', description: 'Кем выдан'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    issued: string;
    
    @ApiProperty({example: '21.06.20015', description: 'Дата выдачи'})
    @Column({type: DataType.STRING, allowNull: false})
    dateissued: string;

    @ApiProperty({example: '111-11', description: 'Код подразделения'})
    @Column({type: DataType.STRING, allowNull: false})
    code: string;

    @BelongsToMany(() => Staff,  () => StaffPassport)
    staff: Staff[];
}