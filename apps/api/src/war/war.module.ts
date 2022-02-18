import { Module } from '@nestjs/common';
import { WarService } from './war.service';
import { WarResolver } from './war.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [WarResolver, WarService],
  imports: [PrismaModule],
})
export class WarModule {}
