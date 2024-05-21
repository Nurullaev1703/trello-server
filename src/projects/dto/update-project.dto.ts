import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateProjectDto {
  @IsArray()
  @IsString({each:true})
  @ArrayMinSize(0)
  users: string[];

  @IsOptional()
  @IsString()
  name?:string
}
