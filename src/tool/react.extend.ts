import { useState, useEffect } from 'react';
import { startObserver, observable as obs, observable } from './observable';

// export function useObserver<T>(obj: T) : T {
//     const [, setValue] = useState(0);
//     var state = { needUpdate: false };
//     var end = startObserver(() => {
//         !state.needUpdate && setTimeout(() => setValue({}));
//         state.needUpdate = true;
//     });
//     useEffect((e) => {
//         end();
//     });

//     return obj;
// }

// export function Observable(target, key, desc?) {
//     desc = desc || {};
//     function obs(ctx) {
//         if (!ctx[`_obs_$${key}$`]) {
//             ctx[`_obs_$${key}$`] = observable();
//         }

//         return  ctx[`_obs_$${key}$`];
//     }
//     desc.get = function () { return obs(this)(); }
//     desc.set = function (v) { obs(this)(v); }
//     Object.defineProperty(target, key, desc);    
// }

var currentObserver;
function observalizer<T>(obj: T) {
    if (obj) {
        for (var key in obj) {
            ((obj, key) => {
                var desc = Object.getOwnPropertyDescriptor(obj, key);
                if (!desc || !(desc.get || desc.set) && desc.configurable) {
                    var value = obj[key];
                    var listeners = [];
                    (value instanceof Object) && observalizer(value);
                    Object.defineProperty(obj, key, {
                        get: () => { 
                            currentObserver && (listeners.indexOf(currentObserver)<0) && listeners.push(currentObserver); 
                            return value; 
                        },
                        set: (v) => { 
                            value = v;
                            (v instanceof Object) && observalizer(v);
                            listeners.forEach(_ => _());
                        }
                    });
                }
            })(obj, key);
        }
    }
}

var observers = {};
export function useObserver<T>(obj: T) : T {
    const [, setValue] = useState(0);
    const [id] = useState(`id${new Date().getTime()}${Math.random()*100}`);

    var observer = observers[id] = observers[id] || (() => {
        setValue({ value: obj });
    });

    const previousObserver = currentObserver;
    currentObserver = observer;
    observalizer(obj);
    useEffect(() => {
        currentObserver = previousObserver;
    });

    return obj;
}

// function observablizer<T>(obj: T, subscribe: (listeners) => void) {
//     if (!(<any>obj).__observed__) {
//         var listeners: ((p: T) => void)[] = [];
//         var callback: (p: T) => void = (p) => listeners.forEach(_ => _(p));

//         for(var key in obj) {
//              var desc = Object.getOwnPropertyDescriptor(obj, key);
//             if (!desc || !(desc.get || desc.set)) {
//                 (() => {
//                     var value = obj[key];
//                     Object.defineProperty(obj, key, {
//                         get: () => { subscribe && subscribe(listeners); return value; },
//                         set: (v) => (value = v, callback && callback(obj))
//                     });
//                 })();
//             }
//         }

//         (<any>obj).__observed__ = true;
//     }

//     return obj;
// }

// var currentObserver = null;
// export function useObserver<T>(obj: T) : T {
//     const [state,] = useState(obj);
//     const [, setValue] = useState(0);
//     const previousObserver = currentObserver;
//     currentObserver = () => {
//         setValue({});
//     };
//     observablizer(state, (listeners) => {
//         listeners.push(currentObserver);
//     }); 
//     useEffect((e) => {
//         currentObserver = previousObserver;
//     });

//     return state;
// }

var inputFileValueDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");

Object.defineProperty(HTMLInputElement.prototype, "value", {
    configurable: true,
    get: function () {
        return inputFileValueDescriptor.get.call(this);
    },
    set: function (value) {
        if (this.type == "file") {
            if (!value || value.length <= 0) {
                inputFileValueDescriptor.set.call(this, '');
            }
        } else {
            inputFileValueDescriptor.set.call(this, value);
        }
    }
});