import { Injectable } from '@nestjs/common';
import { Character, Prisma, Score } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

interface Params {
  skip?: number;
  take?: number;
  where?: Prisma.CharacterWhereInput;
  orderBy?: Prisma.CharacterOrderByWithRelationInput;
}

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async getAll(params: Params): Promise<Character[]> {
    return this.prisma.character.findMany(params);
  }

  async getOne(
    where: Prisma.CharacterWhereUniqueInput,
  ): Promise<Character | null> {
    return this.prisma.character.findUnique({ where });
  }

  async create(data: Prisma.CharacterCreateInput): Promise<Character> {
    return this.prisma.character.create({ data });
  }

  async update(
    data: Prisma.CharacterCreateInput,
    where: Prisma.CharacterWhereUniqueInput,
  ): Promise<Character> {
    return this.prisma.character.update({ data, where });
  }

  async delete(where: Prisma.CharacterWhereUniqueInput): Promise<Character> {
    return this.prisma.character.delete({ where });
  }

  async resolveScore(characterId: Character['id']): Promise<Score[]> {
    return this.prisma.character
      .findUnique({ where: { id: characterId } })
      .scores();
  }
}
