import CoinsInfoBox from "../CoinsInfoBox/CoinsInfoBox"
import "./AllCoins.css"
import { coinsStore } from "../../store/coinsStore"
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../Data/sliderSettings";
import { ClipLoader } from "react-spinners";

const AllCoins = () => {
  const store = coinsStore();
  const coins = store.coins;
  console.log(coins)
  
  const data = coins.map(item => {
    const { name, image, current_price, price_change_percentage_24h } = item;
    return (
      <SwiperSlide key={name}>
        <CoinsInfoBox
          key={name}
          name={name}
          image={image}
          price={current_price}
          percent={price_change_percentage_24h}
        />
      </SwiperSlide>
    );
  })

    useEffect(() => {
        store.fetchCoins();
    }, [0])

  return (
    <div className="all-coins">
      {coins.length > 0 ? (
        <Swiper {...sliderSettings} direction={"vertical"}>
          {coins && data}
        </Swiper>
      ) : (
        <ClipLoader color="rgba(174, 176, 176, 1)" />
      )}
    </div>
  );
}

export default AllCoins