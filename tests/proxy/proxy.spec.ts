import { describe, test, expect } from '@jest/globals'
import * as Proxy from '../../src/proxy'
import { ProxyHandlerType, ProxyHandlerTypeEnumeration } from '../../src/proxy'

describe('Proxy in TypeScript', () => {
  test('Proxy', () => {
    const johnny = new Proxy.Person(1, 'Johnny')
    let type: any
    const johnnyProxy = Proxy.observe(johnny, (propertyKey, value, proxyHandlerTypeEnumeration: ProxyHandlerTypeEnumeration) => {
      type = proxyHandlerTypeEnumeration
      if (typeof value === 'object') {
        console.info(`Observed field access! Method: ${proxyHandlerTypeEnumeration}, [${propertyKey.toString()}]: ${JSON.stringify(value)}`)
        return
      }
      console.info(`Observed field access! Method: ${proxyHandlerTypeEnumeration}, [${propertyKey.toString()}]: ${value}`)
    })

    console.info('Accessed field. johnnyProxy.id', johnnyProxy.id)
    expect(type?.value).toBe(ProxyHandlerType.GET.value)
    johnnyProxy.id = 2
    expect(type?.value).toBe(ProxyHandlerType.SET.value)
  })
})
