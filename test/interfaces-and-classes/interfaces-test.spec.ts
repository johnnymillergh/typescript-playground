import * as InterfacesAndClasses from '../../src/interfaces-and-classes'
import { Animal, Dog, Employee, Horse, Snake, TrainReservation } from '../../src/interfaces-and-classes'
import 'mocha'
// import { assert } from 'chai'

describe('Unit Test - Basic Types in TypeScript', () => {
  it('1. Our First Interface', () => {
    const trainReservation: TrainReservation = {
      id: 1566444113250001,
      trainNumber: 'G387',
      seatNumber: 'A18',
      // departureStation: 'Tianjin West Railway Station',
      destinationStation: 'Dalian North Railway Station',
      startTime: new Date('2019-09-30 09:02:00'),
      endTine: new Date('2019-09-30 13:27:00')
    }
    InterfacesAndClasses.printTrainReservation(trainReservation)
  })

  it('2. Class Types Implementing an Interface', () => {
    const digital = InterfacesAndClasses.createClock(InterfacesAndClasses.DigitalClock, 12, 29)
    const analog = InterfacesAndClasses.createClock(InterfacesAndClasses.AnalogClock, 12, 30)
    console.log('Digital clock', digital)
    console.log('Analog clock', analog)
    digital.tick()
    analog.tick()
  })

  it('3. Class Inheritance', () => {
    const bailey = new Dog('Bailey')
    bailey.bark()
    bailey.move(10)
    bailey.bark()
    const sam = new Snake('Sammy the Python')
    sam.move()
    const tom: Animal = new Horse('Tommy the Palomino')
    tom.move(43)
  })

  it('4. Class Accessors', () => {
    const employee = new Employee()
    employee.fullName = 'Sam Smith'
    console.log(`Full name of the employee: ${employee.fullName}`)
  })
})
