import { prisma } from "../../../database/prisma-client";

export class FindAllTodosByUsernameUseCase {
  async execute(username: string) {
    const todos = await prisma.todos.findMany({
      where: {
        user: {
          username
        }
      }
    });

    return todos;
  }
}
