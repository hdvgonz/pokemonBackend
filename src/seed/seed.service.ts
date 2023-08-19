/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
// import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interface/poke-response.interface';
import { PokemonService } from '../pokemon/pokemon.service';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  //Crea visualmente una dependencia explicita del servicio de axios, para asegurar que cualquier uso futuro de axios se refiera a la misma instancia de axios
  // private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private pokeService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {

    //Borrar todos los registros que haya antes de volverlo a rellenar (delete * from)
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon/?limit=650`,
    );

    const pokemonToInsert: {name: string, no: number}[] = [];


    data.results.forEach( ({ name, url }) => {
      const segments: string[] = url.split('/');
      const no: number = +segments[segments.length - 2]; //coloca el + para indicar que es un numero;
      
      pokemonToInsert.push( {name, no}); // [{name: bulbasur, no:1}]

    });
    // const insertPromisesArray = [];
    // data.results.forEach( /*async*/ ({ name, url }) => {
    //   const segments: string[] = url.split('/');
    //   const no: number = +segments[segments.length - 2]; //coloca el + para indicar que es un numero;
    //   console.log({ name, no });

    //   /*Forma 1, pero hay que esperar que se resuelva cada iteracion*/
    //   const newPokemon = await  this.pokeService.create({name, no});

    //   /*Forma 2, insertar todo en un arreglo de promesas */
    //   insertPromisesArray.push(
    //     this.pokemonModel.create({name, no})
    //   );
    // });

    // /**Forma 2, aqui hace todas las inserciones al mismo tiempo */
    // await Promise.all(insertPromisesArray); 
    this.pokemonModel.insertMany(pokemonToInsert);
    return 'Seed Executed';
  }
}
