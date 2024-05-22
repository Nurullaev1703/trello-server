import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProfileModule } from './profile/profile.module';
import * as path from 'path';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal:true,
    envFilePath: path.resolve(__dirname, '../.env')
  }),
    DatabaseModule, 
    UsersModule, 
    ProjectsModule, AuthenticationModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
