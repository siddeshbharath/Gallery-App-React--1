// Write your code here.
// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachList, changeImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachList

  const activeButton = isActive ? 'active-button' : 'opacity-button'

  const onchangeImage = () => {
    changeImage(id)
  }

  return (
    <li>
      <button type="button" className={activeButton} onClick={onchangeImage}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="tumb-image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
