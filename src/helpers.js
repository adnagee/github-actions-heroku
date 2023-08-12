export function square(n1) {
  if (!isNaN(n1)) {
    return Number(n1) * Number(n1);
  } else {
    return "Error";
  }
}
