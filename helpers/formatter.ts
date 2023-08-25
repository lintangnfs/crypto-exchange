export const formatNumber = (number) => {
  if (number) {
    const suffixes = ["", " K", " M", " B", " T"];
    let integerNumber = Math.floor(number);
    let suffixNum = Math.floor(("" + integerNumber).length / 3);

    let shortValue: any = parseFloat(
      (suffixNum != 0
        ? number / Math.pow(1000, suffixNum)
        : number
      ).toPrecision(2)
    );
    if (shortValue % 1 != 0 && suffixNum > 1) {
      shortValue = Number(shortValue.toFixed(1)) * 1000;
      suffixNum = suffixNum - 1;
    }

    return shortValue + suffixes[suffixNum];
  }

  return 0;
};

export const formatToCurrency = (number, maximumSignificantDigits = 2) => {
  if (number) {
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits,
    });

    return Math.abs(number) <= 1.0e6
      ? formatter.format(number)
      : formatter.format(Math.abs(number) / 1.0e6) + "M";
  }

  return 0;
};
