import { Module } from '@nestjs/common';
import { LikedMoviesService } from './liked-movies.service';
import { LikedMoviesController } from './liked-movies.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikedMovies, LikedMoviesSchema } from './schemas/liked-movies.schema';
import { jwtConstants } from 'src/auth/jwt.contants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: LikedMovies.name,
        schema: LikedMoviesSchema
      }
    ]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '20m' }
    })
  ],
  controllers: [LikedMoviesController],
  providers: [LikedMoviesService],
})
export class LikedMoviesModule {}
