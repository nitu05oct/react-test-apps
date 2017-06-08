import React, { Component } from 'react';
import TodoBanner from './TodoBanner';
import TodoList from './TodoList';
import SectionTitle from './SectionTitle';

import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor(props) {
    super(props);
  this.state = {
    toDoItems: [],
    completedDoItems: []
  }

  this.markCompleted = this.markCompleted.bind(this);
  this.markUnCompleted  = this.markUnCompleted.bind(this);
  this.addTodo = this.addTodo.bind(this);
  
};

addTodo() {
   //console.log(this.state);
   const {toDoItems,completedDoItems} = this.state;
   const label = this.refs.label.value;
    if(label != ''){
      toDoItems.push({
          checked: false,
          label
      });

      this.setState({
          toDoItems
      });

      this.refs.label.value = '';
      console.log(this.state);
  }
}

markCompleted(element) {
    console.log('mark item done');
   // console.log(element);
    const {completedDoItems, toDoItems} = this.state;
   //// console.log(index);
   // console.log( completedDoItems[index]);

   //completedDoItems[index].checked = !completedDoItems[index].checked;

   let index = toDoItems.indexOf(element); 
   console.log(index);
   const label = element.label;
   completedDoItems.push({
        checked: true,
        label
    });

    this.setState({
        completedDoItems
    });
     
    toDoItems.splice(index, 1); 

     this.setState({
        toDoItems
    });

    //console.log(e.target.value);
    //console.log(i);

}  

markUnCompleted(element) {

   console.log('mark item undone');
   const {completedDoItems, toDoItems} = this.state;
   let index = completedDoItems.indexOf(element); 
   console.log(index);
   const label = element.label;
   toDoItems.push({
        checked: false,
        label
    });

    this.setState({
        toDoItems
    });
     
    completedDoItems.splice(index, 1); 

     this.setState({
        completedDoItems
    });
    //console.log(e);
}  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <TodoBanner/>
        </div>
        <SectionTitle headerText="Pending TODOs"/>
        <TodoList items={this.state.toDoItems} onCheckBoxClick={this.markCompleted}/> <br/>
        <SectionTitle headerText="Completed TODOs"/>
        <TodoList items={this.state.completedDoItems} onCheckBoxClick={this.markUnCompleted}/>
        <br/>
        <input ref="label" type="text"/>
        <button onClick={this.addTodo}>Add ToDo</button>
      </div>
    );
  }
}

export default App;
