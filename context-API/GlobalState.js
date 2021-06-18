import React from 'react';
import Context from './context';

export default class GlobalState extends React.Component{
state = {
  token: '',
}
 
addNewToken = (token) => {
  const list = this.state.token;
  this.setState({token: list});
};
 
deleteToken = (taskId) => {
  this.setState(this.state.token.splice(taskId,1));
};
render(){
 return (
  <Context.Provider 
   value={{
    tasks: this.state.token,
    addNewTask: this.addNewTask,
    deleteTask: this.deleteTask
   }}
  >
   {this.props.children}
  </Context.Provider>
 );
 }
}