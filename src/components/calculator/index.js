import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './calculator.module.css'

import { plus, subtract, multiply, divide, modulus,clear_operator,add_operator } from '../../redux/operator/actions';
import { dot, zero, one, two ,three, four, five, six, seven, eight, nine, switch_value,equal, clear, del } from '../../redux/number/actions';
import calculate from '../../help/calculate';

class Calculator extends Component {
  constructor(props){
    super(props);

    this.getData = this.getData.bind(this);
    this.checkValue = this.checkValue.bind(this);
  }
  
  getData(){
    const data = {
      previousValue : parseFloat(this.props.previousValue), 
      operator : this.props.actionType, 
      currentValue : parseFloat(this.props.currentValue)
    }
    console.log(data)
    const result = calculate(data)
    return result
  }

  checkValue(){
    if(this.props.previousValue === ""){
      this.props.switch_value() ; 
    }else{
      this.props.add_operator()

    }
  }

  render(){
    return(
      <div className={styles.container}>
        <div className={styles.showValue}>
          <div>
            <input readOnly type="text" value={this.props.previousValue} />
            <input readOnly type="text" value={this.props.operator} />
          </div>
          <div>
            <input readOnly type="text" value={this.props.currentValue} />
          </div>    
        </div>
        <div className={styles.operation}>
          <div>
            <button onClick={() => {this.props.clear(); this.props.clear_operator()}}>C</button>
            <button onClick={() => { this.checkValue(); this.props.del() }}>Del</button>
            <button onClick={() => { this.checkValue(); this.props.modulus(); }}>MOD</button>
            <button onClick={() => { this.checkValue(); this.props.divide(); }}>/</button>
          </div>

          <div>
            <button onClick={() => this.props.seven()}>7</button>
            <button onClick={() => this.props.eight()}>8</button>
            <button onClick={() => this.props.nine()}>9</button>
            <button onClick={() => { this.checkValue(); this.props.multiply(); }}>x</button>
          </div>

          <div>
            <button onClick={() => this.props.four()}>4</button>
            <button onClick={() => this.props.five()}>5</button>
            <button onClick={() => this.props.six()}>6</button>
            <button onClick={() => { this.checkValue(); this.props.subtract(); }}>-</button>
          </div>

          <div>
            <button onClick={() => this.props.one()}>1</button>
            <button onClick={() => this.props.two()}>2</button>
            <button onClick={() => this.props.three()}>3</button>
            <button onClick={() => { this.checkValue(); this.props.plus() }}>+</button>

          </div>

          <div>
            <button onClick={() => this.props.zero()}>0</button>
            <button onClick={() => this.props.dot()}>.</button>
            <button onClick={() => {this.props.equal(this.getData()); this.props.clear_operator()}}>=</button>
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return  {
    previousValue : state.number.previousValue,
    currentValue : state.number.currentValue,
    operator : state.operator.operator,
    actionType : state.operator.actionType,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    zero: () => dispatch(zero()),
    one: () => dispatch(one()),
    two: () => dispatch(two()),
    three: () => dispatch(three()),
    four: () => dispatch(four()),
    five: () => dispatch(five()),
    six: () => dispatch(six()),
    seven: () => dispatch(seven()),
    eight: () => dispatch(eight()),
    nine: () => dispatch(nine()),
    dot: () => dispatch(dot()),
    switch_value : () => dispatch(switch_value()),
    
    clear_operator: () => dispatch(clear_operator()),
    equal: (data) => dispatch(equal(data)),
    clear: () => dispatch(clear()),
    del: () => dispatch(del()),
    plus: () => dispatch(plus()),
    subtract: () => dispatch(subtract()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    modulus: () => dispatch(modulus()),
    add_operator : () => dispatch(add_operator())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator);