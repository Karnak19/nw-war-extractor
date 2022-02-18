import { Test, TestingModule } from '@nestjs/testing';
import { WarResolver } from './war.resolver';
import { WarService } from './war.service';

describe('WarResolver', () => {
  let resolver: WarResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarResolver, WarService],
    }).compile();

    resolver = module.get<WarResolver>(WarResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
