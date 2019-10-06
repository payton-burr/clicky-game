import React, { Component } from 'react';
import Header from './components/Header';
import Item from './ItemList.json';
import ItemCard from './components/Items'

class App extends Component {
  state = {
    score: 0,
    highScore: 0,
    Item,
    itemArray: []
  }

  handleChange = (id) => {
    if(this.state.itemArray.includes(id)) {
      this.setState({
        score: 0, itemArray: []
      });
    } else {

      if(this.state.score > this.state.highScore) {
        let newScore = this.state.score;
        this.setState({ highScore: newScore })
      }
      this.state.itemArray.push(id);
      this.setState({
        score: this.state.score+1
      });
    }

    if(this.state.itemArray === 12) {
      this.setState({
        itemArray: []
      });
    }
    console.log(this.state.score);
    const shuffle = this.state.Item.sort(() => Math.random() - 0.5);
    this.setState({ Item: shuffle });
  }

    render() {
      return (
        <React.Fragment>
          <Header score={this.state.score} highScore={this.state.highScore}/>
          <div>
            {this.state.Item.map(item => (
              <ItemCard
                image={item.image}
                name={item.name}
                id={item.id}
                key={item.id}
                handleChange={this.handleChange}
            />))}
          </div>
        </React.Fragment>
      );
    }
  }

export default App;