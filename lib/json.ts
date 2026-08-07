export function parseJson<T>(value: unknown): T {
    return value as T;
}