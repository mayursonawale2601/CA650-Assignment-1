class Queue {
	constructor(size) {
		if(size > 5) {
			throw new Error("Queue size should not be more than 5");
		}
		this.queue = []; // Array to store the queue elements
		this.size = size;
	}

	add(element) {
		if (this.isFull()) {
      throw new Error("Queue is full");
    }

		if (!(typeof element == null) && (!Number.isInteger(element))) {
			throw new Error('Element is not a integer'); // Throw an error if the element is not a integer
		}

		if ((Math.sign(element) === -1) || (Math.sign(element) === 0)) {
			throw new Error('Element should be a positive integer'); // Throw an error if the element is not positive integer
		}

		return this.queue.push(element); // Enqueue the element to the end of the queue
	}

	remove() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty'); // Throw an error if the queue is empty
		}

		return this.queue.shift(); // Dequeue the element from the front of the queue
	}

	howMany() {
		return this.queue.length; // Get the number of elements in the queue
	}

	isEmpty() {
		return this.howMany() === 0; // Check if the queue is empty
	}

	isFull() {
    return this.howMany() == this.size; // Check if the queue is full
  }

	front() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty'); // Throw an error if the queue is empty
		}

		return this.queue[0]; // Return the front element without removing it
	}
};

// const queue = new Queue(2);
// queue.add(1);
// console.log("queue:",queue.queue);
// queue.add(2);
// console.log("queue:",queue.queue);
// queue.add(3);


module.exports = Queue;