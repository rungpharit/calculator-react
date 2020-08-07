import React, { Component } from 'react';
import { connect } from 'react-redux';

import { equal, clean, del ,plus, subtract, multiply, divide, modulus } from '../../redux/operator/actions';
import { zero, one, two ,three, four, five, six, seven, eight, nine } from '../../redux/number/actions';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
  
    }
   
  }

 
  
  render(){
    return(
      <div className={style.container}>
      
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