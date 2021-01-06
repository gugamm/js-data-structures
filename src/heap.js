const defaultComparator = (a, b) => {
  return a - b
}

class Heap {
  constructor (comparator = defaultComparator) {
    this._heap = [null]
    this._comparator = comparator
  }

  get size() {
    return this._heap.length - 1
  }

  peek() {
    return this._heap[1] === undefined ? null : this._heap[1]
  }

  push(val) {
    this._heap.push(val)
    let storedElementIndex = this._heap.length - 1
    let parentElementIndex = Math.floor(storedElementIndex / 2)

    while (storedElementIndex > 1 && this._comparator(this._heap[storedElementIndex], this._heap[parentElementIndex]) < 0) {
      const tmp = this._heap[parentElementIndex]
      this._heap[parentElementIndex] = this._heap[storedElementIndex]
      this._heap[storedElementIndex] = tmp
      storedElementIndex = parentElementIndex
      parentElementIndex = Math.floor(storedElementIndex / 2)
    }
  }

  pop() {
    if (this._heap.length === 1) {
      return null
    }

    const popVal = this._heap.pop()

    if (this._heap.length  === 1) {
      return popVal
    }

    const topVal = this._heap[1]
    this._heap[1] = popVal

    if (this._heap.length === 2) {
      return topVal
    }

    let currentIndex = 1
    let leftChildIndex = currentIndex * 2
    let rightChildIndex = currentIndex * 2 + 1

    while (this._heap[leftChildIndex] !== undefined && this._heap[rightChildIndex] !== undefined && (this._comparator(this._heap[leftChildIndex], this._heap[currentIndex]) < 0 || this._comparator(this._heap[rightChildIndex], this._heap[currentIndex]) < 0)) {
      const rightComp = this._comparator(this._heap[rightChildIndex], this._heap[currentIndex])
      const leftComp = this._comparator(this._heap[leftChildIndex], this._heap[currentIndex])

      if (leftComp < 0 && leftComp <= rightComp) {
        const tmp = this._heap[leftChildIndex]
        this._heap[leftChildIndex] = this._heap[currentIndex]
        this._heap[currentIndex] = tmp
        currentIndex = leftChildIndex
      } else {
        const tmp = this._heap[rightChildIndex]
        this._heap[rightChildIndex] = this._heap[currentIndex]
        this._heap[currentIndex] = tmp
        currentIndex = rightChildIndex
      }

      leftChildIndex = currentIndex * 2
      rightChildIndex = currentIndex * 2 + 1
    }

    if (this._heap[rightChildIndex] === undefined && this._comparator(this._heap[leftChildIndex], this._heap[currentIndex]) < 0) {
      const tmp = this._heap[leftChildIndex]
      this._heap[leftChildIndex] = this._heap[currentIndex]
      this._heap[currentIndex] = tmp
    }

    return topVal
  }
}

module.exports = Heap
