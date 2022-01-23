import { Queue } from "./Queue";



describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
  });

  it('Should enqueue data to queue', () => {
    const queue = new Queue();

    queue.enqueue('1');
    queue.enqueue('2');

    expect(queue.toString()).toBe('1,2');
  });

  it('Should be possible to enqueue/dequeue objects', () => {
    const queue = new Queue();

    queue.enqueue('test1');
    queue.enqueue('test2');

    expect(queue.dequeue()?.value).toBe('test1');
    expect(queue.dequeue()?.value).toBe('test2');
  });

  it('Should peek data from queue', () => {
    const queue = new Queue();

    expect(queue.peek()).toBeNull();

    queue.enqueue('1');
    queue.enqueue('2');

    expect(queue.peek()).toBe('1');
    expect(queue.peek()).toBe('1');
  });

  it('Should check if queue is empty', () => {
    const queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue('1');

    expect(queue.isEmpty()).toBe(false);
  });

  it('Should dequeue from queue in FIFO order', () => {
    const queue = new Queue();

    queue.enqueue('1');
    queue.enqueue('2');

    expect(queue.dequeue()?.value).toBe('1');
    expect(queue.dequeue()?.value).toBe('2');
    expect(queue.dequeue()).toBeNull();
    expect(queue.isEmpty()).toBe(true);
  });
});
