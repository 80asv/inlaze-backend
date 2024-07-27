import { PartialType } from '@nestjs/mapped-types';
import { CreateLikedMovieDto } from './create-liked-movie.dto';

export class UpdateLikedMovieDto extends PartialType(CreateLikedMovieDto) {}
