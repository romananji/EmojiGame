// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onResetList} = props
  const cardImgUrl =
    score < 11
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const result = score < 11 ? 'You Lose' : 'You Won'
  const scoree = score < 11 ? 'Score' : 'Best Score'
  const c = score < 11 ? score : score
  const onReset = () => {
    onResetList()
  }
  return (
    <li className="result-card">
      <div className="result-text-container">
        <h1 className="result-heading">{result}</h1>
        <div className="anji">
          <p className="result-para">{scoree}</p>
          <p className="result-score">{c}/12</p>
          <button className="play-button" onClick={onReset}>
            Play Again
          </button>
        </div>
      </div>
      <img src={cardImgUrl} className="result-image" alt="win or lose" />
    </li>
  )
}
export default WinOrLoseCard
