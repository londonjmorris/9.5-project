import React, {Component} from 'react';

export default class Form extends Component{
  constructor(){
    super();
    this.state = {
      value: '',
      pilot: ''
    }
  }
  render() {
    return (
      <form className="d-flex justify-content-center bg-faded">
        <div className="form-group text-center w-33">
          <h3 className="text-center">What is your name, pilot?</h3>
          <input type="text" className="form-control"/>
          <input type="submit" className="btn btn-primary"/>
        </div>
      </form>
  )}
}
