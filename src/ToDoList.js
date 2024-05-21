import { Component } from "react";
import star from './star.png';

export class ToDoList extends Component {
    state = {
        UserInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
      this.setState({UserInput: e });  
    }
addItem(input) {
    if (input === ''){
        alert ("Please enter an item!")
    }
    else {
    let listArray = this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, UserInput: ''})
}
}

deleteItem() {
    let listArray = this.state.toDoList;
    listArray.length = 0;
    this.setState({toDoList: listArray})
}
crossedWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');
}

onFormSubmit(e) {
 e.preventDefault();
}

    render() {
        return(
        <div>      
         <form onSubmit={ this.onFormSubmit }>
            <div className="container">
                <input type="text"
                placeholder="What are your plants for today?"
                onChange={ (e) => {this.onChangeEvent(e.target.value)}}
                value = { this.state.UserInput }/>
            </div>
            <div className="container">
                <button onClick={() => this.addItem(this.state.UserInput)} className="btn add">Add</button>
            </div>

                <ul>
                    { this.state.toDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={ index } alt="check-box">
                     <img src={ star } width="25px"/>
                     {item}</li>
                    ))}
                </ul>
                <div className="container">
            <button onClick={ () => this.deleteItem()} className="btn delete">Delete</button>
            </div>
         </form>
        </div>
        )
    }
} 
