import React from 'react';

const CheckBoxes = (props) => {
		return (	
		<div>	  
		   <input type="checkbox" onChange={()=>props.onCheckBoxClick(props.checkBoxElement)} checked={props.checkBoxElement.checked}/> <label>{props.checkBoxElement.label}</label>
		</div>
	    );  
	
}


export default CheckBoxes;