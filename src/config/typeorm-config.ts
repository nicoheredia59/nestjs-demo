import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.getOrThrow('PGDB_HOST'),
      port: configService.getOrThrow('PGDB_PORT'),
      username: configService.getOrThrow('PGDB_USERNAME'),
      password: configService.getOrThrow('PGDB_PASSWORD'),
      database: configService.getOrThrow('PGDB_DATABASE'),
      synchronize: configService.getOrThrow('PGDB_SYNCHRONIZE'),
      autoLoadEntities: true,
    };
  }
  constructor(configService: ConfigService) {
    TypeOrmConfig.getOrmConfig(configService);
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
};
