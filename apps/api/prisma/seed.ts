import { PrismaClient } from '@prisma/client';
import characters from './slicedData.json';

const client = new PrismaClient();

async function main() {
  const companies = await client.company.findMany();

  const war = await client.war.create({
    data: {
      attackerId: companies[0].id,
      defenderId: companies[1].id,
      winnerId: companies[0].id,
    },
  });

  await Promise.all([
    characters.map((char) => {
      return client.character
        .create({
          data: {
            pseudo: char.name,
            companyId: companies[0].id,
            scores: {
              create: {
                rank: +char.rank,
                score: +char.score,
                kills: +char.kills,
                deaths: +char.deaths,
                assists: +char.assists,
                damage: +char.damage,
                healing: +char.healing,
                warId: war.id,
              },
            },
          },
        })
        .then((char) => console.log(char.pseudo));
    }),
  ]);
}

main();
