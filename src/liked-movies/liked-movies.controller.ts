import { Controller, Post, Body, Param, Delete, UseGuards, Get, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LikedMoviesService } from './liked-movies.service';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';

@UseGuards(JwtAuthGuard)
@Controller('liked-movies')
export class LikedMoviesController {
  constructor(private likedMoviesService: LikedMoviesService) {}

  @Get()
  getLikedMovies(@Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1];
    return this.likedMoviesService.getLikedMovies(token);
  }

  @Post('')
  like(@Body() movieObject: CreateLikedMovieDto, @Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1];
    console.log({movieObject});
    return this.likedMoviesService.like(movieObject, token);
  }

  @Delete('/:movieId')
  unlike(@Param('movieId') movieId: string){
    return this.likedMoviesService.unlike(movieId);
  }
}
