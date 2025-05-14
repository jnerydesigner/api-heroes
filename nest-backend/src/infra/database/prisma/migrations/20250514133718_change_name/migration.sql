/*
  Warnings:

  - You are about to drop the column `imagePath` on the `heroes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "heroes" DROP COLUMN "imagePath",
ADD COLUMN     "image_path" TEXT;
