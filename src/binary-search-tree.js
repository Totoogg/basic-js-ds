const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootTree = null
  }

  root() {
    return this.rootTree
  }

  add(data) {
    this.rootTree = addData(this.rootTree, data)
    function addData(list, data) {
      if (!list) return new Node(data)
      if (list.data === data) return list
      if (list.data > data) list.left = addData(list.left, data)
      if (list.data < data) list.right = addData(list.right, data)
      return list
    }
  }

  has(data) {
    return hasData(this.rootTree, data)
    function hasData(list, data) {
      if (!list) return false
      if (list.data === data) return true
      if (list.data > data) return hasData(list.left, data)
      if (list.data < data) return hasData(list.right, data)
    }
  }

  find(data) {
    return findData(this.rootTree, data)
    function findData(list, data) {
      if (!list) return null
      if (list.data === data) return list
      return list.data > data ? findData(list.left, data) : findData(list.right, data)
    }
  }

  remove(data) {
    this.rootTree = removeData(this.rootTree, data)
    function removeData(list, data) {
      if (!list) return null
      if (list.data > data) {
        list.left = removeData(list.left, data)
        return list
      }
      if (list.data < data) {
        list.right = removeData(list.right, data)
        return list
      }
      if (list.data === data) {
        if (!list.left && !list.right) return null
        if (!list.left) {
          list = list.right
          return list
        }
        if (!list.right) {
          list = list.right
          return list
        }
        let maxFromLeft = list.left
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right
        }
        list.data = maxFromLeft.data
        list.left = removeData(list.left, maxFromLeft.data)
        return list
      }
    }
  }

  min() {
    let minData = this.rootTree
    while (minData.left) {
      minData = minData.left
    }
    return minData.data
  }

  max() {
    let maxData = this.rootTree
    while (maxData.right) {
      maxData = maxData.right
    }
    return maxData.data
  }
}

module.exports = {
  BinarySearchTree
};