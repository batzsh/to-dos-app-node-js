import { prisma } from "../../../database/prisma-client";

export class DeleteTodoByIdUseCase {
  async execute(id: string) {
    const todoExists = await prisma.todos.findUnique({
      where: {
        id
      }
    });

    if (!todoExists) {
      throw new Error("Todo does not exists");
    }

    const result = await prisma.todos.delete({
      where: {
        id
      }
    });

    return result;
  }
}
