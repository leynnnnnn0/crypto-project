import "./Market.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AreaChart, Area } from "recharts";
import { trendingCoinsStore } from "../../store/trendingCoinsStore";
import { useEffect, useState } from "react";
import CoinBoxes from "../../components/CoinBoxes/CoinBoxes";
import { marketChartStore } from "../../store/marketChartStore";
import SearchBar from "../../components/SearchBar/SearchBar";
import NoResult from "../../components/NoResult/NoResult";
import BuyAndSell from "../../components/BuyAndSell/BuyAndSell";
import OutsideClickHandler from "react-outside-click-handler";
import { walletStore } from "../../store/walletStore";

const Market = () => {
  const store = trendingCoinsStore();
  const coins = store.coins;
  const store2 = marketChartStore();
  const chartData = store2.chartData;
  const { name, symbol, image, usdPrice, btcPrice, change_percentage } = store2.coinInfo;
  const [show, setShow] = useState(false);
  const wallet = walletStore();

  const [position, setPosition] = useState("");

  const handleShow = (position) => {
    wallet.setCurrentPrice(usdPrice);
    setShow(!show);
    setPosition(position);
  };
    

  useEffect(() => {
    store2.fetchChartData();
  }, [store2.range]);

  const trendingCoins = coins.map((item) => {
    return (
      <CoinBoxes
        key={item.name}
        name={item.name}
        symbol={item.symbol}
        image={item.image}
        price_usd={item.price}
        percentage={item.percentage}
      />
    );
  });

  useEffect(() => {
    store.fetchCoinsData();
  }, [store2.range]);

  return (
    <div className="market">
      {show && (
        <OutsideClickHandler onOutsideClick={handleShow}>
          <BuyAndSell
            position={position}
            currentPrice={usdPrice.toLocaleString()}
          />
        </OutsideClickHandler>
      )}
      <section className="side-bar-section">
        <Sidebar />
      </section>
      <div className="coin-details">
        <div className="searh">
          <SearchBar />
        </div>
        <h1>MARKET</h1>
        {chartData.length > 0 ? (
          <>
            <div className="about-the-coin">
              <img src={image} alt={name} />
              <h3>
                {name} <span className="symbol-design">{symbol}</span>
              </h3>
            </div>
            <div className="more">
              <p>Price in usd: {usdPrice}</p>
              <p>Price in btc: {btcPrice}</p>
              <p>
                Change Percentage:{" "}
                <span className={change_percentage > 0 ? "up" : "down"}>
                  {change_percentage}%
                </span>
              </p>
            </div>

            <div className="market-chart-area">
              <AreaChart
                width={700}
                height={400}
                data={chartData}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area
                  type="monotone"
                  dataKey="price"
                  stroke="aqumarine"
                  fill="aquamarine"
                />
              </AreaChart>
              <div className="range-buttons">
                <button onClick={() => store2.setRange(7)}>Day</button>
                <button onClick={() => store2.setRange(30)}>Week</button>
                <button onClick={() => store2.setRange(120)}>Months</button>
                <button onClick={() => store2.setRange(365)}>Years</button>
                <button className="buy" onClick={() => handleShow("buy")}>
                  BUY
                </button>
                <button className="sell" onClick={() => handleShow("sell")}>
                  SELL
                </button>
              </div>
            </div>
          </>
        ) : (
          <NoResult />
        )}
      </div>
      <div className="treding-coin-sidebar">{coins && trendingCoins}</div>
    </div>
  );
};

export default Market;
