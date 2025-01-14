/**
 * Check if an object in contain in an array
 */
export const containsObject = (object: object, list: []): boolean => {
  let i
  for (i = 0; i < list.length; i++) {
    if (list[i] === object) {
      return true
    }
  }

  return false
}

/**
 * Check if object is empty.
 */
export const objectIsEmpty = (object: object): boolean => {
  const isEmpty =
    object && Object.keys(object).length === 0 && object.constructor === Object
  return isEmpty || object === undefined
}
