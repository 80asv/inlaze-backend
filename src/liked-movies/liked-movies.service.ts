import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LikedMovies, LikedMoviesDocument } from './schemas/liked-movies.schema';
import { Model } from 'mongoose';
import { CreateLikedMovieDto } from './dto/create-liked-movie.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LikedMoviesService {
  
  constructor(
    @InjectModel(LikedMovies.name) private readonly likedMoviesModel: Model<LikedMoviesDocument>,
    private jwtService: JwtService
  ) {}

  async getLikedMovies(token: string) {
    const decodedToken = this.jwtService.verify(token);
    const userId = decodedToken.id;
    const likedMovies = await this.likedMoviesModel.find({ userId });
    return likedMovies;
  }

  async like(movie: CreateLikedMovieDto, token: string) {
    const decodedToken = this.jwtService.verify(token);
    const userId = decodedToken.id;
    const movieWithUserId = { ...movie, userId: userId };
    console.log({ movieWithUserId, token, decodedToken });
    return this.likedMoviesModel.create(movieWithUserId);
  }

  async unlike(movieId: string){
    const unlikedMovie = await this.likedMoviesModel.findById(movieId);
    if(!unlikedMovie) throw new HttpException('Movie not found', 404);
    const newUnlikedMovie = await this.likedMoviesModel.findByIdAndDelete(movieId);
    return newUnlikedMovie;
  }
}
