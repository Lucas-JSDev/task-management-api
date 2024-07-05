import {
  IsDate,
  IsDateString,
  IsEnum,
  IsString,
  IsUUID,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum TaskStatusEnum {
  TO_DO = 'To do',
  IN_PROGRESS = 'In progress',
  DONE = 'Done',
}

export class TaskDto {
  @IsUUID()
  id: string;

  @IsString()
  @MinLength(3)
  @MaxLength(256)
  title: string;

  @IsString()
  @MinLength(6)
  @MaxLength(512)
  description: string;

  @IsEnum(TaskStatusEnum)
  status: string;

  @IsDateString()
  expirationDate: Date;
}

export interface IFindAllParameters {
  title: string;
  status: string;
}
