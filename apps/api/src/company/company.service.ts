import { Injectable } from '@nestjs/common';
import { Company, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

interface Params {
  skip?: number;
  take?: number;
  cursor?: Prisma.UserWhereUniqueInput;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput;
}

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async getAll(params: Params): Promise<Company[]> {
    return this.prisma.company.findMany(params);
  }

  async getOne(where: Prisma.CompanyWhereUniqueInput): Promise<Company | null> {
    return this.prisma.company.findUnique({ where });
  }

  async create(data: Prisma.CompanyCreateInput): Promise<Company> {
    return this.prisma.company.create({ data });
  }

  async update(
    data: Prisma.CompanyCreateInput,
    where: Prisma.CompanyWhereUniqueInput,
  ): Promise<Company> {
    return this.prisma.company.update({ data, where });
  }

  async delete(where: Prisma.CompanyWhereUniqueInput): Promise<Company> {
    return this.prisma.company.delete({ where });
  }
}
