import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ConfigService} from "@nestjs/config";

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mysql',
                host: process.env.MYSQL_HOST,
                port: parseInt(process.env.MYSQL_PORT, 10),
                username: process.env.MYSQL_USERNAME,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                autoLoadEntities: true,
                synchronize: true
            }),
            inject:[ConfigService]
        })
    ]})
export class DatabaseModule {}
