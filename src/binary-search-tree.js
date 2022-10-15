const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
	constructor(v = null) {
		this.data = v;
		this.left = null;
		this.right = null;
	}

	root() {
		if (this.data === null) {
			return null
		} else {
			return this
		}
	}

	add(data) {
		if (this.data === null) {
			this.data = data
		} else if (this.data > data) {
			if (this.left === null) {
				this.left = new BinarySearchTree(data)
			} else {
				this.left.add(data)
			}
		} else {
			if (this.right === null) {
				this.right = new BinarySearchTree(data)
			} else {
				this.right.add(data)
			}
		}
	}

	has(data) {
		if (data === this.data) {
			return true
		} else if (data > this.data && this.right !== null) {
			return this.right.has(data)
		} else if (data < this.data && this.left !== null) {
			return this.has.call(this.left, data)
		} else {
			return false
		}
	}

	find(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	min() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	max() {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

module.exports = {
	BinarySearchTree
};