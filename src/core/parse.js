export function parse(value = '') {
  if (typeof value === 'string') {
    if (value.startsWith('=')) {
      try {
        return eval(value.slice(1))
      } catch (e) {
        return value
      }
    }
    return value
  }

  return value;
}
