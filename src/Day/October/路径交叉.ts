export function isSelfCrossing(distance: number[]): boolean {
  const len = distance.length;
  for (let i = 3; i < len; i++) {
    if (
      distance[i]! >= distance[i - 2]! &&
      distance[i - 1]! <= distance[i - 3]!
    ) {
      return true;
    }
    if (
      i >= 4 &&
      distance[i - 1] === distance[i - 3] &&
      distance[i]! + distance[i - 4]! >= distance[i - 2]!
    ) {
      return true;
    }
    if (
      i >= 5 &&
      distance[i - 2]! > distance[i - 4]! &&
      distance[i - 1]! <= distance[i - 3]! &&
      distance[i]! + distance[i - 4]! >= distance[i - 2]! &&
      distance[i - 1]! >= distance[i - 3]! - distance[i - 5]!
    ) {
      return true;
    }
  }
  return false;
}
