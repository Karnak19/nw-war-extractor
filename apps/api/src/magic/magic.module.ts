import { Module } from '@nestjs/common';
import { MagicService } from './magic.service';

@Module({
  providers: [MagicService],
  exports: [MagicService],
})
export class MagicModule {}
