import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LikedMoviesModule } from './liked-movies/liked-movies.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://sanabria80andres:7JxruNL2bWyVX5g@cluster0.3ygjgnl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), UsersModule, AuthModule, LikedMoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
