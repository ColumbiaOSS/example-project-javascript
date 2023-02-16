import { helloWorld, printHello } from '../src/main.js';

describe('hello world', () => {
  let consoleSpy: jest.SpyInstance;

  // Act before assertions
  beforeAll(async () => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  // Teardown (cleanup) after assertions
  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('expect the output to be as specified', () => {
    expect(helloWorld()).toBe('Hello, world!');
  });

  it('expect the hello world to be printed', () => {
    printHello();
    expect(consoleSpy).toHaveBeenCalledWith('Hello, world!');
  });
});
