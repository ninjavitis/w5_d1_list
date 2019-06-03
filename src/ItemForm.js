import React from "react";

class ItemForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {name: "", };

    //BINDINGS
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

// RENDAAAAAR!
render(){
  return(
    <form onSubmit = {this.handleSubmit}>
      <input 
        required
        placeholder = "New item name..."
        value = {this.state.name}
        name = "name"
        onChange = {this.handleChange}
      />
    </form>
  )
}

// FUNCTION BLOCK
handleSubmit(e){
  // prevent reloading
  e.preventDefault();

  this.props.addItem(this.state.name);
  this.setState({ name: ""})
}

handleChange(e){

  this.setState({ name: e.target.value, });

}



}

export default ItemForm;