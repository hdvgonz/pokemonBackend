/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  @Prop({
    unique: true,
    index: true, //para que sepa donde esta el elemento que estoy buscando
  })
  name: string;

  @Prop({
    unique: true,
    index: true, //para que sepa donde esta el elemento que estoy buscando
  })
  no: number;
}

//exportamos esquema:
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
