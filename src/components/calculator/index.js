import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './calculator.module.css'

import { plus, subtract, multiply, divide, modulus,clear_operator,add_operator } from '../../redux/operator/actions';
import { dot, zero, one, two ,three, four, five, six, seven, eight, nine, switch_value,equal, clear, del ,minus_sign} from '../../redux/number/actions';
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
        <div className={styles.titleHead}>
            CALCULATOR
        </div>
        <div className={styles.showValue}>
          <div className={styles.top}>
            <input readOnly type="text" value={this.props.previousValue}  />
            <input readOnly type="text" value={this.props.operator}  />
          </div>
          <div className={styles.bottom}>
            <input readOnly type="text" value={this.props.currentValue}  />
          </div>    
        </div>
        <div className={styles.operation}>
          <div className={styles.btn}>
            <button onClick={() => {this.props.clear(); this.props.clear_operator()}} className={styles.redColor}>C</button>
            <button onClick={() => { this.checkValue(); this.props.del()}} className={styles.redColor}>Del</button>
            <button onClick={() => { this.checkValue(); this.props.modulus(); }} className={styles.blueColor}>MOD</button>
            <button onClick={() => { this.checkValue(); this.props.divide(); }}
            className={styles.blueColor}>/</button>
          </div>

          <div className={styles.btn}>
            <button onClick={() => this.props.seven()} className={styles.numberColor}>7</button>
            <button onClick={() => this.props.eight()} className={styles.numberColor}>8</button>
            <button onClick={() => this.props.nine()} className={styles.numberColor}>9</button>
            <button onClick={() => { this.checkValue(); this.props.multiply(); }} className={styles.blueColor}>x</button>
          </div>

          <div className={styles.btn}>
            <button onClick={() => this.props.four()} className={styles.numberColor}>4</button>
            <button onClick={() => this.props.five()} className={styles.numberColor}>5</button>
            <button onClick={() => this.props.six()} className={styles.numberColor}>6</button>
            <button onClick={() => { this.checkValue(); this.props.subtract(); }} className={styles.blueColor}>-</button>
          </div>

          <div className={styles.btn}>
            <button onClick={() => this.props.one()} className={styles.numberColor}>1</button>
            <button onClick={() => this.props.two()} className={styles.numberColor}>2</button>
            <button onClick={() => this.props.three()} className={styles.numberColor}>3</button>
            <button onClick={() => { this.checkValue(); this.props.plus() }}  className={styles.blueColor}>+</button>

          </div>

          <div className={styles.btn}>
            <button onClick={() => this.props.minus_sign()}  className={styles.redColor}>+/-</button>  
            <button onClick={() => this.props.zero()} className={styles.numberColor}>0</button>
            <button onClick={() => this.props.dot()} className={styles.numberColor}>.</button>
            <button onClick={() => {this.props.equal(this.getData()); this.props.clear_operator()}}  className={styles.blueColor}>=</button>
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
    add_operator : () => dispatch(add_operator()),
    minus_sign : () => dispatch(minus_sign())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator);