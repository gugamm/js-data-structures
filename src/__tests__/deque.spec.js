const Deque = require('../deque')

describe('Deque', () => {
  it('Should add 3 elements to the end', () => {
    const deque = new Deque()

    deque.push(10)
    deque.push(20)
    deque.push(30)
    
    expect(deque.size).toBe(3)
    expect(deque.pop()).toBe(30)
    expect(deque.pop()).toBe(20)
    expect(deque.pop()).toBe(10)
    expect(deque.size).toBe(0)
  })

  it('Should allow removal from beginning', () => {
    const deque = new Deque()

    deque.push(10)
    deque.push(20)
    deque.push(30)
    
    expect(deque.size).toBe(3)
    expect(deque.shift()).toBe(10)
    expect(deque.shift()).toBe(20)
    expect(deque.shift()).toBe(30)
    expect(deque.size).toBe(0)
  })

  it('Should insertion and removal from beginning', () => {
    const deque = new Deque()

    deque.unshift(10)
    deque.unshift(20)
    deque.unshift(30)
    
    expect(deque.size).toBe(3)
    expect(deque.shift()).toBe(30)
    expect(deque.shift()).toBe(20)
    expect(deque.shift()).toBe(10)
    expect(deque.size).toBe(0)
  })

  it('Should call callback with correct arguments', () => {
    const deque = new Deque()
    const callback = jest.fn()

    deque.unshift(10)
    deque.unshift(20)
    deque.unshift(30)
    
    deque.forEach(callback)

    expect(deque.size).toBe(3)
    expect(callback.mock.calls[0][0]).toBe(30)
    expect(callback.mock.calls[1][0]).toBe(20)
    expect(callback.mock.calls[2][0]).toBe(10)
  })

  it('Should return null while poping or shift from empty deque', () => {
    const deque = new Deque()

    expect(deque.size).toBe(0)
    expect(deque.pop()).toBe(null)
    expect(deque.shift()).toBe(null)
    expect(deque.size).toBe(0)
  })
})
