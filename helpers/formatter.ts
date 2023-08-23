export const formatToCurrency = (number, maximumSignificantDigits = 3) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits,
  });

  return Math.abs(number) >= 1.0e6
    ? formatter.format(Math.abs(number) / 1.0e6) + "M"
    : formatter.format(number);
};
