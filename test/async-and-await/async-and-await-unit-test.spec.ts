import 'mocha'
import { expect } from 'chai'
import * as AsyncAndAwait from '../../src/async-and-await'

describe('Async and Await Unit Test', () => {
  it('1. Async and Await', async function () {
    this.enableTimeouts(false)
    const shoppingList: Array<AsyncAndAwait.ShoppingItem> = new Array<AsyncAndAwait.ShoppingItem>()
    shoppingList.push({name: 'Onion', price: 0.8})
    shoppingList.push({name: 'Rice', price: 0})
    shoppingList.push({name: 'Tomato', price: 2.4})
    shoppingList.push({name: 'Milk', price: 0})
    shoppingList.push({name: 'Potato', price: 1.3})
    console.log('-- Start to but food material...')
    const boughtItems = await AsyncAndAwait.buyFoodMaterial(shoppingList)
    expect(boughtItems.length).to.greaterThan(0)
    console.log('-- Start to prepare food material...')
    const preparedFoodList = await AsyncAndAwait.prepareFood(boughtItems)
    expect(preparedFoodList.length).to.greaterThan(0)
    console.log('-- Start to cook...')
    const meal = await AsyncAndAwait.cook(preparedFoodList)
    console.log(meal)
    expect(meal.length).to.greaterThan(0)
  })
})
