export default class List {
    list: Array<any>;
    constructor(...arg: any);
    get(index?: number): any;
    set(...arg: any): void;
    push(val: any): any[];
    contains(val: any): boolean;
    pushFront(val: any): void;
    popEnd(): any[];
    popFront(): any;
    removeDuplicates(): any[] | undefined;
    splice(index: number): any[] | -1 | undefined;
    remove(val: any): any[];
    filter(mode: 'number' | 'string' | List): any[] | undefined;
    pushAt(element: any, index?: number): any[] | undefined;
    fill(element: any, topIndex: number, bottomIndex?: number): any[] | undefined;
}
