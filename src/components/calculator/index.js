import React, { Component } from 'react';
import { connect } from 'react-redux';

import { equal, clean, del ,plus, subtract, multiply, divide, modulus } from '../../redux/operator/actions';
import { zero, one, two ,three, four, five, six, seven, eight, nine } from '../../redux/number/actions';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      previousValue : 0,
      operator : '',
      currentValue : 0
  
    }
   
  }

 
  
  render(){
    return(
      <div >
        <div>
          <input type="text" value={this.state.previousValue} />
          <input type="text" value={this.state.operator} />
          <input type="text" value={this.state.currentValue} />
        </div>
        <div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return  {
   
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Calculator);