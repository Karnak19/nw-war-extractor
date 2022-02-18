import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Company } from '@prisma/client';
import { CompanyService } from './company.service';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query()
  async companies() {
    return this.companyService.getAll({});
  }

  @Query()
  async company(@Args('id') id: string) {
    return this.companyService.getOne({ id });
  }

  @Mutation()
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
}
