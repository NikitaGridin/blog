-- CreateEnum
CREATE TYPE "ARTICLE_STATUS" AS ENUM ('AWAIT_CONFIRM', 'PUBLISHED', 'REJECTED');

-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "cover" TEXT,
    "userId" TEXT NOT NULL,
    "status" "ARTICLE_STATUS" NOT NULL DEFAULT 'AWAIT_CONFIRM',

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Article" ADD CONSTRAINT "Article_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
