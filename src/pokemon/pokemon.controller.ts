import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  async create(@Body() createPokemonDto: CreatePokemonDto) {
    return await this.pokemonService.create(createPokemonDto);
  }

  @Get()
  async findAll() {
    return await this.pokemonService.findAll();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return await this.pokemonService.findOneById(id);
  }

  @Get(':name')
  async findOneByName(@Param('name') name: string) {
    return await this.pokemonService.findOneByname(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pokemonService.remove(id);
  }
}
