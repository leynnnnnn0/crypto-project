import { create } from "zustand";
import axios from "axios";

const trendingCoinsStore = create((set) => ({
    coins: [],
    fetchCoinsData: async () => {
        try {
          const coinsData = await axios.get(
            "https://api.coingecko.com/api/v3/search/trending"
          );

            const coins = coinsData.data.coins.map((item) => {
              return {
                name: item.item.name,
                symbol: item.item.symbol,
                image: item.item.large,
                price: item.item.data.price,
                percentage: item.item.data.price_change_percentage_24h.usd,
              };
            });
            set({ coins });
        } catch (err) {
            console.log(err);
        }

    }

}));

export { trendingCoinsStore };
