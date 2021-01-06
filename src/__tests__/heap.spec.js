const Heap = require('../heap')

describe('MinHeap()', () => {
  it('Should create an empty heap', () => {
    const minHeap = new Heap()
    expect(minHeap.size).toBe(0)
    expect(minHeap.peek()).toBe(null)
  })

  it('Should sort elements correctly', () => {
    const descendingElements = [20,15,10,5,0]
    const minHeap = new Heap()
    descendingElements.forEach((element, index) => {
      minHeap.push(element)
      expect(minHeap.size).toBe(index + 1)
      expect(minHeap.peek()).toBe(element)
    })
  })

  it('Should pop elements correctly', () => {
    const descendingElements = [0,3,2,5]
    const expectedPopOrder = [0,2,3,5]
    const minHeap = new Heap()
    descendingElements.forEach(element => minHeap.push(element))
    
    let index = 0
    while (minHeap.size > 0) {
      expect(minHeap.pop()).toBe(expectedPopOrder[index])
      index++
    }

    expect(minHeap.size).toBe(0)
  })
})

describe('MaxHeap()', () => {
  const comparator = (a, b) => {
    return b - a
  }

  it('Should create an empty heap', () => {
    const maxHeap = new Heap(comparator)
    expect(maxHeap.size).toBe(0)
    expect(maxHeap.peek()).toBe(null)
  })

  it('Should sort elements correctly', () => {
    const ascendingOrder = [0,5,10,15,20]
    const maxHeap = new Heap(comparator)
    ascendingOrder.forEach((element, index) => {
      maxHeap.push(element)
      expect(maxHeap.size).toBe(index + 1)
      expect(maxHeap.peek()).toBe(element)
    })
  })

  it('Should pop elements correctly', () => {
    const ascendingOrder = [0,5,10,15,20]
    const expectedPopOrder = [20,15,10,5,0]
    const maxHeap = new Heap(comparator)
    ascendingOrder.forEach(element => maxHeap.push(element))
    
    let index = 0
    while (maxHeap.size > 0) {
      expect(maxHeap.pop()).toBe(expectedPopOrder[index])
      index++
    }

    expect(maxHeap.size).toBe(0)
  })
})
