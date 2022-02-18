import { Injectable } from '@nestjs/common';
import { Company, Prisma, Score, War } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

interface Params {
  skip?: number;
  take?: number;
  where?: Prisma.WarWhereInput;
  orderBy?: Prisma.WarOrderByWithRelationInput;
}

@Injectable()
export class WarService {
  constructor(private prisma: PrismaService) {}

  async getAll(params?: Params): Promise<War[]> {
    return this.prisma.war.findMany(params);
  }

  async getOne(where: Prisma.WarWhereUniqueInput): Promise<War | null> {
    return this.prisma.war.findUnique({ where });
  }

  async create(data: Prisma.WarCreateInput): Promise<War> {
    return this.prisma.war.create({ data });
  }

  async update(
    data: Prisma.WarCreateInput,
    where: Prisma.WarWhereUniqueInput,
  ): Promise<War> {
    return this.prisma.war.update({ data, where });
  }

  async delete(where: Prisma.WarWhereUniqueInput): Promise<War> {
    return this.prisma.war.delete({ where });
  }

  async resolveAttacker(warId: War['id']): Promise<Company | null> {
    return this.prisma.war.findUnique({ where: { id: warId } }).attacker();
  }

  async resolveDefender(warId: War['id']): Promise<Company | null> {
    return this.prisma.war.findUnique({ where: { id: warId } }).defender();
  }

  async resolveWinner(warId: War['id']): Promise<Company | null> {
    return this.prisma.war.findUnique({ where: { id: warId } }).winner();
  }

  async resolveScores(warId: War['id']): Promise<Score[]> {
    return this.prisma.war.findUnique({ where: { id: warId } }).scores();
  }
}
