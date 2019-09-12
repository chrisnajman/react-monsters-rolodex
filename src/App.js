import React, {Component} from 'react'
import './App.css';

import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(users => this.setState({ monsters: users}))
  }

  searchBoxHandler = e => {
    this.setState({
      searchField: e.target.value
    })
  }

  render(){
    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <p style={{color: "white", maxWidth: 500, margin: "16px auto"}}>Very simple React App - type letters into the search box - if there are any matches in the names or email only those cards will be displayed.</p>
        <SearchBox 
          // handleChange={(e) => this.setState({searchField: e.target.value})} 
          handleChange={this.searchBoxHandler}
          placeholder={'Search monsters'} 
        />

        <CardList monsters={filteredMonsters} />
        
      </div>
    )
  }
}

export default App









