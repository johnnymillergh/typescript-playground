/**
 * To bug food material from given shopping list
 * @param shoppingList shopping list
 * @return bought food material
 */
export function buyFoodMaterial(shoppingList: Array<ShoppingItem>): Promise<Array<ShoppingItem>> {
  return new Promise(resolve => {
    setTimeout(() => {
      const boughtItemList: Array<ShoppingItem> = new Array<ShoppingItem>()
      for (const item of shoppingList) {
        if (item.price) {
          console.log(`Bought ${item.name}`)
          boughtItemList.push(item)
        }
      }
      resolve(boughtItemList)
    }, 1500)
  })
}

/**
 * Prepare the food
 * @param foodList food which needs to be prepared
 * @return prepared food list
 */
export function prepareFood(foodList: Array<ShoppingItem>): Promise<Array<ShoppingItem>> {
  if (!foodList) {
    return Promise.reject('Food list cannot be empty')
  }
  return new Promise(resolve => {
    setTimeout(() => {
      for (const item of foodList) {
        console.log(`Preparing the food: ${item.name}...`)
      }
      resolve(foodList)
    }, 1500)
  })
}

/**
 * Cook the food
 * @param foodList prepared food list
 */
export function cook(foodList: Array<ShoppingItem>): Promise<string> {
  if (!foodList) {
    return Promise.reject('Food list cannot be empty')
  }
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Dinner is done. Enjoy your meal')
    }, 1500)
  })
}

export class ShoppingItem {
  name: string
  price?: number
}
