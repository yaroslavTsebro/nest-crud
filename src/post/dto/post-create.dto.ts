import { IsArray, IsString, Length } from 'class-validator';

export class PostCreateDto {
  @IsString()
  @Length(2, 50)
  title: string;
  @IsString()
  @Length(2, 500)
  text: string;
  @IsArray()
  tags?: number[];
}
