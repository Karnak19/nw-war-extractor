import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresResolver } from './scores.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ScoresResolver, ScoresService],
})
export class ScoresModule {}
