class Deque {
  constructor() {
    this._start = null
    this._end = null
    this._size = 0
  }

  get size() {
    return this._size
  }

  push(el) {
    if (this._start === null) {
      const newNode = new Node(el, null, null)
      this._start = newNode
      this._end = newNode
    } else {
      const newNode = new Node(el, this._end, null)
      this._end.next = newNode
      this._end = newNode
    }

    this._size++
  }

  pop() {
    if (this._end === null) {
      return null
    }

    const removeElem = this._end
    this._end = removeElem.prev

    if (this._end === null) {
      this._start = null
    } else {
      this._end.next = null
    }

    this._size--

    return removeElem.val
  }

  unshift(el) {
    if (this._start === null) {
      const newNode = new Node(el, null, null)
      this._start = newNode
      this._end = newNode
    } else {
      const newNode = new Node(el, null, this._start)
      this._start.prev = newNode
      this._start = newNode
    }

    this._size++
  }

  shift() {
    if (this._start === null) {
      return null
    }

    const removeElem = this._start
    this._start = removeElem.next

    if (this._start === null) {
      this._end = null
    } else {
      this._start.prev = null
    }

    this._size--

    return removeElem.val
  }

  forEach(fn) {
    if (this._start === null) {
      return
    }

    let currentElem = this._start

    while (currentElem !== null) {
      fn(currentElem.val)
      currentElem = currentElem.next
    }
  }

  toArray() {
    if (this._start === null) {
      return []
    }

    let current = this._start
    let index = 0
    const result = Array(this._size)
    while (current) {
      result[index] = current.val
      current = current.next
      index++
    }
    return result
  }
}

class Node {
  constructor(val, prev, next) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}

module.exports = Deque
