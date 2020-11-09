import './App.css';
import React from 'react';
import ShoppingList from './ShoppingList';
import AddBox from './AddBox'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemList: [
        {itemName: "milk", due: "Monday"}, 
        {itemName: "bread", due: "Tuesday"},
        {itemName: "cheese", due: "Wednesday"},
      ],
      addBoxInput: "",
      dateValue: "",
      filterDateValue: "",
    }
  }

  handleAddBoxChange = (event) => {
    this.setState({addBoxInput: event.target.value});
  }

  handleDateChange = (event) => {
    this.setState({dateValue: event.target.value});
  }

  handleAddItem = () => {
    let newList = this.state.itemList;
    newList.push({itemName: this.state.addBoxInput, due: this.state.dateValue});
    this.setState({
      itemList: newList,
      addBoxInput: ""
    });
  }

  handleDelete = (name) => {
    let newList = this.state.itemList.filter(item => item.itemName !== name)
    this.setState({itemList: newList});
  }

  handleEdit = (name) => {
    let newText = prompt("Enter updated text:", this.state.addBoxInput)
    let newList = this.state.itemList.map(item => {
      if(item.itemName === name) {
        item.itemName = newText;
      }
      return item;
    })
    this.setState({itemList: newList});
  }

  render() {
    return (
      <div>
        <h3>Shopping List App</h3>
        <label>Date Filter</label>
        <select onChange={(event) => this.setState({filterDateValue: event.target.value})} value={this.state.filterDateValue}>
            <option value=""></option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
        </select>
        <button type="button" onClick={() => {this.setState({filterDateValue: ""})}}>Clear Filter</button>
        <ShoppingList 
          itemList={this.state.itemList}
          onDelete={this.handleDelete} 
          onEdit={this.handleEdit}
          filterDateValue={this.state.filterDateValue}
        />
        <AddBox 
          onAddBoxChange={this.handleAddBoxChange}
          onAddItem={this.handleAddItem}
          addBoxValue={this.state.addBoxInput}
          onDateChange={this.handleDateChange}
          dateValue={this.state.dateValue}
        />
      </div>
    );
  }
  
}

export default App;
