// Write your code here
import {Component} from 'react'
import DestinationItem from './components/DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    usersDetailsList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.name.includes(searchInput),
    )
    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul>
          {searchResults.map(eachUser => (
            <DestinationItem details={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
