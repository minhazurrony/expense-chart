export const formatNumber = (number, locale = "en-US", options = {}) => {
  const defaultOptions = {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  };

  return new Intl.NumberFormat(`${locale}`, defaultOptions).format(number || 0);
};
