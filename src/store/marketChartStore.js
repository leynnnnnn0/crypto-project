import { create } from "zustand";
import axios from "axios";

const marketChartStore = create((set) => ({
  chartData: [],

  range: 120,

  setRange: (time) => {
    set({ range: time });
    console.log(marketChartStore.getState().range);
  },

  fetchChartData: async () => {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${
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
    } catch (err) {
      console.log(err);
    }
  },
}));

export { marketChartStore };
