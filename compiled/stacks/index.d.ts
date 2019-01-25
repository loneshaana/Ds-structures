import List from '../lists/index';
declare class Stack {
    size: number;
    stack: List;
    constructor(size: number);
    readonly getSize: number;
    extend(size: number): void;
    push(element: any): List;
    pop(): List;
    peek(): any;
    stackOverFlow(): boolean;
    stackUnderFlow(): boolean;
}
export default Stack;
