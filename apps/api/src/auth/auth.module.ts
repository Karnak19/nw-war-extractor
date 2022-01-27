import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { MagicStrategy } from './strategies/magic.strategy';

@Module({
  imports: [PassportModule],
  providers: [MagicStrategy],
})
export class AuthModule {}
