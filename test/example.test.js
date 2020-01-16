import { checkResults } from '../rps.js'
// import example from '../src/example.js';

const test = QUnit.test;
QUnit.module('checkResults');

test('sham beats ro', assert => {
    //Arrange
    const player = 'sham';
    const cpu = 'ro';
    const expected = 'win';
    const result = checkResults(player, cpu);

    //Act 

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('ro beats bo', assert => {
    const player = 'ro';
    const cpu = 'bo';
    const expected = 'win';
    const result = checkResults(player, cpu);
    assert.equal(result, expected);
});

test('tie', assert => {
    const player = 'sham';
    const cpu = 'sham';
    const expected = 'draw';
    const result = checkResults(player, cpu);
    assert.equal(result, expected);
});