import "./BuyAndSell.css"
import Logo from "../../images/btc.png"
import { walletStore } from "../../store/walletStore";
import { useEffect } from "react";
import { marketChartStore } from "../../store/marketChartStore";

const BuyAndSell = () => {
    const market = marketChartStore();
    const { name, symbol, image, usdPrice,  } =
      market.coinInfo;
    const wallet = walletStore();

    const handleButton = (e) => {
        e.preventDefault();
        wallet.setTransactionInfo(image, name, symbol, usdPrice);
    }
    useEffect(() => {
        wallet.setTotalAmount();
    }, [wallet.numOfCoins]);
  return (
    <div className="buy-and-sell">
      <div className="b-and-s-box">
        <div className="b-or-s">
          <h3>BUY</h3>
        </div>
        <form>
          <div className="num-of-coins">
            <input type="text" onChange={(e) => wallet.setNumOfCoins(e)} />
            <p>Number of coins</p>
          </div>
          <div className="coin-to-buy-info">
            <div className="coin-image">
              <img src={image} alt="name" />
              <div>
                <p>{name}</p>
                <p>{symbol}</p>
              </div>
            </div>
            <p>Current Price: ${usdPrice}</p>
                      <p>Amount to pay: ${ wallet.totalAmount.toLocaleString()}</p>
          </div>
          <div className="place-order">
            <button onClick={handleButton}>Place Order</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BuyAndSell