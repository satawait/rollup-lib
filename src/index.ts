import { sum } from './sum'
import { add } from './commonjs'
import { sum as sum1 } from './utils'
import answer from './answer'
import { printAnswer } from '@/sleep'
export const sumPrintFunc = async (a: number, b: number, ...c: number[]): Promise<string> => {
    const testVar = 22
    const answer1 = await printAnswer()
    return `计算结果是${sum(a, b, ...c)}和${add(a, b)}和${sum1(a, b)}和${answer}和${answer1}和${constants.normal}`
}
sumPrintFunc(1, 2, 3)