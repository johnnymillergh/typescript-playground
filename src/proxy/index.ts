import { BaseNonExtendableEnumeration } from '../enumerations/base'

export class Person {
  id: number
  name: string

  constructor (id: number, name: string) {
    this.id = id
    this.name = name
  }
}

export class ProxyHandlerTypeEnumeration extends BaseNonExtendableEnumeration {
  toString (): string {
    return `${this.description} (${this.value})`
  }
}

// noinspection JSUnusedGlobalSymbols
export const ProxyHandlerType = {
  GET: new ProxyHandlerTypeEnumeration(0, 'GET'),
  SET: new ProxyHandlerTypeEnumeration(1, 'SET'),

  /**
   * Get status by value.
   * @param value value
   * @throws {Error} not found error if the argument code is not defined
   */
  getStatusByValue: (value: number): BaseNonExtendableEnumeration => {
    let enumeration
    Object.keys(ProxyHandlerType).forEach(statusKey => {
      const reflected = Reflect.get(ProxyHandlerType, statusKey)
      if (typeof reflected !== 'function' && reflected.value === value) {
        enumeration = reflected
      }
    })
    if (!enumeration) {
      throw new Error(`ProxyHandlerType not found! Given value: ${value}.`)
    }
    return enumeration
  }
}

export interface ProxyObservationCallback {
  (propertyKey: PropertyKey, value: any, proxyHandlerTypeEnumeration: ProxyHandlerTypeEnumeration): void
}

export function observe (object: any, callback: ProxyObservationCallback): any {
  return new Proxy<any>(object, {
    get (target: any, propertyKey: PropertyKey, receiver: any): any {
      callback(propertyKey, object, ProxyHandlerType.GET)
      return Reflect.get(target, propertyKey, receiver)
    },
    set (target: any, propertyKey: PropertyKey, value: any, receiver: any): boolean {
      if (typeof value === 'object') {
        const recursive = observe(value, callback)
        const result = Reflect.set(target, propertyKey, recursive, receiver)
        callback(propertyKey, recursive, ProxyHandlerType.SET)
        return result
      }
      const result = Reflect.set(target, propertyKey, value, receiver)
      callback(propertyKey, value, ProxyHandlerType.SET)
      return result
    }
  })
}
