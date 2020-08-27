// Numeric enums
export const enum Direction {
  UP = 1, DOWN, LEFT, RIGHT
}

// String enums
export const enum Response {
  YES = 'YES', NO = 'NO'
}

// Union enums and enum member types
export const enum ShapeKind {
  CIRCLE,
  SQUARE
}

export interface Circle {
  kind: ShapeKind.CIRCLE
  radius: number
}

export interface Square {
  kind: ShapeKind.SQUARE
  sideLength: number
}
