/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Pokemon.name, //Este name no viene del name del entity sino del Document del que estamos extendiendo.
        schema: PokemonSchema,
      },
    ]),
  ],
  exports: [MongooseModule, PokemonService],
})
export class PokemonModule {}
