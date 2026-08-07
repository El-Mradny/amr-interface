import { prisma } from "@/lib/prisma";
import {InputJsonValue} from "@prisma/client/runtime/client";

export class ComponentService {
    static getByName(name: string) {
        return prisma.component.findUnique({
            where: { name },
        });
    }

    static getById(id: number) {
        return prisma.component.findUnique({
            where: { id },
        });
    }

    static updateByName(name: string, data: InputJsonValue) {
        return prisma.component.update({
            where: { name },
            data: {
                data,
            },
        });
    }

    static updateById(id: number, data: InputJsonValue) {
        return prisma.component.update({
            where: { id },
            data: {
                data,
            },
        });
    }



    static getAll() {
        return prisma.component.findMany({
            orderBy: {
                id: "asc",
            },
        });
    }
}