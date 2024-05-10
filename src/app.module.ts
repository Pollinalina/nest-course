import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
import { Post } from "./posts/posts.model";
import { FilesModule } from './files/files.module';
import * as path from 'path';
import { ServeStaticModule } from "@nestjs/serve-static";
import { StaffModule } from './staff/staff.module';
import { Staff } from "./staff/staff.model";
import { PassportModule } from './passport/passport.module';
import { Passport } from "./passport/passport.model";
import { StaffPassport } from "./passport/staff-passport.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
         }),
         ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, 'static'),
          }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Post, Staff, Passport, StaffPassport],
            autoLoadModels: true
          }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        StaffModule,
        PassportModule,
    ]
})
export class AppModule {}