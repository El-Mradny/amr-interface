export interface ComponentEntity<T = unknown> {
    id: number;
    name: string;
    data: T;
    createdAt: Date;
    updatedAt: Date;
}

