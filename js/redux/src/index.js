import { createStore, combineReducers } from "redux";

import $ from "jquery";

import Rx from "rxjs/Rx";

import _ from "lodash";

// reducer

let reducer1 = function (state = [], action) {
    // console.log("reducer=action==>", action);
    switch (action.type) {
        case 'SET_NAME':
            return action.name;
        default:
            return state;
    }
    return state;
};

// reducer

let reducer2 = function (state = [], action) {
    // console.log("reducer=action==>", action);
    switch (action.type) {
        case 'GET_NAME':
            return [
                ...state
            ]
        default:
            return state;
    }
    return state;
}

// combineReducers

let reducer = combineReducers({
    reducer1: reducer1,
    reducer2: reducer2
})

// store

let store_1 = createStore(reducer);


// subscribe
store_1.subscribe(res => {
    $("#result").text(store_1.getState().reducer1);
})

// action
var setNameActionCreator = function (name) {
    return {
        type: 'SET_NAME',
        name: name
    }
}

// view

let min = Rx.Observable.fromEvent($("#min"), 'keyup');
let max = Rx.Observable.fromEvent($("#max"), 'keyup');
let num = Rx.Observable.fromEvent($("#num"), 'keyup');

let input = Rx.Observable.combineLatest(min,max,num);
input.map(_=>_.map(v=>parseInt(v.target.value))).subscribe(res => {
    let n1 = res[0];
    let n2 = res[1];
    let n3 = res[2];
    let list = [];
    if (n3 > 0) {
        while (n3 > 0) {
            let val = n2 - n1>0?Math.round(n1 + Math.random()*(n2 - n1)):'';
            list = _.union(list,[val]);
            n3--;
        }
        store_1.dispatch(setNameActionCreator(list));
    }
})