const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

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
		if (data == this.data) {
			return true
		} else if (data > this.data && this.right !== null) {
			return this.right.has(data)
		} else if (data < this.data && this.left !== null) {
			return this.has.call(this.left, data)
		} else {
			return false
		}
	}

	find(data) {
		if (data === this.data) {
			return this
		} else if (data > this.data && this.right !== null) {
			return this.right.find(data)
		} else if (data < this.data && this.left !== null) {
			return this.find.call(this.left, data)
		} else {
			return null
		}
	}

	remove(data) {
		if (this === null) {
			return this
		}
		if (data < this.data) {
			Object.assign(this.left, this.left.remove(data))
			console.log(this.data)
		} else if (data > this.data) {
			Object.assign(this.right, this.right.remove(data))
		} else if (this.left !== null && this.right !== null) {
			this.data = this.right.min()
			Object.assign(this.right, this.right.remove(this.data))
		} else {
			if (this.left !== null) {
				Object.assign(this, this.left)
			} else if (this.right !== null) {
				Object.assign(this, this.right)
			} else {
				Object.assign(this, new BinarySearchTree())
			}
			return this
		}
	}


	min() {
		if (this.left === null) {
			return this.data
		} else {
			return this.left.min()
		}
	}

	max() {
		if (this.right === null) {
			return this.data
		} else {
			return this.right.max()
		}
	}
}

module.exports = {
	BinarySearchTree
};