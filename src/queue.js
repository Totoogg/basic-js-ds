const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.list = null
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    this.list = addValue(this.list, value)
    function addValue(node, value) {
      if (!node) return new ListNode(value)
      if (node.value === value) return node
      node.next = addValue(node.next, value)
      return node
    }
  }

  dequeue() {
    let first = null
    this.list = dequeueValue(this.list)
    return first
    function dequeueValue(node) {
      if (!node) return null
      first = node.value
      node = node.next
      return node
    }
  }
}

module.exports = {
  Queue
};
