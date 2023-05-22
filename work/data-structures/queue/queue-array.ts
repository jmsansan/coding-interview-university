"use strict"

class QueueArray {
  #queue: Array<any>;
  #size: number;
  #maxSize = 6;

  constructor() {
    this.#queue = [null, null, null, null, null, null];
    this.#size = 0;
  }


  get queue(): Array<any> {
    return this.#queue;
  }


  /**
   * Determines if queue is empty.
   *
   * @returns {boolean}
   */
  get empty(): boolean {
    return this.#size === 0;
  }

  /**
   * Determines if queue is full.
   *
   * @returns {boolean}
   */
  get full(): boolean {
    return this.#size === this.#maxSize;
  }

  /**
   * Adds item at end of available storage.
   *
   * @param {any} value
   */
  enqueue(value: any): void {
    if(this.full) return;
    
    this.#queue[this.#size] = value;
    this.#size += 1;
  }

  /**
   * Returns value and removes least recently added element.
   *
   * @returns {any} value
   */
  dequeue = (): any => {
    if(this.empty) return null;

    const value = this.#queue[0];

    for (let index = 0; index < this.#size; index++) {
      if(this.#queue[index+1] === null) {
        this.#queue[index] = null;
      } else {
        this.#queue[index] = this.#queue[index+1];
      }
    }

    this.#size -= 1;
    return value;
  };
}

export { QueueArray };
