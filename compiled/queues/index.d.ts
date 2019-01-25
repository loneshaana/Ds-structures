import { List } from '../';
declare class Queue {
    queue: List;
    constructor();
    enqueue(item: any): void;
    dequeue(): any;
    readonly first: any;
    readonly last: any;
    readonly size: any;
}
export default Queue;
