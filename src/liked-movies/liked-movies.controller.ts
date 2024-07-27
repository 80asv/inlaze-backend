import { Controller, Post, Body, Param, Delete, UseGuards, Get, Req } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LikedMoviesService } from './liked-movies.service';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUnauthorizedResponse({ description: 'Unauthorized Bearer Auth' })
@ApiTags('liked-movies')
@UseGuards(JwtAuthGuard)
@Controller('liked-movies')
export class LikedMoviesController {
  constructor(private likedMoviesService: LikedMoviesService) {}

  @ApiCreatedResponse({
    example: [
      {
        "_id": "66a51e80ea4a1ed3ec04d498",
        "adult": false,
        "backdrop_path": "/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg",
        "genre_ids": [
          28,
          35,
          80
        ],
        "id": 280180,
        "original_language": "en",
        "original_title": "Beverly Hills Cop: Axel F",
        "overview": "Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.",
        "popularity": 908.004,
        "poster_path": "/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
        "release_date": "2024-06-20T00:00:00.000Z",
        "title": "Beverly Hills Cop: Axel F",
        "video": false,
        "vote_average": 6.899,
        "vote_count": 709,
        "userId": "66a4ee74b89d9eb67cb1a22c",
        "__v": 0
      }
    ]
  })
  @Get()
  getLikedMovies(@Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1];
    return this.likedMoviesService.getLikedMovies(token);
  }

  @ApiCreatedResponse({
    example: {
      "adult": false,
      "backdrop_path": "/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 280180,
      "original_language": "en",
      "original_title": "Beverly Hills Cop: Axel F",
      "overview": "Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.",
      "popularity": 908.004,
      "poster_path": "/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
      "release_date": "2024-06-20T00:00:00.000Z",
      "title": "Beverly Hills Cop: Axel F",
      "video": false,
      "vote_average": 6.899,
      "vote_count": 709,
      "userId": "66a4ee74b89d9eb67cb1a22c",
      "_id": "66a537c5105c1b05631f73c0",
      "__v": 0
    }
  })
  @Post('')
  like(@Body() movieObject: CreateLikedMovieDto, @Req() req: Request) {
    const token = req.headers['authorization']?.split(' ')[1];
    // console.log({movieObject});
    return this.likedMoviesService.like(movieObject, token);
  }

  @ApiCreatedResponse({
    example: {
      "_id": "66a537c5105c1b05631f73c0",
      "adult": false,
      "backdrop_path": "/rrwt0u1rW685u9bJ9ougg5HJEHC.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 280180,
      "original_language": "en",
      "original_title": "Beverly Hills Cop: Axel F",
      "overview": "Forty years after his unforgettable first case in Beverly Hills, Detroit cop Axel Foley returns to do what he does best: solve crimes and cause chaos.",
      "popularity": 908.004,
      "poster_path": "/zszRKfzjM5jltiq8rk6rasKVpUv.jpg",
      "release_date": "2024-06-20T00:00:00.000Z",
      "title": "Beverly Hills Cop: Axel F",
      "video": false,
      "vote_average": 6.899,
      "vote_count": 709,
      "userId": "66a4ee74b89d9eb67cb1a22c",
      "__v": 0
    }
  })
  @Delete('/:movieId')
  unlike(@Param('movieId') movieId: string){
    return this.likedMoviesService.unlike(movieId);
  }
}
