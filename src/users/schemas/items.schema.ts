import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users {
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, unique: true })
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);

// adnres eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTQ0ZWRhNGRmOTdmOGUzNDZiNTVmYiIsImlhdCI6MTcyMjA0NDE1MSwiZXhwIjoxNzIyMDQ1MzUxfQ.xLFz1geOrntUDCynU3iokHXHYO1Aiq8CjZgKVieEkY4
// pedro eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YTQ0ZWQyNGRmOTdmOGUzNDZiNTVmOSIsImlhdCI6MTcyMjA0NDE3OSwiZXhwIjoxNzIyMDQ1Mzc5fQ.h9Ss6liL_qP_PucVlqEal_D2FYpck06fx2a6N72FT30