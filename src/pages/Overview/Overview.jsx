import "./Overview.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import BitcoinPrice from "../../components/BitcoinPrice/BitcoinPrice"
import "swiper/css";
import "swiper/css/pagination";
import Slider from "../../components/Slider";
import AllCoins from "../../components/AllCoins/AllCoins";
import WalletOverview from "../../components/WalletOverview/WalletOverview";



const Overview = () => {
  

  return (
    <div className="overview">
      <section className="side-bar-section">
        <Sidebar />
      </section>
      <section className="overview-contents">
        <BitcoinPrice />
        <div className="trending">
          <h6>TRENDING COINS</h6>
          <Slider />
        </div>
        <section>
          <AllCoins/>
        </section>
      </section>
      <section className="wallet-and-position">
        <WalletOverview/>
      </section>
    </div>
  );
}

export default Overview