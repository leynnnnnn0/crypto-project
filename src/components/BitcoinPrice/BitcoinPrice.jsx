import "./BitcoinPrice.css"
import { bitcoinstore } from "../../store/bitcoinStore";
import {
  AreaChart,
  Area,
} from "recharts";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";


const BitcoinPrice = () => {
  const store = bitcoinstore();
  const { name, symbol, image, btcPrice, change_percentage, usdPrice } = store.data; 

    useEffect(() => {
      store.fetchBitcoinMarketData();
    }, []);

  return (
    <div className="bitcoin-price">
      {name ? (
        <>
          <div className="about-bitcoin">
            <div className="bitcoin-logo">
              <img src={image} alt={name} />
              <h1>
                {name} <span className="symbol-design">{symbol}</span>
              </h1>
            </div>
            <div className="about-btc-price">
              <h1>${usdPrice && usdPrice.toLocaleString()}</h1>
              <div className="price-info">
                <p>{btcPrice}</p>
                <p className={change_percentage > 0 ? "up" : "down"}>
                  {change_percentage && change_percentage.toFixed(2)}%
                </p>
              </div>
            </div>
            <div className="bitcoin-buttons">
              <button>Withdraw</button>
              <button>Deposit</button>
            </div>
          </div>
          <div className="bitcoin-chart">
            <AreaChart
              width={350}
              height={150}
              data={store.graphData && store.graphData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Area
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                fill="#7fffd4"
              />
            </AreaChart>
          </div>
        </>
      ) : 
        <ClipLoader color="rgba(174, 176, 176, 1)" />
      }
    </div>
  );
}


export default BitcoinPrice