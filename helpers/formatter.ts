export const formatNumber = (number) => {
  const suffixes = ["", " K", " M", " B", " T"];
  let suffixNum = Math.floor(("" + number).length / 3);

  let shortValue: any = parseFloat(
    (suffixNum != 0 ? number / Math.pow(1000, suffixNum) : number).toPrecision(
      2
    )
  );
  if (shortValue % 1 != 0) {
    shortValue = Number(shortValue.toFixed(1)) * 1000;
    suffixNum = suffixNum - 1;
  }

  return shortValue + suffixes[suffixNum];
};

export const formatToCurrency = (number, maximumSignificantDigits = 2) => {
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumSignificantDigits,
  });

  return Math.abs(number) <= 1.0e6
    ? formatter.format(number)
    : formatter.format(Math.abs(number) / 1.0e6) + "M";
};
