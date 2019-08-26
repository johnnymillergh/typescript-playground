// Named function
export function add(x: number, y: number): number {
  return x + y
}

// Anonymous function
export const myAdd = (x: number, y: number): number => x + y

export function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`
  }
  return firstName
}

/**
 * Rest Parameters
 * @param firstName required
 * @param restOfName one or more
 */
export function buildName2(firstName: string, ...restOfName: string[]) {
  return `${firstName} ${restOfName.join(' ')}`
}

const suits = ['hearts', 'spades', 'clubs', 'diamonds']

/**
 * Overloads function
 * @param x any type
 * @return number if x is object type; object if x is number type
 */
export function pickCard(x: any): any {
  // Check to see if we're working with an object/array
  // if so, they gave us the deck and we'll pick the card
  if (typeof x === 'object') {
    return Math.floor(Math.random() * x.length)
  }
  // Otherwise just let them pick the card
  else if (typeof x === 'number') {
    const pickedSuit = Math.floor(x / 13)
    return {suit: suits[pickedSuit], card: x % 13}
  }
}
