/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojisList,
      score: 0,
      topScore: 0,
      myCountList: [],
      isTrue: true,
    }
  }

  onResetList = () => {
    const {emojisList} = this.props

    const {score, topScore} = this.state
    let a
    if (score > topScore) {
      if (score === 11) {
        a = score + 1
      } else {
        a = score
      }
    } else {
      a = topScore
    }

    this.setState({
      emojisList,
      isTrue: true,
      score: 0,
      myCountList: [],
      topScore: a,
    })
  }

  onClickEmoji = id => {
    const {myCountList, score, topScore} = this.state
    const {emojisList} = this.props
    const b = emojisList.sort(() => Math.random() - 0.5)
    const x = myCountList.length === emojisList.length - 1
    this.setState(obj => {
      if (x) {
        return {isTrue: !obj.isTrue, score: obj.score + 1}
      }

      if (obj.myCountList.includes(id)) {
        return {isTrue: !obj.isTrue}
      }

      return {
        emojisList: b,
        myCountList: [...obj.myCountList, id],
        score: obj.score + 1,
      }
    })
  }

  render() {
    const {emojisList, isTrue, score, topScore} = this.state
    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isTrue={isTrue} />
        <div className="emojis-container">
          <ul className="emojis-card">
            {isTrue === false ? (
              <WinOrLoseCard score={score} onResetList={this.onResetList} />
            ) : (
              emojisList.map(each => (
                <EmojiCard
                  emojiDetails={each}
                  key={each.id}
                  onClickEmoji={this.onClickEmoji}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
