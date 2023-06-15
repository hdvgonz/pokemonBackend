import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }), //Para usar variables de entorno

    //Conexión a Mongo DB
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),

    PokemonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
