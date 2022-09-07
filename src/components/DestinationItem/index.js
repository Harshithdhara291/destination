// Write your code here
const DestinationItem = props => {
  const {details} = props
  const {name, imgUrl} = details
  return (
    <li>
      <div>
        <img src={imgUrl} alt={name} />
        <h1>{name}</h1>
      </div>
    </li>
  )
}

export default DestinationItem
