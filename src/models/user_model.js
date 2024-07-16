import { PrismaClient } from "@prisma/client";

const user_model = new PrismaClient().users;

export default user_model;
