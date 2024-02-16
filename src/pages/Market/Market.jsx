import "./Market.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  AreaChart,
  Area,
} from "recharts";
import { trendingCoinsStore } from "../../store/trendingCoinsStore";
import { useEffect } from "react";
import CoinBoxes from "../../components/CoinBoxes/CoinBoxes";
import { marketChartStore } from "../../store/marketChartStore";

const Market = () => {
    const store = trendingCoinsStore();
  const coins = store.coins;
  const store2 = marketChartStore();
  const chartData = store2.chartData;

  useEffect(() => {
    store2.fetchChartData();
  }, [store2.range])

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
    }, [store2.range])
    
  return (
    <div className="market">
      <section className="side-bar-section">
        <Sidebar />
      </section>
      <div className="market-chart-area">
        <AreaChart
          width={400}
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
          <button onClick={() => store2.setRange(1)}>Day</button>
          <button onClick={() => store2.setRange(7)}>Week</button>
          <button onClick={() => store2.setRange(120)}>Months</button>
          <button onClick={() => store2.setRange(365)}>Years</button>
        </div>
      </div>
      <div className="treding-coin-sidebar">{coins && trendingCoins}</div>
    </div>
  );
}

export default Market