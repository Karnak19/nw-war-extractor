import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';

@Resolver('Company')
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query()
  async companies() {
    return this.companyService.getAll({});
  }

  @Query()
  async company(id: string) {
    return this.companyService.getOne({ id });
  }

  @Mutation()
  async createCompany(@Args('name') name: string) {
    return this.companyService.create({ name });
  }
}
