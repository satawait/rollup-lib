import { sum } from '../src/sum'
const sumPrintFunc = (a: number, b: number, ...c: number[]): string => {
    const testVar = 22
    return `计算结果是${sum(a, b, ...c)}`
}
sumPrintFunc(1, 2, 3)