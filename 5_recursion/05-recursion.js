export function isEven(num) {
    if (num === 0) {
      return true;
    } else if (num === 1) {
      return false;
    } else if (num < 0) {
      return 'negative'
    } else {
      return isEven(num - 2);
    }
}