import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Character } from '@prisma/client';
import { CharactersService } from './characters.service';

@Resolver('Character')
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @ResolveField()
  async scores(@Parent() character: Character) {
    return this.charactersService.resolveScore(character.id);
  }
}
