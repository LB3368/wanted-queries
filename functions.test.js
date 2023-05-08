const { returnTwo, greeting, add, multiply, divide, subtract } = require('../wanted-queries/functions')

test('returnTwo should return 2', () => {
    expect(returnTwo()).toEqual(2)
});

test('greeting should return a personalized greeting', () => {
    expect(greeting('James')).toEqual('Hello, James')
    expect(greeting('Jill')).toEqual('Hello, Jill')
})

test('add should return the sum of two numbers', () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})

describe('Math functions', () => {
    test('add should return the sum of two numbers', () => {
        expect(add(1, 2)).toEqual(3)
        expect(add(5, 9)).toEqual(14)
    })

    test('Multiply should return the product of two numbers', () => {
        expect(multiply(2, 3)).toEqual(6)
        expect(multiply(4, 5)).toEqual(20)
    })

    test('Divide should return the quotient of two numbers', () => {
        expect(divide(6, 2)).toEqual(3)
        expect(divide(10, 5)).toEqual(2)
    })

    test('Subtract should return the difference of two numbers', () => {
        expect(subtract(5, 3)).toEqual(2)
        expect(subtract(10, 7)).toEqual(3)
    })
});
