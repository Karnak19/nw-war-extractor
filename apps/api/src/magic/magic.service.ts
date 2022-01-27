import { Injectable } from '@nestjs/common';
import { Magic } from '@magic-sdk/admin';

@Injectable()
export class MagicService extends Magic {
  constructor() {
    super(process.env.MAGIC_SECRET);
  }
}
