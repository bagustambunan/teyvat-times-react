function ParseCurrency(number) {
  return `Rp ${Number(number.toFixed(1)).toLocaleString()}`;
}

export default ParseCurrency;
