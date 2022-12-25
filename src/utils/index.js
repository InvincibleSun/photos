export function getClass(index) {
  if (index % 5 === 0) {
    return "big";
  } else if (index % 6 === 0) {
    return "wide";
  }
}
