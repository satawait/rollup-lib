'use strict';

const sum = (a, b, ...c) => {
    if (c.length) {
        return c.reduce((pre, next) => pre + next, a + b);
    }
    else {
        return a + b;
    }
};

const sumPrintFunc = (a, b, ...c) => {
    return `计算结果是${sum(a, b, ...c)}`;
};
sumPrintFunc(1, 2, 3);
