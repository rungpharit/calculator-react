import actionTypes from './types';

export function zero(){
  return { type: actionTypes.ZERO };
}

export function one(payload){
  return { type: actionTypes.ONE, payload: payload };
}

export function two(payload){
  return { type: actionTypes.TWO, payload: payload };
}

export function three(payload){
  return { type: actionTypes.THREE, payload: payload };
}

export function four(payload){
  return { type: actionTypes.FOUR, payload: payload };
}

export function five(payload){
  return { type: actionTypes.FIVE, payload: payload };
}

export function six(payload){
  return { type: actionTypes.SIX, payload: payload };
}

export function seven(payload){
  return { type: actionTypes.SEVEN, payload: payload };
}

export function eight(payload){
  return { type: actionTypes.EIGHT, payload: payload };
}

export function nine(payload){
  return { type: actionTypes.NINE, payload: payload };
}
