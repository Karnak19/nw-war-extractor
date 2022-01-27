import { Injectable } from '@nestjs/common';
import { Character, Prisma, Score } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

interface Params {
  skip?: number;
  take?: number;
  where?: Prisma.ScoreWhereInput;
  orderBy?: Prisma.ScoreOrderByWithRelationInput;
}

@Injectable()
export class ScoresService {
  constructor(private prisma: PrismaService) {}

  async getAll(params?: Params): Promise<Score[]> {
    return this.prisma.score.findMany(params);
  }

  async getOne(where: Prisma.ScoreWhereUniqueInput): Promise<Score | null> {
    return this.prisma.score.findUnique({ where });
  }

  async create(data: Prisma.ScoreCreateInput): Promise<Score> {
    return this.prisma.score.create({ data });
  }

  async update(
    data: Prisma.ScoreCreateInput,
    where: Prisma.ScoreWhereUniqueInput,
  ): Promise<Score> {
    return this.prisma.score.update({ data, where });
  }

  async delete(where: Prisma.ScoreWhereUniqueInput): Promise<Score> {
    return this.prisma.score.delete({ where });
  }

  async resolveCharacter(scoreId: Score['id']): Promise<Character | null> {
    return this.prisma.score.findUnique({ where: { id: scoreId } }).character();
  }
}
