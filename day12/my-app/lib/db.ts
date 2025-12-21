import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5
});

const PrismaClientSingleton = () => {
  return new PrismaClient({ adapter })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global;

const prismaDb = globalThis.prismaGlobal ?? PrismaClientSingleton();

export default prismaDb;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prismaDb;

