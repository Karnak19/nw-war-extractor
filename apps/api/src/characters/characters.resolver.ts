import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Character } from '@prisma/client';
import { CharactersService } from './characters.service';

@Resolver('Character')
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query()
  async character(@Args('id') id: string) {
    return this.charactersService.getOne({ id });
  }

  @ResolveField()
  async scores(@Parent() character: Character) {
    return this.charactersService.resolveScore(character.id);
  }

  @ResolveField()
  async company(@Parent() character: Character) {
    return this.charactersService.resolveCompany(character.id);
  }
}
