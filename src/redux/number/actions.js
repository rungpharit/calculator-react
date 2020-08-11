import actionTypes from './types';

export function zero(){
  return { type: actionTypes.ZERO };
}

export function one() {
  return { type: actionTypes.ONE };
}

export function two() {
  return { type: actionTypes.TWO };
}

export function three() {
  return { type: actionTypes.THREE };
}

export function four() {
  return { type: actionTypes.FOUR };
}

export function five() {
  return { type: actionTypes.FIVE };
}

export function six() {
  return { type: actionTypes.SIX };
}

export function seven() {
  return { type: actionTypes.SEVEN };
}

export function eight() {
  return { type: actionTypes.EIGHT };
}

export function nine() {
  return { type: actionTypes.NINE };
}

export function dot() {
  return { type: actionTypes.DOT };
}

export function switch_value() {
  return { type: actionTypes.SWITCH_VALUE  };
}

export function equal(payload){
  return { type: actionTypes.EQUAL, payload: payload };
}

export function clear(){
  return { type: actionTypes.CLEAR };
}

export function del(payload){
  return { type: actionTypes.DELETE, payload: payload };
}