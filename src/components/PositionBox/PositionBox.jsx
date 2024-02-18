import "./PositionBox.css"

const PositionBox = ({coins, image, name, symbol , entryPrice}) => {

  return (
    <div className="position-box">
      <div className="w-or-l">
              <p className="up">{coins}</p>
      </div>
      <div className="entry-current-price">
        <div className="entry">
          <p>Entry Price</p>
                  <p>{entryPrice}</p>
        </div>
        <div className="current">
          <p>Current Price</p>
          <p>0.342343</p>
        </div>
      </div>
      <div className="coin-image">
              <img src={image} alt={name} />
              <div>
                  <p>{ name}</p>
                  <p>{symbol}</p>
              </div>
      </div>
    </div>
  );
}

export default PositionBox