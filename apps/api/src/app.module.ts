import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { PrismaModule } from './prisma/prisma.module';
import { CharactersModule } from './characters/characters.module';
import { ScoresModule } from './scores/scores.module';
import { WarModule } from './war/war.module';
import { MagicModule } from './magic/magic.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    CompanyModule,
    PrismaModule,
    CharactersModule,
    ScoresModule,
    WarModule,
    MagicModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
