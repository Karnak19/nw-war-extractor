/*
  Warnings:

  - A unique constraint covering the columns `[pseudo]` on the table `Character` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Character_pseudo_key" ON "Character"("pseudo");
