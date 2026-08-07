import {PrismaClient} from "@/generated/prisma/client";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};
const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    port: 3306,
    connectionLimit: 5,
});
const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;
