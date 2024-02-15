import "./CoinBoxes.css";

const CoinBoxes = ({image, symbol, name, price_usd, percentage}) => {
  return (
    <div className="coin-boxes">
      <img src={image} alt={name} />
      <div className="about-coin">
        <p>
          {name} <span className="symbol">({symbol})</span>
        </p>
        <div className="coin-price-info">
          <p>${price_usd}</p>
          <p className="up">+{percentage.toFixed(6)}%</p>
        </div>
      </div>
    </div>
  );
}

export default CoinBoxes