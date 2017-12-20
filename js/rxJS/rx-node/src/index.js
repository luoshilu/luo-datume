
import num from "./rxExample.js";

import Rx from "rxjs/Rx";

import $ from "jquery";

let n = Rx.Observable.fromEvent($("#num"), "keyup");
let min = Rx.Observable.fromEvent($("#min"), "keyup");
let max = Rx.Observable.fromEvent($("#max"), "keyup");

let mg = Rx.Observable.combineLatest(n, min, max);
mg.map(_=>_.map(e=>e.target.value)).subscribe(
    res => {
        $("#input").text(num(res));
    }
);
