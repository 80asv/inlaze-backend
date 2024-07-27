import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export enum OriginalLanguage {
  En = "en",
  Fr = "fr",
  Zh = "zh",
}

export type LikedMoviesDocument = LikedMovies & Document;

@Schema()
export class LikedMovies {
  @Prop({ required: true })
  adult: boolean;
  @Prop({ required: true })
  backdrop_path: string;
  @Prop({ required: true })
  genre_ids: number[];
  @Prop({ required: true })
  id: number;
  @Prop({ required: true })
  original_language: OriginalLanguage;
  @Prop({ required: true })
  original_title: string;
  @Prop({ required: true })
  overview: string;
  @Prop({ required: true })
  popularity: number;
  @Prop({ required: true })
  poster_path: string;
  @Prop({ required: true })
  release_date: Date;
  @Prop({ required: true })
  title: string;
  @Prop({ required: true })
  video: boolean;
  @Prop({ required: true })
  vote_average: number;
  @Prop({ required: true })
  vote_count: number;
  @Prop({ required: true })
  userId: string;
}

export const LikedMoviesSchema = SchemaFactory.createForClass(LikedMovies);