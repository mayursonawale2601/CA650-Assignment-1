const Queue = require('./queue');

describe('constructor', () => {
  it('should not create array with more than size 5', () => {
    expect(() => new Queue(6)).toThrowError('Queue size should not be more than 5');
  });

  it('should be empty when created', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should be empty array with specific size', () => {
    const queue = new Queue(2);
    expect(queue).toEqual({ queue: [], size: 2 });
  });
});

describe('add', () => {
  it('should add a positive integer to the queue', () => {
    const queue = new Queue();
    queue.add(5);
    expect(queue.queue).toEqual([5]);
  });

  // Try adding other data-types values
  it('should throw an error if the element is not an integer', () => {
    const queue = new Queue();
    expect(() => queue.add(null)).toThrowError('Element is not a integer');
    expect(() => queue.add('string')).toThrowError('Element is not a integer');
    expect(() => queue.add(true)).toThrowError('Element is not a integer');
    expect(() => queue.add(3.14)).toThrowError('Element is not a integer');
  });

  // Try adding non-integer values
  it('should throw an error if the element is not a positive integer', () => {
    const queue = new Queue();
    expect(() => queue.add(-1)).toThrowError('Element should be a positive integer');
    expect(() => queue.add(0)).toThrowError('Element should be a positive integer');
  });

  it('should throw an error if the queue is full', () => {
    const queue = new Queue(2);
    queue.add(1);
    queue.add(2);
    expect(() => queue.add(3)).toThrowError('Queue is full');
  });

});

describe('remove', () => {
  test('should throw an error when removing from an empty queue', () => {
    const queue = new Queue(1);
    queue.add(2);
    queue.remove();
    expect(() => queue.remove()).toThrowError('Queue is empty');
  });

  test('should remove elements in proper order from the queue', () => {
    const queue = new Queue(2);
    queue.add(1);
    queue.add(2);
    queue.remove();
    expect(queue.front()).toBe(2);
  });

  test('should remove all the elements from the queue', () => {
    const queue = new Queue(2);
    queue.add(1);
    queue.add(2);
    queue.remove();
    queue.remove();
    expect(queue.queue).toEqual([]);
  });
});

describe('front', () => {
  test('should throw an error when peeking at an empty queue', () => {
    const queue = new Queue();
    expect(() => queue.front()).toThrowError('Queue is empty');
  });

  test('should add elements to the end of the queue', () => {
    const queue = new Queue(2);
    queue.add(1);
    queue.add(2);
    queue.remove();
    queue.add(3);
    queue.remove();
    expect(queue.front()).toBe(3);
  });
});

describe('howMany', () => {
  test('should correctly report the number of elements in the queue', () => {
    const queue = new Queue(2);
    expect(queue.howMany()).toBe(0);
    queue.add(1);
    expect(queue.howMany()).toBe(1);
    queue.add(2);
    expect(queue.howMany()).toBe(2);
    queue.remove();
    expect(queue.howMany()).toBe(1);
  });
});

describe('isEmpty', () => {
  test('should return true', () => {
    const queue = new Queue(1);
    queue.add(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('should return false', () => {
    const queue = new Queue(1);
    queue.add(1);
    queue.remove();
    expect(queue.isEmpty()).toBe(true);
  });
});

describe('isFull', () => {
  test('should return true', () => {
    const queue = new Queue(1);
    queue.add(1);
    expect(queue.isFull()).toBe(true);
  });

  test('should return false', () => {
    const queue = new Queue(1);
    queue.add(1);
    queue.remove();
    expect(queue.isFull()).toBe(false);
  });
});
