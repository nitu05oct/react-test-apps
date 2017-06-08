import React from 'react';
import CheckBoxes from './CheckBoxes';

const TodoList = (props) => {

	return (
	  <ul>
      	{props.items.map((item,index)=>{return (
				<CheckBoxes key={index} onCheckBoxClick={props.onCheckBoxClick} checkBoxElement={item} />
			)})}
      </ul>
    );  
}

export default TodoList;