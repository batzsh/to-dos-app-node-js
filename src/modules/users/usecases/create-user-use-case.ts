import { prisma } from "../../../database/prisma-client";
import { hash } from "bcrypt";

export class CreateUserUseCase {
  async execute({ name, username }: CreateUserUseCase.Request) {
    const userExists = await prisma.users.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive"
        }
      }
    });

    if (userExists) {
      throw new Error("User already exists");
    }

    const user = await prisma.users.create({
      data: {
        name,
        username
      }
    });

    return user;
  }
}

export namespace CreateUserUseCase {
  export interface Request {
    name: string;
    username: string;
  }
}
