export interface StateService<T> {
    value: T;
    apply(value: T): void;
    clear(): void;
}
