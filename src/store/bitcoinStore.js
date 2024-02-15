import axios from "axios";
import { create } from "zustand";

const bitcoinstore = create((set) => ({
  graphData: [],
  data: [],

  fetchBitcoinMarketData: async () => {
    try {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=360"
      );
      const graphData = result.data.prices.map((priceInfo) => {
        const [date, price] = priceInfo;
        return {
          date: date,
          price: price,
        };
      });
      set({ graphData });

      bitcoinstore.getState().getBitcoinDetails();
    } catch (err) {
      console.log(err);
    }
  },


  getBitcoinDetails: async () => {
    try {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
      );
      const { name, symbol, image, market_data} = result.data;
      set({
        data: {
          name: name,
          symbol: symbol,
          image: image.small,
          usdPrice: market_data.current_price.usd,
          btcPrice: market_data.current_price.btc,
          change_percentage: market_data.ath_change_percentage.usd
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
}));

export { bitcoinstore };
