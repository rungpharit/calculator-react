import actionTypes from './types';

export function clear_operator(){
  return { type: actionTypes.CLEAR_OPERATOR };
}

export function plus(){
  return { type: actionTypes.PLUS };
}

export function subtract(){
  return { type: actionTypes.SUBTRACT };
}

export function multiply(){
  return { type: actionTypes.MULTIPLY };
}

export function divide(){
  return { type: actionTypes.DIVIDE };
}

export function modulus(){
  return { type: actionTypes.MODULUS };
}