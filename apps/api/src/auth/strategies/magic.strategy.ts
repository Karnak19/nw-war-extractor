import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { MagicUser, Strategy } from 'passport-magic';

@Injectable()
export class MagicStrategy extends PassportStrategy(Strategy, 'magic') {
  constructor() {
    super();
  }
  async validate(user: MagicUser) {
    return user;
  }
}
