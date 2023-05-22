/// <reference types="jest" />
/// <reference types="mocha" />
/// <reference types="jasmine" />

const { QueueArray } = require("./queue-array");

describe("Queue Array", () => {
  describe("empty", () => {
    it("should return true when no elements in the queue", () => {
      const queue = new QueueArray();
      expect(queue.empty).toBeTruthy();
    });

    it("should return false when at least one element in the queue", () => {
      const queue = new QueueArray();
      queue.enqueue(1);
      expect(queue.empty).toBeFalsy();
    });

    it("should return false", () => {
      const queue = new QueueArray();
      queue.enqueue(1);
      queue.dequeue();
      expect(queue.empty).toBeTruthy();
    });
  });

  describe("full", () => {
    it("should return true when queue is full of elements", () => {
      const queue = new QueueArray();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      expect(queue.full).toBeTruthy();
    });
  });

  describe("queue", () => {
    it("should add an element to the queue", () => {
      const queue = new QueueArray();
      queue.enqueue(1);
      expect(queue.queue).toEqual([1, null, null, null, null, null]);
    });

    it("should add 6 elements to the queue", () => {
      const queue = new QueueArray();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      expect(queue.queue).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should not add more elements to the queue if it is full", () => {
      const queue = new QueueArray();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      queue.enqueue(7);
      expect(queue.queue).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("should 7 be at last position of the array", () => {
      const queue = new QueueArray();

      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      queue.enqueue(6);
      queue.dequeue();
      queue.enqueue(7);

      expect(queue.queue).toEqual([2, 3, 4, 5, 6, 7]);
    });

    it("should all elements be null", () => {
      const queue = new QueueArray();
      
      queue.enqueue(1);
      queue.dequeue();
      queue.enqueue(2);
      queue.dequeue();
      queue.enqueue(3);
      queue.dequeue();
      queue.enqueue(4);
      queue.dequeue();
      queue.enqueue(5);
      queue.dequeue();
      queue.enqueue(6);
      queue.dequeue();
      queue.enqueue(7);
      queue.dequeue();

      expect(queue.queue).toEqual([null, null, null, null, null, null]);
    });

    it("should dequeue partially", () => {
      const queue = new QueueArray();
      
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);

      expect(queue.queue).toEqual([1, 2, 3, 4, null, null]);

      queue.dequeue();
      queue.dequeue();

      expect(queue.queue).toEqual([3, 4, null, null, null, null]);

      queue.enqueue(5);

      expect(queue.queue).toEqual([3, 4, 5, null, null, null]);

      queue.dequeue();
      queue.dequeue();

      expect(queue.queue).toEqual([5, null, null, null, null, null]);

      queue.dequeue();
      
      expect(queue.queue).toEqual([null, null, null, null, null, null]);
    });

    it("should return value on dequeue", () => {
      const queue = new QueueArray();
      
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);

      expect(queue.dequeue()).toBe(1)
      expect(queue.dequeue()).toBe(2)
      expect(queue.dequeue()).toBe(3)
    });
  });
});
