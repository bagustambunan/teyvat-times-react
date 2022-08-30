export function ParseCurrency(number) {
  return `Rp ${Number(number.toFixed(1)).toLocaleString()}`;
}

export function ParseDate(date) {
  const d = new Date(date);
  return `${d.toDateString()} ${d.toLocaleTimeString()}`
}