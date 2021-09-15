const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(input).toEqual({ foo: 'foo', bar: 'bar', baz: 'baz' })
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 3 }, { integer: 2 }]
    const result = utils.findLargestInteger(input)
    expect(result).toEqual(3)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown()).toEqual(3)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    const first = counter.countDown()
    const second = counter.countDown()
    expect(second).toEqual(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    let count
    for (let i = 0; i < 5; i++){
      count = counter.countDown()
    }
    expect(count).toEqual(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next()).toEqual('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    let count
    for (let i = 0; i < 2; i++){
      season = seasons.next()
    }
    expect(season).toEqual("fall")
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    let count
    for (let i = 0; i < 3; i++){
      season = seasons.next()
    }
    expect(season).toEqual("winter")
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    let count
    for (let i = 0; i < 4; i++){
      season = seasons.next()
    }
    expect(season).toEqual("spring")
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    let count
    for (let i = 0; i < 5; i++){
      season = seasons.next()
    }
    expect(season).toEqual("summer")
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    let count
    for (let i = 0; i < 40; i++){
      season = seasons.next()
    }
    expect(season).toEqual("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    let newOdometer = focus.drive(100)
    expect(newOdometer).toEqual(100)
    newOdometer = focus.drive(100)
    expect(newOdometer).toEqual(200)
  })
  test('[16] driving the car uses gas', () => {
    const tankBefore = focus.tank
    focus.drive(100)
    expect(tankBefore > focus.tank).toBeTruthy()
  })
  test('[17] refueling allows to keep driving', () => {
    let odometer = focus.drive(600)
    expect(odometer).toEqual(600)
    odometer = focus.drive(1)
    expect(odometer).toEqual(600)
    focus.refuel(20)
    odometer = focus.drive(600)
    expect(odometer).toEqual(1200)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    let milesLeft = focus.refuel(1000)
    expect(milesLeft).toEqual(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const even = await utils.isEvenNumberAsync(2)
    expect(even).toBeTruthy()
  })
  test('[20] resolves false if passed an odd number', async () => {
    const odd = await utils.isEvenNumberAsync(3)
    expect(odd).not.toBeTruthy()
  })
})
