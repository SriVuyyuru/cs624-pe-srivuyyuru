import React, {Component} from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList'
import TodoButton from './Button'
import SubmitButton from './SubmitButton'

let todoIndex = 0

class App extends Component{
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'ALL',
    };

    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  submitTodo () {
    if (this.state.inputValue.match(/^\s*$/)) { 
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex, 
      complete: false
    }
    todoIndex++ 
    
    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    }) 
  }

  toggleComplete (todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  deleteTodo (todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  inputChange(inputValue) {
    console.log('Input value: ', inputValue);
    this.setState({inputValue});
  }

  render() {
    const {inputValue, todos} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input 
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <TodoList todos={todos} 
            toggleComplete={this.toggleComplete} 
            deleteTodo={this.deleteTodo} />
          <SubmitButton submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});


export default App;
