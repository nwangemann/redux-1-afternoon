import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, {UPDATE_INSTRUCTIONS, UPDATE_LIST} from '../../store'

class Instructions extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState()
    this.state = {
      instructions: reduxState.instructions,
      input: ""
    };
  }

  componentDidMount(){
    store.subscribe(() => { 
      let newState = store.getState() 
      this.setState({
        instructions: newState.instructions
      })
    })
  }

  handleChange(val) {
    this.setState({
      input: val
    });
  }
  addInstruction() {
    let action = {
      type: UPDATE_INSTRUCTIONS,
      payload: this.state.input
    }
    store.dispatch(action)
    this.setState({
      input: ""
    });
  }
  create() {
    store.dispatch({
      type: UPDATE_LIST
    })
    // store.dispatch({
    //   type: CLEAR_FIELDS
    // })
  }
  render() {
    const instructions = this.state.instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });
    return (
      <div className="List forms">
        <h2>Instructions:</h2>
        <div className="form_items_container">
          <ol className='list'>{instructions}</ol>
        </div>
        <div className="add_container">
          <input
            value={this.state.input}
            onChange={e => this.handleChange(e.target.value)}
          />
          <button className="add_button" onClick={() => this.addInstruction()}>
            Add Instruction
          </button>
        </div>
        <Link to="/add/ingredients">
          <button className='left_button'>Previous</button>
        </Link>
        <Link to="/">
          <button className='right_button' onClick={() => this.create()}>Create</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;
