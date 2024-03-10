// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickingEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="emoji-card">
      <button className="emoji-button" onClick={onClickingEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard
