import { StateService } from './state-service';
export abstract class StateServiceBase<T> implements StateService<T> {
    public value: T;

    public apply(value: T): void {
        this.value = value;
    };

    public clear(): void {
        this.value = undefined;
    };
}