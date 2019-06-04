import React from 'react';

const Item = (props) => (
<li
  style={ props.complete ? {...styles.item, ...styles.complete} : styles.item }
  onClick= {() => props.itemClick(props.id)}
>
  {props.name}
  <div>EDIT</div>
  <div>DELETE</div>
</li>

)

const styles = {
  item: { cursor: "pointer", },
  complete: { color:"grey", textDecoration:"line-through", },
}


export default Item;