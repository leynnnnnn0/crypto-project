import { walletStore } from "../../store/walletStore"
import "./WalletOverview.css"

const WalletOverview = () => {
    const store = walletStore();
    const data = store.transactions;
  return (
      <div className="wallet-overview">
          <div className="money-overview">
              <p>Current Balance</p>
              <h3 className="amount">${store.currentBalance.toLocaleString()}</h3>
          </div>
          <div className="position-overview">
              <p>Positions</p>
              <div className="position-box-list-overview">
                  {data && data.map(item => {
                      return (
                          <div className="position-box-overview">
                        <img src={item.image} alt="bitcoin" />
                        <div className="little-name">
                              <p>{item.name}</p>
                              <p className="small">{item.symbol}</p>
                        </div>
                      </div>
                      )
                      
                  })}
              </div>
          </div>
    </div>
  )
}

export default WalletOverview