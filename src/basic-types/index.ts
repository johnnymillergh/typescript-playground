// 1. Boolean
export const deleted = false

// 2. Number
export const decimal = 10
export const hex = 0xf00d
export const binary = 0b1010
export const octal = 0o774

// 3. String
export const color = 'blue'
export const sentence = `Hello, the color is ${color}.

I like this color very much!`

// 4. Array
export const numberList: number[] = [1, 2, 3]
// Set 'array-type' to false in tslint.json to allow to use generic
export const numberList2: Array<number> = [4, 5, 6]

// 5. Tuple: an array with a fixed number of elements whose types are known, but need not be the same.
export const tuple: [string, number] = ['Hello', 10]

// 6. Enum
export enum Color {
  Red, Green, Blue
}

// 7. Any. Any values may come from dynamic content
export const notSure: any = 4

// 8. Void. Void is a little like the opposite of any: the absence of having any type at all.
export function warnUser(): void {
  console.warn('This is a warning message')
}

// 9. Null and Undefined
export const n: null = null
export const u: undefined = undefined
