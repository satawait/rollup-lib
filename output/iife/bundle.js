var Test = (function (exports, constants) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var constants__default = /*#__PURE__*/_interopDefaultLegacy(constants);

    const sum$1 = (a, b, ...c) => {
        if (c.length) {
            return c.reduce((pre, next) => pre + next, a + b);
        }
        else {
            return a + b;
        }
    };

    const add = (a, b) => a + b;
    var add_1 = add;

    const sum = (a, b) => {
        return a + b;
    };

    var answer = 42;

    const sleep = (timestamp) => {
        return new Promise((resolve) => {
            setTimeout(() => { resolve(20); }, timestamp);
        });
    };
    const printAnswer = async () => {
        await sleep(2000);
    };

    const sumPrintFunc$1 = async (a, b, ...c) => {
        const answer1 = await printAnswer();
        return `计算结果是${sum$1(a, b, ...c)}和${add_1(a, b)}和${sum(a, b)}和${answer}和${answer1}和${constants__default["default"].normal}`;
    };
    sumPrintFunc$1(1, 2, 3);

    var test01 = "data:image/png;base64,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";

    var test02 = "7822ffd3c90c0d9c.png";

    const sumPrintFunc = (a, b, ...c) => {
        return `计算结果是${sum$1(a, b, ...c)}和${add_1(a, b)}和${sum(a, b)}和${answer}和${test01}和${test02}`;
    };
    const version = '1.0.0';
    sumPrintFunc(1, 2, 3);

    exports.version = version;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, constants);
