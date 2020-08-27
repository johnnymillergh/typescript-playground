import { describe, test, expect } from '@jest/globals'
import * as AsyncAndAwait from '../../src/async-and-await'

describe('Async and Await Unit Test', () => {
  test('1. Async and Await', async () => {
    // this.enableTimeouts(false)
    const shoppingList: Array<AsyncAndAwait.ShoppingItem> = new Array<AsyncAndAwait.ShoppingItem>()
    shoppingList.push({ name: 'Onion', price: 0.8 })
    shoppingList.push({ name: 'Rice', price: 0 })
    shoppingList.push({ name: 'Tomato', price: 2.4 })
    shoppingList.push({ name: 'Milk', price: 0 })
    shoppingList.push({ name: 'Potato', price: 1.3 })
    console.log('-- Start to but food material...')
    const boughtItems = await AsyncAndAwait.buyFoodMaterial(shoppingList)
    expect(boughtItems.length).toBeGreaterThan(0)
    console.log('-- Start to prepare food material...')
    const preparedFoodList = await AsyncAndAwait.prepareFood(boughtItems)
    expect(preparedFoodList.length).toBeGreaterThan(0)
    console.log('-- Start to cook...')
    const meal = await AsyncAndAwait.cook(preparedFoodList)
    console.log(meal)
    expect(meal.length).toBeGreaterThan(0)
  })
})
