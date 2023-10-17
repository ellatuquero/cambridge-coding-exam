
const nextJest = require('next/jest');
/** @type {import('jest').Config} */

const createJestConfig = nextJest({
    dir: './',
});

const config = {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

};
module.exports = createJestConfig(config);