import {PrismaClient} from "@/generated/prisma/client";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";

const globalForPrisma = global as unknown as {
    prisma: PrismaClient;
};
const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 3306,
    connectionLimit: 20,
    connectTimeout: 10000,
    acquireTimeout: 10000,
});
const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
export default prisma;
