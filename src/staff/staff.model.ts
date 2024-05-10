import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Passport } from "src/passport/passport.model";
import { StaffPassport } from "src/passport/staff-passport.model";

interface StaffCreationAttrs {
    id: string;
    surname: string;
}

@Table({tableName: 'staff'})
export class Staff extends Model<Staff, StaffCreationAttrs> {
    
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;
    
    @ApiProperty({example: 'Иванов', description: 'Фамилия'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    surname: string;

    @ApiProperty({example: 'Иван', description: 'Имя'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    name: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    patronymic: string;
    
    @ApiProperty({example: '31.05.2001', description: 'Дата рождения'})
    @Column({type: DataType.STRING, allowNull: false})
    birthdate: string;

    @ApiProperty({example: '+7(999)999-99-99', description: 'Номер телефона'})
    @Column({type: DataType.STRING, allowNull: false})
    phonenumber: string;

    @BelongsToMany(() => Passport,  () => StaffPassport)
    passport: Passport[];
}