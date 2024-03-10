// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isTrue} = props
  return (
    <nav className="nav-bar">
      <div className="nav-bar-card">
        <div className="emoji-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo-image"
          />
          <h1 className="emoji-heading">Emoji Game</h1>
        </div>
        {isTrue === true && (
          <div className="score-container">
            <p className="score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
