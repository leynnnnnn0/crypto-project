import { trendingCoinsStore } from "../store/trendingCoinsStore";
import { sliderSettings } from "../Data/sliderSettings";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoinBoxes from "../components/CoinBoxes/CoinBoxes"

const Slider = () => {
    const store = trendingCoinsStore();
    const coins = store.coins;

    const data = coins.map((item) => {
      return (
        <SwiperSlide key={item.symbol}>
          <CoinBoxes
            key={item.name}
            name={item.name}
            symbol={item.symbol}
            image={item.image}
            price_usd={item.price}
            percentage={item.percentage}
          />
        </SwiperSlide>
      );
    });
    useEffect(() => {
      store.fetchCoinsData();
    }, []);
  return (
      <>
          <Swiper speed={500} {...sliderSettings}>
              {coins && data}
          </Swiper>
      </>
  )
}

export default Slider