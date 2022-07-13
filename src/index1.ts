import { sum } from './sum'
import { add } from './commonjs'
import { sum as sum1 } from './utils'
import answer from './answer'
import test01 from '@/assets/test.png'
import test02 from '@/assets/test02.png'
import '@/assets/style.scss'
export const sumPrintFunc = (a: number, b: number, ...c: number[]): string => {
    const testVar = 22
    return `计算结果是${sum(a, b, ...c)}和${add(a, b)}和${sum1(a, b)}和${answer}和${test01}和${test02}`
}
export const version = '__test_version__'
sumPrintFunc(1, 2, 3)