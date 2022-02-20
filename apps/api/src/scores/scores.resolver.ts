import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Prisma, Score } from '@prisma/client';
import { ScoresService } from './scores.service';

@Resolver('Score')
export class ScoresResolver {
  constructor(private readonly scoresService: ScoresService) {}

  @Query()
  async scores() {
    return this.scoresService.getAll();
  }

  @Query()
  async score(@Args('id') id: string) {
    return this.scoresService.getOne({ id });
  }

  @Mutation()
  async createScore(@Args('input') data: Prisma.ScoreCreateInput) {
    return this.scoresService.create(data);
  }

  @ResolveField()
  async character(@Parent() score: Score) {
    return this.scoresService.resolveCharacter(score.id);
  }

  @ResolveField()
  async war(@Parent() score: Score) {
    return this.scoresService.resolveWar(score.id);
  }
}
