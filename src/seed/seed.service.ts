import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokeResponse } from './interface/poke-response.interface';

@Injectable()
export class SeedService {
  //Crea visualmente una dependencia explicita del servicio de axios, para asegurar que cualquier uso futuro de axios se refiera a la misma instancia de axios

  private readonly axios: AxiosInstance = axios;

  async executeSeed() {
    const { data } = await this.axios.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon/?limit=10`,
    );

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2]; //coloca el + para indicar que es un numero;
      console.log({ name, no });
    });
    return data.results;
  }
}