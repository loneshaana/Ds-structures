declare class N {
    private lastNode;
    private data;
    private nextNode;
    constructor(val: any);
    setData(val: any): any;
    getData(): any;
    after(): any;
    before(): any;
    setNextNode(node: N): void;
    setLastNode(node: N): void;
    getLastNode(): any;
    next(): any;
}
declare class LinkList {
    val: any;
    private head;
    private tail;
    private length;
    constructor(val?: any);
    setNext(val: any): N | undefined;
    next(): N;
    readonly getTail: N;
    readonly getHead: N;
    readonly getLength: number;
    traverse(): Array<any>;
    insertAt(index: number, data: any): void;
    private insertInMiddle;
    private traverseNode;
    deleteAt(index: number): void;
    private deleteAtMiddle;
}
export default LinkList;
