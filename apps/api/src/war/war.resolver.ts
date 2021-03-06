import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { War } from '@prisma/client';
import { WarService } from './war.service';

@Resolver('War')
export class WarResolver {
  constructor(private readonly warService: WarService) {}

  @Query()
  async war(@Args('id') id: string) {
    return this.warService.getOne({ id });
  }

  @ResolveField()
  async attacker(@Parent() war: War) {
    return this.warService.resolveAttacker(war.id);
  }

  @ResolveField()
  async defender(@Parent() war: War) {
    return this.warService.resolveDefender(war.id);
  }

  @ResolveField()
  async winner(@Parent() war: War) {
    return this.warService.resolveWinner(war.id);
  }

  @ResolveField()
  async scores(@Parent() war: War) {
    return this.warService.resolveScores(war.id);
  }
}
