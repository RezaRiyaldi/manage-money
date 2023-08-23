-- AlterTable
ALTER TABLE "Categories" ALTER COLUMN "created_by" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Usage" ALTER COLUMN "created_by" DROP NOT NULL;
