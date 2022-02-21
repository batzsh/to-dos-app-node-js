import { prisma } from "../../../database/prisma-client";

export class FindAllTodosByUserIdUseCase {
  async execute(user_id: string) {
    const todos = await prisma.todos.findMany({
      where: {
        user_id
      }
    });

    return todos;
  }
}
