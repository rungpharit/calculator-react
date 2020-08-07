import actionTypes from './types';

export function equal(){
  return { type: actionTypes.EQUAL };
}

export function clean(payload){
  return { type: actionTypes.CLEAN, payload: payload };
}

export function del(payload){
  return { type: actionTypes.DELETE, payload: payload };
}

export function plus(payload){
  return { type: actionTypes.PLUS, payload: payload };
}

export function subtract(payload){
  return { type: actionTypes.SUBTRACT, payload: payload };
}

export function multiply(payload){
  return { type: actionTypes.MULTIPLY, payload: payload };
}

export function divide(payload){
  return { type: actionTypes.DIVIDE, payload: payload };
}

export function modulus(payload){
  return { type: actionTypes.MODULUS, payload: payload };
}