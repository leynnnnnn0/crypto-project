import { create } from "zustand";
import axios from "axios";

const marketChartStore = create((set) => ({
  chartData: [],

  range: 120,

  coinInfo: [],

  setRange: (time) => {
    set({ range: time });
    console.log(marketChartStore.getState().range);
  },

  query: "bitcoin",

  setQuery: (e) => {
    set({ query: e.target.value });
  },

  fetchChartData: async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${
          marketChartStore.getState().query
        }/market_chart?vs_currency=usd&days=${
          marketChartStore.getState().range
        }`
      );
      const data = response.data;
      const chartData = data.prices.map((item) => {
        const [date, price] = item;
        return {
          date,
          price,
        };
      });

      set({ chartData });
      marketChartStore.getState().fetchCoinInfo();
    } catch (err) {
      set({ chartData: [] });
      console.log(err);
    }
  },
  fetchCoinInfo: async () => {
    try {
      const result = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${marketChartStore.getState().query}`
      );

      const { name, symbol, image, market_data } = result.data;
      set({
        coinInfo: {
          name: name,
          symbol: symbol,
          image: image.small,
          usdPrice: market_data.current_price.usd,
          btcPrice: market_data.current_price.btc,
          change_percentage: market_data.ath_change_percentage.usd,
        },
      });

      console.log(marketChartStore.getState().coinInfo);
    } catch (err) {
      console.log(err);
    }
  },
}));

export { marketChartStore };
