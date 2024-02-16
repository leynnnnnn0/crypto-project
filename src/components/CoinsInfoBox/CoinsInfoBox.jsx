import "./CoinsInfoBox.css";

const CoinsInfoBox = ({name, image, percent, price}) => {
  return (
      <div className="coins-box-info">
      <div className="coin-name-image">
        <img src={image} alt={name} />
        <h3>{name}</h3>
      </div>
      <div className="coin-price">
        <span>${price}</span>
      </div>
      <div className="percent-change">
        <span className={percent > 0 ? "up" : "down"}>{percent}%</span>
      </div>
    </div>
  )
}

export default CoinsInfoBox