import "./Wallet.css"
import Sidebar from "../../components/Sidebar/Sidebar";
import PositionBox from "../../components/PositionBox/PositionBox";
import { walletStore } from "../../store/walletStore";
import { useEffect } from "react";

const Wallet = () => {
    const store = walletStore();
    const data = store.transactions;

    const positions = data.map(item => {
        const { image, name, symbol, numOfCoins, entryPrice } = item;
        return (
          <PositionBox
            key={numOfCoins}
            image={image}
            name={name}
            symbol={symbol}
                coins={numOfCoins}
                entryPrice={entryPrice}
          />
        );
    })

    useEffect(() => {
        
    }, [store.currentBalance])


  return (
    <div className="wallet">
      <section className="side-bar-section">
        <Sidebar />
      </section>
      <div className="wallet-info">
        <h1>Wallet</h1>
        <div className="wallet-money">
          <div className="wallet-balance">
            <p>Total Balance</p>
                      <h3 className="amount">${store.currentBalance.toLocaleString()}</h3>
          </div>
          <div className="money">
            <p>Money</p>
            <h3 className="amount">$523,452,43</h3>
          </div>
          <div className="p-and-l">
            <p>Profit and Loss</p>
            <h3 className="amount">$36,003,43</h3>
          </div>
        </div>
        <div className="positions">
          <h1>Positions</h1>
          <div className="positions-list">
            {positions && positions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet