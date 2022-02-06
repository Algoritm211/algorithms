import { Stack } from "./Stack";

describe('Stack', () => {
  it('Should create empty stack', () => {
    const stack = new Stack();
    expect(stack).not.toBeNull();
  });

  it('Should stack data to stack', () => {
    const stack = new Stack();

    stack.push('1');
    stack.push('2');

    expect(stack.toString()).toBe('2,1');
  });

  it('Should peek data from stack', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push('1');
    stack.push('2');

    expect(stack.peek()).toBe('2');
    expect(stack.peek()).toBe('2');
  });

  it('Should check if stack is empty', () => {
    const stack = new Stack();

    expect(stack.isEmpty()).toBe(true);

    stack.push('1');

    expect(stack.isEmpty()).toBe(false);
  });

  it('Should pop data from stack', () => {
    const stack = new Stack();

    stack.push('1');
    stack.push('2');

    expect(stack.pop()?.value).toBe('2');
    expect(stack.pop()?.value).toBe('1');
    expect(stack.isEmpty()).toBe(true);
  });

  it('should be possible to push/pop objects', () => {
    const stack = new Stack();

    stack.push('test1');
    stack.push('test2');

    expect(stack.pop()?.value).toBe('test2');
    expect(stack.pop()?.value).toBe('test1');
  });

  it('Should be possible to convert stack to array', () => {
    const stack = new Stack();

    expect(stack.peek()).toBeNull();

    stack.push('1');
    stack.push('2');
    stack.push('3');

    expect(stack.toArray()).toEqual(['3', '2', '1']);
  });
});
