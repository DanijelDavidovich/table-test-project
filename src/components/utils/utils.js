export const dateFormatter = (params) =>
  new Date(Number(params.data.openTime)).toLocaleDateString("en-UK").toString();

export const optionHelper = (name) => {
  switch (name) {
    case "Ask Price":
      return "askPrice";
      break;
    case "Bid Price":
      return "bidPrice";
      break;
    case "High Price":
      return "highPrice";
      break;
    case "Last Price":
      return "lastPrice";
      break;
    case "Low Price":
      return "lowPrice";
      break;
    case "Open Price":
      return "openPrice";
      break;
    case "Prev Close Price":
      return "prevClosePrice";
      break;
    case "Price Change":
      return "priceChange";
      break;
    case "Weighted Avg Price":
      return "weightedAbgPrice";
      break;
    case "Price Change Percent":
      return "priceChangePercent";
      break;
    case "Ask Quantity":
      return "askQty";
      break;
    case "Bid Quantity":
      return "bidQty";
      break;
    case "Last Quantity":
      return "lastQty";
      break;
    default:
      return;
  }
};
