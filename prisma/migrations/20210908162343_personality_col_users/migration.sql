-- AlterTable
ALTER TABLE "users" ADD COLUMN     "personality_type" TEXT,
ADD COLUMN     "personality_weight" INTEGER NOT NULL DEFAULT 0;
