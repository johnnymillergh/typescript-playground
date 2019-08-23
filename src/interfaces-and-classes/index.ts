export function printTrainReservation(trainReservation: TrainReservation) {
  console.log('TrainReservation:', trainReservation)
  if (!trainReservation.departureStation || !trainReservation.destinationStation) {
    console.error('departureStation or destinationStation is empty')
  }
}

/**
 * An interface of train reservation
 */
export interface TrainReservation {
  id: number
  trainNumber: string
  seatNumber: string
  departureStation?: string
  destinationStation?: string
  startTime: Date
  endTine: Date
}

/**
 * Clock constructor interface
 */
interface ClockConstructor {
  new(hour: number, minute: number): ClockInterface
}

/**
 * Clock interface which has abstract method
 */
interface ClockInterface {
  tick(): void
}

export function createClock(clockConstructor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new clockConstructor(hour, minute)
}

export class DigitalClock implements ClockInterface {
  // noinspection TypeScriptFieldCanBeMadeReadonly
  private h: number
  // noinspection TypeScriptFieldCanBeMadeReadonly
  private m: number

  constructor(h: number, m: number) {
    this.h = h
    this.m = m
  }

  tick(): void {
    console.log('beep beep', this.h, this.m)
  }
}

export class AnalogClock implements ClockInterface {
  // noinspection TypeScriptFieldCanBeMadeReadonly
  private h: number
  // noinspection TypeScriptFieldCanBeMadeReadonly
  private m: number

  constructor(h: number, m: number) {
    this.h = h
    this.m = m
  }

  tick() {
    console.log('tick tock', this.h, this.m)
  }
}

// Inheritance
export abstract class Animal {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  abstract makeSound(): void

  move(distanceInMeters = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

export class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }

  makeSound(): void {
    this.bark()
  }
}

export class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }

  makeSound(): void {
    console.log('Sss')
  }
}

export class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distanceInMeters = 45) {
    console.log('Galloping...')
    super.move(distanceInMeters)
  }

  makeSound(): void {
    console.log('Emm')
  }
}

const fullNameMaxLength = 10

export class Employee {
  private _fullName: string

  get fullName(): string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error(`fullName has a max length of ${fullNameMaxLength}`)
    }
    this._fullName = newName
  }
}
