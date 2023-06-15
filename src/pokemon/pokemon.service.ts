import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLowerCase();
    const newPokemon = new this.pokemonModel(createPokemonDto);

    return await newPokemon.save();
  }

  findAll() {
    return this.pokemonModel.find();
  }

  async findOneById(id: string) {
    return await this.pokemonModel.findById(id);
  }

  async findOneByname(name: string) {
    const pokemon = await this.pokemonModel.findOne({ name }).exec();

    if (!pokemon)
      throw new NotFoundException(`A pokemon with that id was not found`);
    return pokemon;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return `This action updates a #${id} pokemon`;
  }

  async remove(id: string) {
    await this.pokemonModel.findByIdAndDelete(id);
    return `the pokemon was deleted`;
  }
}
