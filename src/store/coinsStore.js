import { create } from "zustand";
import axios from "axios";

const coinsStore = create((set) => ({
    coins: [],

    fetchCoins: async () => {
        try {
            const result = await axios.get(
              "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en"
            );
            const coins = result.data.map(item => {
                const { price_change_percentage_24h, image, name, current_price } = item;
                return {
                    name,
                    image,
                    current_price,
                    price_change_percentage_24h
                }
            })
            set({ coins });

        } catch (err) {
            console.log(err)
        }
    }

}));


export {coinsStore}