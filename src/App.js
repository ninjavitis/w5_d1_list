import React from 'react';
import List from './List';
import ItemForm from './ItemForm'
import { toUnicode } from 'punycode';
import { tsModuleBlock } from '@babel/types';

class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state = {
      items: [
        {id:1, name:"haggis", inCart:false, },
      ]
    };

    // BINDINGS
    this.addItem = this.addItem.bind(this);
  }

  // RENDARRRRRR!
  render(){
    return(
      <div>
        <ItemForm addItem = {this.addItem} /> 
        <List name="Shopping List" items={this.state.items} itemClick={this.handleClick} />
      </div>
    )
  }

// FUNCTION BLOCK
addItem(name){
  const item = {name, id: this.getUniqueId(), inCart:false, };
  this.setState({items: [item, ...this.state.items], });
}

getUniqueId = () => {
  //NOTE We are just using this as a helper function for id's since we aren't using a db yet
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

handleClick = (id) => {
  this.setState({
    items: this.state.items.map( item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete,
        }
      }
      return item;
    })
  })
}








}

export default App;
