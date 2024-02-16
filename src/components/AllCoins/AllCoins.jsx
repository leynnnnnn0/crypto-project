import CoinsInfoBox from "../CoinsInfoBox/CoinsInfoBox"
import "./AllCoins.css"
import { coinsStore } from "../../store/coinsStore"
import { useEffect } from "react";

const AllCoins = () => {
  const store = coinsStore();
  const coins = store.coins;
  console.log(coins)
  
  const data = coins.map(item => {
    const { name, image, current_price, price_change_percentage_24h } = item;
    return (
        <CoinsInfoBox
          key={name}
          name={name}
          image={image}
          price={current_price}
          percent={price_change_percentage_24h}
        />
    );
  })

    useEffect(() => {
        store.fetchCoins();
    }, [0])

  return (
    <div className="all-coins">
        {coins && data}

    </div>
  );
}

export default AllCoins