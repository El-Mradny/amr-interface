import {PrismaClient} from "@/generated/prisma/client";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";


const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 3306,
    connectionLimit: 5,
});

const globalForPrisma = global as unknown as {
    prisma?: PrismaClient;
};

// Use existing instance if present, otherwise create a new one
export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter,
    });

// In dev, store it on global to avoid multiple instances
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;