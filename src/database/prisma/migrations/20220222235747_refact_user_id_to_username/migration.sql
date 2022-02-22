/*
  Warnings:

  - You are about to drop the column `user_id` on the `todos` table. All the data in the column will be lost.
  - Added the required column `username` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "todos" DROP CONSTRAINT "todos_user_id_fkey";

-- AlterTable
ALTER TABLE "todos" DROP COLUMN "user_id",
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "todos" ADD CONSTRAINT "todos_username_fkey" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
