import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaLibSql } from "@prisma/adapter-libsql"

const globalForPrisma = global as unknown as {
  prisma: PrismaClient
}

const adapter = new PrismaLibSql({
  url: process.env.DATABASE_URL as string
})

const db = globalForPrisma.prisma || new PrismaClient({
  adapter
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

export default db