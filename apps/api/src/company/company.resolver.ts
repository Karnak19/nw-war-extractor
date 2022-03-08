import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Company } from '@prisma/client';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CompanyService } from './company.service';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query()
  async companies() {
    return this.companyService.getAll({});
  }

  @Query()
  @UseGuards(GqlAuthGuard)
  async company(@Args('id') id: string) {
    return this.companyService.getOne({ id });
  }

  @Query()
  @UseGuards(GqlAuthGuard)
  async companyWars(@Args('id') id: string) {
    return this.companyService.getWars(id);
  }

  @Mutation()
  @UseGuards(GqlAuthGuard)
  async createCompany(@Args('name') name: string) {
    return this.companyService.create({ name });
  }

  @Mutation()
  async updateCompany(@Args('id') id: string, @Args('name') name: string) {
    return this.companyService.update({ name }, { id });
  }

  @ResolveField()
  async characters(@Parent() company: Company) {
    return this.companyService.resolveCharacters(company.id);
  }

  @ResolveField()
  async attacks(@Parent() company: Company) {
    return this.companyService.resolveAttacks(company.id);
  }

  @ResolveField()
  async defenses(@Parent() company: Company) {
    return this.companyService.resolveDefenses(company.id);
  }

  @ResolveField()
  async wins(@Parent() company: Company) {
    return this.companyService.resolveWins(company.id);
  }
}
